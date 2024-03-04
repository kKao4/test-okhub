import bgImg1 from "../../assets/image/bg-img_1.png"
import bgImg2 from "../../assets/image/bg-img_2.png"
import bgImg3 from "../../assets/image/bg-img_3.png"
import bgImg4 from "../../assets/image/bg-img_4.png"
import Heading2 from "../typography/heading/Heading2"
import Heading4 from "../typography/heading/Heading4"
import audioSvg from "../../assets/svg/audio.svg"
import MainVideo from "../video/MainVideo"
import MobileVideoInformation from "../second-section/MobileVideoInformation"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

export default function SecondSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  gsap.registerPlugin(useGSAP, ScrollTrigger)
  useGSAP(() => {
    const tl = gsap.timeline()
    tl.to("[data-role='background-image-1']", {
      xPercent: -40, scrollTrigger: {
        trigger: sectionRef.current,
        start: "top+=40% bottom",
        scrub: 1,
        end: "+=400",
      }
    });
    tl.to("[data-role='background-image-2']", {
      xPercent: -100, scrollTrigger: {
        trigger: sectionRef.current,
        start: "top+=40% bottom",
        scrub: 1,
        end: "+=600"
      }
    }, "<");
    tl.to("[data-role='background-image-3']", {
      xPercent: 56, scrollTrigger: {
        trigger: sectionRef.current,
        start: "top+=40% bottom",
        scrub: 1,
        end: "+=400"
      }
    }, "<");
    tl.to("[data-role='background-image-4']", {
      xPercent: 50, scrollTrigger: {
        trigger: sectionRef.current,
        start: "top+=40% bottom",
        scrub: 1,
        end: "+=600"
      }
    }, "<");
    tl.to("[data-role='heading-text']", {
      top: "210px", scrollTrigger: {
        trigger: sectionRef.current,
        start: "top+=50% bottom",
        scrub: 1,
        end: "+=400"
      }
    }, "<")
    tl.to(["[data-role='heading-1']", "[data-role='heading-2']", "[data-role='heading-4']"], {
      color: "#ffffff", scrollTrigger: {
        trigger: sectionRef.current,
        start: "top+=50% bottom",
        scrub: 1,
        end: "+=400"
      }
    }, "<")
    tl.to("[data-role='heading-1']", {
      fontSize: "40px", y: "-32px", scrollTrigger: {
        trigger: sectionRef.current,
        start: "top+=50% bottom",
        scrub: 1,
        end: "+=400"
      }
    }, "<")
    tl.to(videoRef.current, {
      width: "76%", scrollTrigger: {
        trigger: sectionRef.current,
        start: "top+=50% bottom",
        scrub: 1,
        end: "+=400",
      }
    }, "<")
  }, [])

  return (
    <>
      {/* ---- desktop ver ---- */}
      <section ref={sectionRef} className="relative hidden pt-20 mb-24 lg:block h-[118dvh]">
        {/* ---- slogan ---- */}
        <div data-role="heading-text" className="absolute z-20 -translate-x-1/2 left-1/2">
          <Heading4 data-role="heading-4" className="text-center">Welcome To</Heading4>
          <Heading2 data-role="heading-2" className="mb-12 text-center">HA GIANG LOOP</Heading2>
          <h1 data-role="heading-1" className="font-tomatoes text-root-yellow text-[128px] text-center">Vietnam</h1>
        </div>

        {/* ---- 4 bg img deco ---- */}
        <div
          data-role="background-image-1"
          className="absolute left-0 top-24 opacity-60 rounded-2xl overflow-hidden -translate-x-[60%]"
        >
          <img
            src={bgImg1}
            alt="background-image-1"
            className="translate-x-[20%] h-[250px]"
          />
        </div>
        <div
          data-role="background-image-2"
          className="absolute left-0 top-[380px] opacity-60 rounded-2xl -translate-x-1/2 overflow-hidden"
        >
          <img
            src={bgImg2}
            alt="background-image-2"
            className="translate-x-[20%] object-contain h-[350px]"
          />
        </div>
        <div
          data-role="background-image-3"
          className="absolute right-0 top-20 opacity-60 rounded-2xl translate-x-[44%] overflow-hidden"
        >
          <img
            src={bgImg3}
            alt="background-image-3"
            className="-translate-x-[20%] h-[350px]"
          />
        </div>
        <div
          data-role="background-image-4"
          className="absolute right-0 top-[460px] opacity-60 rounded-2xl overflow-hidden translate-x-1/2"
        >
          <img
            src={bgImg4}
            alt="background-image-4"
            className="-translate-x-[20%] h-[250px]"
          />
        </div>

        {/* ---- main video ---- */}
        <MainVideo ref={videoRef} className="absolute left-1/2 -translate-x-1/2 bottom-4 w-[53%] rounded-2xl brightness-90" />
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