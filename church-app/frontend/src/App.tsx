import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Give from "./pages/Give";
import Gallery from "./pages/Gallery";
import WhoWeAre from "./pages/WhoWeAre";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/give" element={<Give />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
