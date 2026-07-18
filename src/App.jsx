import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PathSelection from "./components/PathSelection";
import Services from "./components/Services";
import Sustainability from "./components/Sustainability";
import ProductFinder from "./components/ProductFinder";
import Industries from "./pages/Industries";
import Products from "./pages/Products";
import ProductView from "./pages/ProductView";
import About from "./pages/About";
import ServicesPage from "./pages/Services";
import SustainabilityPage from "./pages/Sustainability";
import CarMotor from "./pages/CarMotor";
import HeavyDutyFleet from "./pages/HeavyDutyFleet";
import HydraulicOil from "./pages/HydraulicOil";
import Antifreeze from "./pages/Antifreeze";
import GearOil from "./pages/GearOil";

function Home() {
  return (
    <main>
      <Hero />
      <PathSelection />
      <Services />
      <Sustainability />
      <ProductFinder />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductView />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/sustainability" element={<SustainabilityPage />} />
        <Route path="/car-motor" element={<CarMotor />} />
        <Route path="/heavy-duty-fleet" element={<HeavyDutyFleet />} />
        <Route path="/hydraulic-oil" element={<HydraulicOil />} />
        <Route path="/antifreeze" element={<Antifreeze />} />
        <Route path="/gear-oil" element={<GearOil />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
