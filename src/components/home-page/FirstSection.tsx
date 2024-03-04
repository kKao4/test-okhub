import mainImage from "../.././assets/image/mainImage_1.png"
import Booking from "../booking/Booking"
import Header from "../header/Header"
import MainSlogan from "../slogan/MainSlogan"

export default function FirstSection() {
  return (
    <section className="relative overflow-hidden h-dvh">
      <Header />

      {/* ---- main bg img ---- */}
      <img src={mainImage} alt="main-image" className="absolute hidden -translate-x-1/2 -translate-y-1/2 lg:block top-1/2 left-1/2 brightness-90" />
      <div className="block lg:hidden absolute top-0 left-0 w-full h-[85%] overflow-hidden">
        <img
          src={mainImage}
          alt="main-image"
          className="object-cover h-[200%] -translate-y-[50%] brightness-[0.7]"
          style={{objectPosition: "30%"}}
        />
      </div>

      {/* ---- gradient white for mobile device ---- */}
      <div className="absolute bottom-0 left-0 block w-full h-[300px] lg:hidden bg-gradient-to-t from-white to-white/0" />

      {/* ---- slogan ---- */}
      <MainSlogan />

      {/* ---- booking feature ---- */}
      <Booking />
    </section>
  )
}