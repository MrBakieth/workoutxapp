import { useState } from "react";
import SplashScreen from "./components/layout/SplashScreen";
import HomePage from "./pages/HomePage";
import LanguageSwitcher from "./components/layout/LanguageSwitcher";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <>
          <LanguageSwitcher />
          <HomePage />
        </>
      )}
    </>
  );
}

export default App;
