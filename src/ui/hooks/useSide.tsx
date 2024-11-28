import { useState } from 'react'

export const useSide = () => {
    const [showSide, setShowSide] = useState<boolean | null>(null)

    const openSide = () => {
        setShowSide(true)
      }
      const closeSide = () => {
        setShowSide(false)
    }
    
    return {
        showSide,
        openSide,
        closeSide
    }
}
