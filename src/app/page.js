import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import About_us from "./components/About_us";
import Footer from "./components/Footer";
import MenuGallery from "./components/MenuGallery";

export default function barkarr() {
  return (
    <>
      <Navbar />
      <Landing />
      <MenuGallery />
      <About_us />
      <Footer />
    </>
  );
}
