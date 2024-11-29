import { PortfolioRoutes } from "./portfolio/routes/PortfolioRoutes"
import { Navbar } from "./ui/components/Navbar"
import { Sidebar } from "./ui/components/Sidebar";
import { useTheme } from "./ui/hooks/useTheme";
import { useSide } from "./ui/hooks/useSide";
import { useEffect, useState } from "react";
import { Loading } from "./portfolio/pages/Loading";

export const App = () => {
  const { darkMode, toggleMode } = useTheme();
  const { showSide, openSide, closeSide } = useSide()
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      {
        showContent ? (
          <>
            <header>
              <Navbar darkMode={darkMode} toggleMode={toggleMode} openSide={openSide} />
            </header>
            <nav>
              <Sidebar showSide={showSide} closeSide={closeSide} />
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


