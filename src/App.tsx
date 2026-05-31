import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import DashboardContainer from './components/DashboardContainer'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simule un temps de chargement pour l'effet visuel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!isLoading && (
        <DashboardContainer />
      )}
    </>
  )
}

export default App
