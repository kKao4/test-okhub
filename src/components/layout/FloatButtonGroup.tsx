import { useRef } from "react"
import phoneSvg from "../../assets/svg/whatsappPhone.svg"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function FloatButtonGroup() {
  const divRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(divRef.current, { width: "38px", height: "38px" }, { width: "54px", height: "54px", duration: 0.6, repeat: -1, yoyo: true, delay: 1 })
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <div className="fixed z-30 flex flex-col items-center gap-4 bg-transparent bottom-16 lg:bottom-4 right-2 lg:right-4">
        {/* ---- scroll to top ---- */}
        <button className="p-1.5 lg:p-2.5 rounded-full border border-second-orange bg-second-orange lg:bg-transparent lg:hover:bg-second-orange transition-300 group" onClick={handleScrollToTop}>
          <svg width="10" height="25" viewBox="0 0 10 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="transition-300 fill-white lg:fill-second-orange lg:group-hover:fill-white" d="M5.84385 0.645019C5.56289 -0.215008 4.43711 -0.215007 4.15615 0.64502L0.0517597 13.2088C-0.153729 13.8378 0.278192 14.4973 0.895609 14.4973L9.10439 14.4973C9.72181 14.4973 10.1537 13.8378 9.94824 13.2088L5.84385 0.645019Z" />
            <path className="transition-300 stroke-white lg:stroke-second-orange lg:group-hover:stroke-white" d="M5.00134 23.164C6.35455 23.164 7.5808 21.9545 7.5808 20.2968C7.5808 18.6392 6.35455 17.4297 5.00134 17.4297C3.64813 17.4297 2.42187 18.6392 2.42187 20.2968C2.42187 21.9545 3.64813 23.164 5.00134 23.164Z" stroke-width="2" />
          </svg>
        </button>

        {/* ---- book now ---- */}
        <button className="hidden border border-white rounded-full lg:block size-13 bg-second-orange">
          <div className="flex flex-col justify-center items-center -mb-0.5 gap-0.5">
            <span className="text-[0.6875rem] uppercase font-bold text-white leading-none">Book</span>
            <span className="text-[0.6875rem] uppercase font-bold text-white leading-none">Now</span>
          </div>
        </button>

        {/* ---- phone ---- */}
        <button className="relative hidden lg:block">
          <div ref={divRef} className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-third-gray" />
          <img src={phoneSvg} alt="phone-svg" className="translate-x-[15%] -translate-y-[12%]" />
        </button>
      </div>
    </>
  )
}