import useEmblaCarousel from "embla-carousel-react"
import { IImage } from "../home-page/FourthSection"
import orangeArrowLeft from "../../assets/svg/orangeArrowLeft.svg"
import orangeArrowRight from "../../assets/svg/orangeArrowRight.svg"
import { BsDot } from "react-icons/bs";
interface CarouselProps {
  images: IImage[]
}

export default function Carousel({ images }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ skipSnaps: true })

  const scrollPrev = () => {
    emblaApi?.scrollPrev()
  }
  const scrollNext = () => {
    emblaApi?.scrollNext()
  }

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="grid grid-flow-col gap-5 auto-cols-[80%] lg:auto-cols-[23.75%]">
          {images.map(item => {
            return (
              <div key={item.alt} className="relative h-[380px] lg:h-[414px] rounded-2xl overflow-hidden group cursor-default">
                {/* ---- img carousel ---- */}
                <img src={item.src} alt={item.alt} className="object-cover h-full w-full rounded-2xl" />

                {/* ---- information carousel ---- */}
                <div className="absolute bottom-4 lg:bottom-5 left-1/2 -translate-x-1/2 bg-root-orange/90 w-[82%] rounded-xl py-2.5 lg:py-3 space-y-1">
                  <p className="font-semibold text-white text-center text-sm lg:text-base">Ms.Thao Nguyen</p>
                  <p className="text-xs lg:text-sm text-center text-white flex flex-row gap-0.5 mx-auto w-fit items-center">
                    Tour Leader
                    <BsDot className="text-xl" />
                    3 years of experience
                  </p>
                </div>

                {/* ---- detail carousel ---- */}
                <div className="absolute w-full h-full top-0 left-0 bg-neutral-200 px-5 lg:px-6 py-3 opacity-0 group-hover:opacity-100 transition-500">
                  <div className="flex flex-col gap-1 py-2 border-b-2 border-neutral-400/50 mb-2">
                    <p className=" text-root-orange font-bold text-center text-sm lg:text-base">Ms.Thao Nguyen</p>
                    <p className="text-sm text-center text-root-black/75 font-semibold flex flex-row gap-0.5 mx-auto items-center justify-between w-full">
                      Tour Leader
                      <BsDot className="text-xl" />
                      3 years of experience
                    </p>
                  </div>
                  <p className="text-sm lg:text-base text-root-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus congue felis, id fermentum lorem varius ac. Pellentesque lectus velit, consectetur ut mollis sit amet, rutrum vehicula magna. Donec posuere porta pharetra. Sed ut diam laoreet, efficitur arcu nec, finibus mauris. Aliquam pulvinar sagittis enim, nec vulputate odio vulputate in. Pellentesque placerat cursus viverra.</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* ---- prev btn ---- */}
        <button className="absolute top-1/2 -left-2 -translate-x-full -translate-y-1/2 p-2" onClick={scrollPrev}>
          <img src={orangeArrowLeft} alt="arrow-left" />
        </button>

        {/* ---- next btn ---- */}
        <button className="absolute top-1/2 -right-2 translate-x-full -translate-y-1/2 p-2" onClick={scrollNext}>
          <img src={orangeArrowRight} alt="arrow-right" />
        </button>
      </div>
    </div>
  )
}