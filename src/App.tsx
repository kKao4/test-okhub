import MobileNavbar from "./components/navbar/MobileNavbar";
import Menu from "./components/menu/Menu";
import FirstSection from "./components/home-page/FirstSection";
import FloatButtonGroup from "./components/layout/FloatButtonGroup";
import SecondSection from "./components/home-page/SecondSection";
import mainBgImg from "./assets/image/main-bg-image.png"
import ThirdSection from "./components/home-page/ThirdSection";
import FourthSection from "./components/home-page/FourthSection";
import FifthSection from "./components/home-page/FifthSection";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <FirstSection />

      {/* ---- fixed mobile navbar ---- */}
      <MobileNavbar />

      {/* ---- fixed float button group ---- */}
      <FloatButtonGroup />

      {/* ---- menu for mobile device ---- */}
      <Menu />

      {/* ---- container to set background img for section 2 and 3 ---- */}
      <div
        className="relative bg-none lg:bg-gradient-to-t from-white via-white/90 via-20% to-white overflow-hidden"
      >
        <SecondSection />

        <ThirdSection />

        {/* ---- background img for section 2 and 3 ---- */}
        <img
          src={mainBgImg}
          alt="main-background-image"
          className="absolute top-0 left-0 hidden object-cover lg:block -z-10"
        />
      </div>

      <FourthSection />

      <FifthSection />

      <Footer />

    </>
  )
}