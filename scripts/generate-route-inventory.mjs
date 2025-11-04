#!/usr/bin/env node
import { promises as fs } from 'node:fs'
import path from 'node:path'

const APP_DIR = path.join(process.cwd(), 'src', 'app')
const OUTPUT_DIR = path.join(process.cwd(), 'inventory')

async function walk(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true })
    const files = await Promise.all(
        entries.map(async entry => {
            const res = path.join(dir, entry.name)
            if (entry.isDirectory()) {
                return walk(res)
            }
            if (entry.isFile() && entry.name === 'page.tsx') {
                return [res]
            }
            return []
        })
    )

    return files.flat()
}

function isRouteGroup(segment) {
    return segment.startsWith('(') && segment.endsWith(')')
}

function toRoute(filePath) {
    const relativeDir = path.relative(APP_DIR, path.dirname(filePath))
    if (!relativeDir || relativeDir === '') {
        return '/'
    }

    const segments = relativeDir
        .split(path.sep)
        .filter(Boolean)
        .filter(segment => !isRouteGroup(segment))

    return `/${segments.join('/')}`
}

function formatList(items) {
    return items
        .map(
            ({ route, relativePath }, index) =>
                `${String(index + 1).padStart(3, ' ')}. ${route}  (${relativePath})`
        )
        .join('\n')
}

async function main() {
    const files = await walk(APP_DIR)
    const routes = files
        .map(filePath => ({
            route: toRoute(filePath),
            relativePath: path.relative(process.cwd(), filePath)
        }))
        .sort((a, b) => a.route.localeCompare(b.route))

    await fs.mkdir(OUTPUT_DIR, { recursive: true })
    const timestamp = new Date().toISOString().replace(/[:]/g, '-')
    const outputFile = path.join(
        OUTPUT_DIR,
        `route-inventory-${timestamp}.txt`
    )

    const header = `Route inventory generated on ${new Date().toISOString()}\nTotal routes: ${routes.length}\n`
    const body = formatList(routes)
    await fs.writeFile(outputFile, `${header}\n${body}\n`, 'utf8')

    console.log(`Saved ${routes.length} routes to ${outputFile}`)
}

main().catch(error => {
    console.error('Failed to generate route inventory:', error)
    process.exit(1)
})
