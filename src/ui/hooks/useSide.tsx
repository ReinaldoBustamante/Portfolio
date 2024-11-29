import { useState } from 'react'

export const useSide = () => {
    const [sideIsOpen, setSideIsOpen] = useState<boolean | null>(null)

    const openSide = () => {
        setSideIsOpen(true)
      }
      const closeSide = () => {
        setSideIsOpen(false)
    }
    
    return {
        sideIsOpen,
        openSide,
        closeSide
    }
}
