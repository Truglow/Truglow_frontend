export type ServiceRotation = {
    week: number
    href: string
    label: string
    icon: string
}

const services: ServiceRotation[] = [
    { week: 0, href: '/ivdrips', label: 'IV Drips', icon: '💧' },
    { week: 1, href: '/skin', label: 'Skin', icon: '✨' },
    { week: 2, href: '/hair', label: 'Hair', icon: '💇' },
    { week: 3, href: '/plastic', label: 'Plastic Surgery', icon: '🏥' },
    { week: 4, href: '/laser', label: 'Laser', icon: '⚡' }
]

/**
 * Get the service to display in header based on current week
 * Rotates weekly through: IV Drips → Skin → Hair → Plastic Surgery → Laser
 */
export function getTodaysService(): ServiceRotation {
    const now = new Date()
    const startOfYear = new Date(now.getFullYear(), 0, 1)
    const dayOfYear = Math.floor((now.getTime() - startOfYear.getTime()) / 86400000)
    const weekOfYear = Math.floor(dayOfYear / 7)
    const index = weekOfYear % 5
    return services[index]
}
