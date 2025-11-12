import { motion, useInView } from "motion/react"
import { useRef, ReactNode } from "react"

interface ScrollRevealProps {
    children: ReactNode
    delay?: number
    className?: string
}

export default function ScrollReveal({ children, delay = 0, className = "" }: ScrollRevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98]
            }}
            style={{ width: "100%" }}
            className={`border-b border-border ${className}`}
        >
            {children}
        </motion.div>
    )
}
