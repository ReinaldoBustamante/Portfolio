import { PortfolioRoutes } from "./portfolio/routes/PortfolioRoutes"
import { Navbar } from "./ui/components/Navbar"
import { Sidebar } from "./ui/components/Sidebar";
import { useTheme } from "./ui/hooks/useTheme";
import { useSide } from "./ui/hooks/useSide";

export const App = () => {
  const { darkMode, toggleMode } = useTheme();
  const { showSide, openSide, closeSide } = useSide()

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <header>
        <Navbar darkMode={darkMode} toggleMode={toggleMode} openSide={openSide} />
      </header>
      <nav>
        <Sidebar showSide={showSide} closeSide={closeSide} />
      </nav>
      <main className="pages">
        <PortfolioRoutes />
      </main>
    </div>
  )
}


