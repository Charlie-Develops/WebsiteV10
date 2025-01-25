// src/app/(charlie-web)/client-layout.tsx
'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}