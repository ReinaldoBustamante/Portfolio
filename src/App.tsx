import { PortfolioRoutes } from "./portfolio/routes/PortfolioRoutes"
import { Navbar } from "./ui/components/Navbar"
import { Sidebar } from "./ui/components/Sidebar";
import { useTheme } from "./ui/hooks/useTheme";
import { useSide } from "./ui/hooks/useSide";
import { useEffect, useState } from "react";
import { Loading } from "./portfolio/pages/Loading";

export const App = () => {
  const { darkMode, toggleMode } = useTheme();
  const { sideIsOpen, openSide, closeSide } = useSide()
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPage(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      {
        showPage ? (
          <>
            <header>
              <Navbar darkMode={darkMode} toggleMode={toggleMode} openSide={openSide} />
            </header>
            <nav>
              <Sidebar sideIsOpen={sideIsOpen} closeSide={closeSide} />
            </nav>
            <main className="pages">
              <PortfolioRoutes />
            </main>
          </>
        ) : (
          <Loading />
        )
      }
    </div>
  )
}


