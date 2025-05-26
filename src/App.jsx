import { useLocation } from "react-router-dom";
import AppBanner from "./components/AppBanner/AppBanner";
import CoffeeCarts from "./components/CoffeeCarts/CoffeeCarts";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import WhereToBuy from "./components/WhereToBuy/WhereToBuy";
import { useEffect } from "react";

function App() {

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirectUrl = params.get('redirect');

    if (redirectUrl) {
      // Optional: Validate the redirect URL
      window.location.href = redirectUrl;
    }
  }, [location]);
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <CoffeeCarts />
      <WhereToBuy />
      <AppBanner />
      <Footer />
    </div>
  );
}

export default App;
