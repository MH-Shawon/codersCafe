import AppBanner from "./components/AppBanner/AppBanner";
import CoffeeCarts from "./components/CoffeeCarts/CoffeeCarts";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import WhereToBuy from "./components/WhereToBuy/WhereToBuy";

function App() {

  
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
