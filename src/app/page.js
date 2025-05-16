import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import About_us from "../components/About_us";
import Footer from "../components/Footer";
import MenuPreview from "../components/MenuPreview";
// import PanoramaTour from "../components/PanoramaTour";

export default function Page() {
  return (
    <>
      <Navbar />
      <Landing />
      <MenuPreview />
      {/* <PanoramaTour /> */}
      <About_us />
      <Footer />
    </>
  );
}
