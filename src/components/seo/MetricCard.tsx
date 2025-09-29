import { ReactNode } from 'react'

export type MetricStatus = 'success' | 'warning' | 'error' | 'info'

interface MetricCardProps {
    title: string
    value: string | number
    subtitle?: string
    status: MetricStatus
    icon?: ReactNode
    detail?: string
    recommendation?: string
}

export default function MetricCard({
    title,
    value,
    subtitle,
    status,
    icon,
    detail,
    recommendation
}: MetricCardProps) {
    const statusColors = {
        success: 'border-green-500 bg-green-50',
        warning: 'border-yellow-500 bg-yellow-50',
        error: 'border-red-500 bg-red-50',
        info: 'border-blue-500 bg-blue-50'
    }

    const statusTextColors = {
        success: 'text-green-700',
        warning: 'text-yellow-700',
        error: 'text-red-700',
        info: 'text-blue-700'
    }

    const statusIconColors = {
        success: 'text-green-500',
        warning: 'text-yellow-500',
        error: 'text-red-500',
        info: 'text-blue-500'
    }

    return (
        <div
            className={`rounded-lg border-2 p-6 ${statusColors[status]} transition-all hover:shadow-lg`}
        >
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                        {title}
                    </h3>
                    <div className="mt-2 flex items-baseline">
                        <p
                            className={`text-3xl font-bold ${statusTextColors[status]}`}
                        >
                            {value}
                        </p>
                        {subtitle && (
                            <span className="ml-2 text-sm text-gray-600">
                                {subtitle}
                            </span>
                        )}
                    </div>
                    {detail && (
                        <p className="mt-2 text-sm text-gray-700">{detail}</p>
                    )}
                    {recommendation && (
                        <div className="mt-3 pt-3 border-t border-gray-200">
                            <p className="text-xs font-medium text-gray-600">
                                Recommendation:
                            </p>
                            <p className="text-sm text-gray-700 mt-1">
                                {recommendation}
                            </p>
                        </div>
                    )}
                </div>
                {icon && (
                    <div className={`ml-4 ${statusIconColors[status]}`}>
                        {icon}
                    </div>
                )}
            </div>
        </div>
    )
}
