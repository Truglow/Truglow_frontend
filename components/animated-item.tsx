"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { ReactNode } from "react"

interface AnimatedItemProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

export function AnimatedItem({ children, delay = 0, direction = "up", className = "" }: AnimatedItemProps) {
  const { ref, isVisible } = useScrollReveal()

  const directionClasses = {
    up: isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
    down: isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10',
    left: isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10',
    right: isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10',
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${directionClasses[direction]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

