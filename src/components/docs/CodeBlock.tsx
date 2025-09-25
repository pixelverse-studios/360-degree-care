'use client'

import { useState } from 'react'
import { Check, Copy, FileCode } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CodeBlockProps {
    code: string
    language?: string
    filename?: string
    className?: string
}

export function CodeBlock({
    code,
    language = 'typescript',
    filename,
    className
}: CodeBlockProps) {
    const [copied, setCopied] = useState(false)

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(code)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy code: ', err)
        }
    }

    return (
        <div className={cn('relative group my-6', className)}>
            {filename && (
                <div className="flex items-center justify-between px-4 py-2 text-sm bg-gray-100 border border-b-0 border-gray-200 rounded-t-lg">
                    <div className="flex items-center gap-2">
                        <FileCode className="w-4 h-4 text-gray-600" />
                        <span className="font-mono text-gray-700">
                            {filename}
                        </span>
                    </div>
                    <span className="text-xs text-gray-500">{language}</span>
                </div>
            )}

            <div className="relative">
                <pre
                    className={cn(
                        'p-4 overflow-x-auto text-sm bg-gray-900 text-gray-100 font-mono',
                        filename
                            ? 'rounded-b-lg border border-gray-200'
                            : 'rounded-lg'
                    )}
                >
                    <code className={`language-${language}`}>{code}</code>
                </pre>

                <button
                    onClick={copyToClipboard}
                    className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Copy code"
                >
                    {copied ? (
                        <Check className="w-4 h-4 text-green-400" />
                    ) : (
                        <Copy className="w-4 h-4 text-gray-300" />
                    )}
                </button>
            </div>
        </div>
    )
}

export function InlineCode({ children }: { children: React.ReactNode }) {
    return (
        <code className="px-1.5 py-0.5 text-sm bg-gray-100 text-gray-800 rounded font-mono">
            {children}
        </code>
    )
}
