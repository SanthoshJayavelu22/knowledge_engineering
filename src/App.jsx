import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Loader from "./components/CommonComponents/Loader";
import Header from "./components/CommonComponents/Header";

import "aos/dist/aos.css";
import AOS from "aos";
import Footer from "./components/CommonComponents/Footer";
import ScrollToTopButton from "./components/CommonComponents/ScrollToTopButton";
import FounderMessage from "./pages/FounderMessage";
import BrandAmbassador from "./pages/BrandAmbassador";
import Activites from "./pages/Activites";
import ContactForm from "./pages/ContactForm";
import Skilldevelopment from "./pages/Skilldevelopment";
import BlogListPage from "./pages/Blogslist";
import GalleryPage from "./pages/Gallery";
import EventsPage from "./pages/Events";
import PressReleasePage from "./pages/PressRelease";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mission" element={<About />} />
            <Route path="/founder-message" element={<FounderMessage />} />
            <Route path="/brand-ambassador" element={<BrandAmbassador />} />
            <Route path="/skill-development" element={<Skilldevelopment />} />
            <Route path="/activities" element={<Activites />} />
            <Route path="/events" element={<EventsPage/>} />
            <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/press-release" element={<PressReleasePage/>} />
            <Route path="/blogs" element={<BlogListPage />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="*" element={<Home />} /> {/* Optional fallback */}
          </Routes>
          <Footer /> <ScrollToTopButton />
        </>
      )}
    </>
  );
}

export default App;
