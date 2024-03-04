import { useModalContext } from "../../context/ModalContext"
import BorderBottomButton from "../fourth-section/BorderBottomButton"
import Carousel from "../carousel/Carousel"
import ContentContainer from "../container/ContentContainer"
import RootContainer from "../container/RootContainer"
import { buttonsCarouselTab, carouselTab } from "../home-page/FourthSection"
import Heading2 from "../typography/heading/Heading2"
import Heading4 from "../typography/heading/Heading4"
import Modal from "./Modal"
import person1 from "../../assets/image/person-1.png"
import person2 from "../../assets/image/person-2.png"
import person3 from "../../assets/image/person-3.png"
import person4 from "../../assets/image/person-4.png"
import { useOnClickOutside } from "usehooks-ts"
import { useRef } from "react"
import ButtonsCarouselTabContainer from "../fourth-section/ButtonsCarouselTabContainer"

export interface IImage {
  src: string,
  alt: string
}

interface CarouselModalProps {
  activeCarousel: carouselTab,
  setActiveCarousel: React.Dispatch<React.SetStateAction<carouselTab>>
}

const tourLeader: IImage[] = [
  { src: person1, alt: "person-1" },
  { src: person1, alt: "person-1" },
  { src: person1, alt: "person-1" },
  { src: person1, alt: "person-1" },
  { src: person1, alt: "person-1" },
  { src: person1, alt: "person-1" },
  { src: person1, alt: "person-1" },
  { src: person1, alt: "person-1" },
  { src: person1, alt: "person-1" },
]

const specialist: IImage[] = [
  { src: person2, alt: "person-2" },
  { src: person2, alt: "person-2" },
  { src: person2, alt: "person-2" },
  { src: person2, alt: "person-2" },
  { src: person2, alt: "person-2" },
  { src: person2, alt: "person-2" },
]

const localHost: IImage[] = [
  { src: person3, alt: "person-3" },
  { src: person3, alt: "person-3" },
  { src: person3, alt: "person-3" },
  { src: person3, alt: "person-3" },
  { src: person3, alt: "person-3" },
  { src: person3, alt: "person-3" },
]

const riderTeam: IImage[] = [
  { src: person4, alt: "person-4" },
  { src: person4, alt: "person-4" },
  { src: person4, alt: "person-4" },
  { src: person4, alt: "person-4" },
  { src: person4, alt: "person-4" },
  { src: person4, alt: "person-4" },
]

export default function CarouselModal({ activeCarousel, setActiveCarousel }: CarouselModalProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const { isOpenCarousel, setIsOpenCarousel } = useModalContext()
  useOnClickOutside(divRef, () => setIsOpenCarousel(false))

  return (
    <Modal isOpen={isOpenCarousel}>
      <div className="flex items-center justify-center h-full bg-black/90">
        <RootContainer ref={divRef} className="m-0 lg:m-0">
          <ContentContainer className="flex flex-col items-start w-full mb-0 lg:flex-row lg:mb-0">
            {/* ---- slogan ---- */}
            <div>
              <Heading4>Cheers</Heading4>
              <Heading2>Family</Heading2>
            </div>
            {/* ---- buttons carousel tab ---- */}
            <ButtonsCarouselTabContainer className="mt-1 lg:mt-10 lg:ml-auto">
              {buttonsCarouselTab.map(item => {
                return (
                  <BorderBottomButton
                    active={activeCarousel === item.value}
                    onClick={() => setActiveCarousel(item.value)}
                  >
                    {item.text}
                  </BorderBottomButton>
                )
              })}
            </ButtonsCarouselTabContainer>
          </ContentContainer>
          {/* ---- carousels ---- */}
          {activeCarousel === "tour-leader" && (
            <Carousel images={tourLeader} />
          )}
          {activeCarousel === "specialist" && (
            <Carousel images={specialist} />
          )}
          {activeCarousel === "local-host" && (
            <Carousel images={localHost} />
          )}
          {activeCarousel === "rider-team" && (
            <Carousel images={riderTeam} />
          )}
        </RootContainer>
      </div>
    </Modal>
  )
}