import { IoMenu } from "react-icons/io5"

export const Navbar = ({ darkMode, toggleMode, openSide }: any) => {

  return (
    <div className="navbar-wrapper">
      <div className="menu-logo-container">
        <IoMenu className="icon" onClick={openSide}/>
        <div className="logo">ReinaldoBustamante</div>
      </div>
      <nav className="navigation-wrapper">
        <ul className="nav-links">
          <li>Inicio</li>
          <li>Experiencia</li>
          <li>Proyectos personales</li>
        </ul>
        <button
          className="dark-mode-toggle-wrapper"
          onClick={toggleMode}
          aria-label={`Activar modo ${darkMode ? 'oscuro' : 'claro'}`}
        >
          <div className={`circle ${darkMode === null ? '' : darkMode ? 'toggle-dark' : 'toggle-light'}`} />
        </button>
      </nav>
    </div>
  )
}
