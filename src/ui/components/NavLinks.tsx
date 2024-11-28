import { NavLink } from 'react-router-dom'

export const NavLinks = ({ close }: any) => {
    return (
        <nav>
            <ul className="nav-links">
                <li onClick={close}><NavLink className='link' to={'/'}>Inicio</NavLink></li>
                <li onClick={close}><NavLink className='link' to={'/career'}>Experiencia</NavLink></li>
                <li onClick={close}><NavLink className='link' to={'/projects'}>Proyectos personales</NavLink></li>
            </ul>
        </nav>
    )
}
