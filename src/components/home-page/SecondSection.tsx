import bgImg1 from "../../assets/image/bg-img_1.png"
import bgImg2 from "../../assets/image/bg-img_2.png"
import bgImg3 from "../../assets/image/bg-img_3.png"
import bgImg4 from "../../assets/image/bg-img_4.png"
import Heading2 from "../typography/heading/Heading2"
import Heading4 from "../typography/heading/Heading4"
import audioSvg from "../../assets/svg/audio.svg"
import MainVideo from "../video/MainVideo"
import MobileVideoInformation from "../second-section/MobileVideoInformation"

export default function SecondSection() {
  return (
    <>
      {/* ---- desktop ver ---- */}
      <section className="relative hidden pt-20 mb-24 lg:block">
        {/* ---- slogan ---- */}
        <Heading4 className="text-center">Welcome To</Heading4>
        <Heading2 className="mb-12 text-center">HA GIANG LOOP</Heading2>
        <h1 className="font-tomatoes text-root-yellow text-[128px] text-center">Vietnam</h1>

        {/* ---- 4 bg img deco ---- */}
        <div className="absolute left-0 top-24 opacity-60 rounded-2xl overflow-hidden -translate-x-[60%]">
          <img
            src={bgImg1}
            alt="background-image-1"
            className="translate-x-[20%] h-[250px]"
          />
        </div>
        <div className="absolute left-0 top-[380px] opacity-60 rounded-2xl -translate-x-1/2 overflow-hidden">
          <img
            src={bgImg2}
            alt="background-image-2"
            className="translate-x-[20%] object-contain h-[350px]"
          />
        </div>
        <div className="absolute right-0 top-20 opacity-60 rounded-2xl translate-x-[44%] overflow-hidden">
          <img
            src={bgImg3}
            alt="background-image-3"
            className="-translate-x-[20%] h-[350px]"
          />
        </div>
        <div className="absolute right-0 top-[460px] opacity-60 rounded-2xl overflow-hidden translate-x-1/2">
          <img
            src={bgImg4}
            alt="background-image-4"
            className="-translate-x-[20%] h-[250px]"
          />
        </div>

        {/* ---- main video ---- */}
        <MainVideo className="mx-auto w-[53%] rounded-2xl brightness-90" />
      </section>

      {/* ---- mobile ver ---- */}
      <section className="block lg:hidden relative h-[90dvh] w-full overflow-hidden">
        {/* ---- main video ---- */}
        <MainVideo className="object-cover h-full brightness-90" />

        {/* ---- slogan ---- */}
        <div className="absolute w-full -translate-x-1/2 top-2 left-1/2">
          <p className="text-xs text-center text-white uppercase font-heavitas">Welcome To</p>
          <h2 className="mb-2 text-2xl text-center text-white uppercase font-heavitas">Ha Giang Loop</h2>
          <h2 className="text-2xl text-center text-white font-tomatoes">Vietnam</h2>
        </div>

        {/* ---- bg gradient back improve readable ---- */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-black/0" />

        {/* ---- information about trip ---- */}
        <div className="absolute bottom-6 left-2.5 flex flex-col gap-3.5">
          <MobileVideoInformation about="travel" />
          <MobileVideoInformation about="bus" />
          <MobileVideoInformation about="award" />
        </div>

        {/* ---- audio button toggle for video ---- */}
        <img src={audioSvg} alt="audio-svg" className="absolute bottom-6 right-2.5" />
      </section>
    </>
  )
}