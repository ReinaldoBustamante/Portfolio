import { IoClose } from "react-icons/io5"
import { NavLinks } from "./NavLinks"
import { useState } from "react"

interface SidebarProps {
    sideIsOpen: boolean | null;
    closeSide: () => void;
}

export const Sidebar = ({ sideIsOpen, closeSide }: SidebarProps) => {
    const [showContent, setShowContent] = useState<boolean>(false)

    const close = () => {
        closeSide()
        setShowContent(false)
    }
    
    return (
        sideIsOpen !== null
            ? <div className={`sidebar-wrapper`}>
                <div className={`side-content-wrapper ${!showContent ? 'hidden' : ''}`}>
                    <IoClose className='icon' onClick={close} />
                    <div className="side-content">
                        <NavLinks close={close} />
                    </div>
                </div>
                <div className={`side-left ${!sideIsOpen && 'close'}`} onAnimationEnd={() => {
                    if (sideIsOpen) {
                        setShowContent(true)
                    }
                }} />
                <div className={`side-right ${!sideIsOpen && 'close'}`} />
            </div>
            : null
    )
}
