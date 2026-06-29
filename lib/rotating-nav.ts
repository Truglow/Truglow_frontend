export type ServiceRotation = {
    week: number
    href: string
    label: string
    icon: string
}

const services: ServiceRotation[] = [
    { week: 0, href: '/skin', label: 'Skin', icon: '✨' },
    { week: 1, href: '/hair', label: 'Hair', icon: '💇' },
    { week: 2, href: '/plastic', label: 'Plastic Surgery', icon: '🏥' },
    { week: 3, href: '/laser', label: 'Laser', icon: '⚡' }
]

/**
 * Get the service to display in header based on current week
 * Rotates weekly through: Skin → Hair → Plastic Surgery → Laser
 */
export function getTodaysService(): ServiceRotation {
    const now = new Date()
    const startOfYear = new Date(now.getFullYear(), 0, 1)
    const dayOfYear = Math.floor((now.getTime() - startOfYear.getTime()) / 86400000)
    const weekOfYear = Math.floor(dayOfYear / 7)
    const index = weekOfYear % 4
    return services[index]
}
