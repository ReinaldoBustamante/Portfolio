import { IoMenu } from "react-icons/io5"
import { NavLinks } from "./NavLinks";

interface NavbarProps {
  darkMode: boolean | null;
  toggleMode: () => void;
  openSide: () => void;
}

export const Navbar = ({ darkMode, toggleMode, openSide }: NavbarProps) => {

  return (
    <div className="navbar-wrapper">
      <div className="menu-logo-container">
        <IoMenu className="icon" onClick={openSide}/>
        <div className="logo">ReinaldoBustamante</div>
      </div>
      <nav className="navigation-wrapper">
        <NavLinks />
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
