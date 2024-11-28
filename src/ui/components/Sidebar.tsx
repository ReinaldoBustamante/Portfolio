import { IoClose } from "react-icons/io5"
import { NavLinks } from "./NavLinks"
import { useState } from "react"



export const Sidebar = ({ showSide, closeSide }: any) => {
    const [showContent, setShowContent] = useState<boolean>(false)

    const close = () => {
        closeSide()
        setShowContent(false)
    }
    
    return (
        showSide !== null
            ? <div className={`sidebar-wrapper`}>
                <div className={`side-content-wrapper ${!showContent ? 'hidden' : ''}`}>
                    <IoClose className='icon' onClick={close} />
                    <div className="side-content">
                        <NavLinks close = {close}/>
                    </div>
                </div>
                <div className={`side-left ${!showSide && 'close'}`} onAnimationEnd={() => {
                    if(showSide){
                        setShowContent(true)
                    }
                }} />
                <div className={`side-right ${!showSide && 'close'}`} />
            </div>
            : null
    )
}
