import ContentContainer from "../container/ContentContainer";
import RootContainer from "../container/RootContainer";
import Heading2 from "../typography/heading/Heading2";
import Heading3 from "../typography/heading/Heading3";
import Heading4 from "../typography/heading/Heading4";
import Paragraph from "../typography/paragraph/Paragraph";
import personSvg from "../../assets/svg/person.svg"
import orangeMotorbike from "../../assets/svg/orangeMotorbike.svg"
import checkMarkSvg from "../../assets/svg/checkMark.svg"
import ButtonsContainer from "../button/ButtonsContainer";
import ContainedButton from "../button/ContainedButton";
import OutlinedButton from "../button/OutlinedButton";
import ButtonContainer from "../button/ButtonContainer";
import { lazy, useState } from "react";
import BorderBottomButton from "../fourth-section/BorderBottomButton";
import imageCarouselPreview1 from "../../assets/image/carousel-preview-1.png"
import imageCarouselPreview2 from "../../assets/image/carousel-preview-2.png"
import imageCarouselPreview3 from "../../assets/image/carousel-preview-3.png"
import arrowLeft from "../../assets/svg/arrowLeft.svg"
import arrowRight from "../../assets/svg/arrowRight.svg"
import OrangeSpan from "../fourth-section/OrangeSpan";
import GraySpan from "../fourth-section/GraySpan";
import InformationContainer from "../fourth-section/InformationContainer";
import { useModalContext } from "../../context/ModalContext";
import ButtonsCarouselTabContainer from "../fourth-section/ButtonsCarouselTabContainer";
const CarouselModal = lazy(() => import("../modal/CarouselModal"))

export type carouselTab = "tour-leader" | "specialist" | "local-host" | "rider-team"

interface IButton {
  text: string,
  value: carouselTab
}

export interface IImage {
  src: string,
  alt: string
}

export const buttonsCarouselTab: IButton[] = [
  { text: "Tour Leader", value: "tour-leader" },
  { text: "Specialist", value: "specialist" },
  { text: "Local Host", value: "local-host" },
  { text: "Rider Team", value: "rider-team" },
]

export default function FourthSection() {
  const [activeCarousel, setActiveCarousel] = useState<carouselTab>("tour-leader")
  const { setIsOpenCarousel } = useModalContext()

  const handleOpenCarousel = () => {
    setIsOpenCarousel(true)
  }

  return (
    <>
      <RootContainer>
        {/* ---- mobile ver slogan ---- */}
        <ContentContainer className="block lg:hidden" marginBottom="xs">
          <Heading4>Cheers</Heading4>
          <Heading2>Family</Heading2>
        </ContentContainer>
        <article className="flex flex-col lg:flex-row">
          <div className="flex-none order-last lg:basis-1/3 lg:order-first">

            {/* ---- desktop ver slogan ---- */}
            <ContentContainer className="hidden lg:block">
              <Heading4>Cheers</Heading4>
              <Heading2>Family</Heading2>
            </ContentContainer>

            {/* ---- team name ---- */}
            <ContentContainer marginBottom="xs">
              <Heading3 className="text-root-black lg:text-root-gray">H'mong Team</Heading3>
            </ContentContainer>

            {/* ---- detail team ---- */}
            <ContentContainer>
              <Paragraph>
                Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded my expectations and was all hassle free. Our guide was absolutely amazing too. Have re-booked and cannot wait for next year! Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded my expectations and was all hassle free. Our guide was absolutely amazing too. Have re-booked and cannot wait for .Our guide was absolutely amazing too.
              </Paragraph>
            </ContentContainer>

            {/* ---- information about team ---- */}
            <ContentContainer marginBottom="lg">
              <div className="flex flex-col gap-2">
                <InformationContainer>
                  <img src={personSvg} alt="person-svg" className="size-4" />
                  <OrangeSpan>Group size:</OrangeSpan>
                  <GraySpan>15 members</GraySpan>
                </InformationContainer>
                <InformationContainer>
                  <img src={orangeMotorbike} alt="motorbike-svg" className="size-4" />
                  <OrangeSpan>Transport:</OrangeSpan>
                  <GraySpan>Motorbike</GraySpan>
                </InformationContainer>
                <InformationContainer>
                  <img src={checkMarkSvg} alt="check-mark-svg" className="size-4" />
                  <OrangeSpan>Trip completed:</OrangeSpan>
                  <GraySpan>154 trips</GraySpan>
                </InformationContainer>
              </div>
            </ContentContainer>

            {/* ---- contact team ---- */}
            <ButtonsContainer>
              <ButtonContainer>
                <ContainedButton size="md" fancyBackground>
                  <span className="uppercase">Join With Us</span>
                </ContainedButton>
              </ButtonContainer>
              <ButtonContainer>
                <OutlinedButton>
                  <span className="uppercase">Call Us</span>
                </OutlinedButton>
              </ButtonContainer>
            </ButtonsContainer>
          </div>

          {/* ---- carousel preview ---- */}
          <div className="lg:basis-2/3 lg:mt-12">
            {/* ---- buttons carousel ---- */}
            <ButtonsCarouselTabContainer>
              {buttonsCarouselTab.map(item => {
                return (
                  <BorderBottomButton
                    key={item.text}
                    className="lg:first-of-type:ml-auto"
                    active={activeCarousel === item.value}
                    onClick={() => {
                      setActiveCarousel(item.value)
                      handleOpenCarousel()
                    }}
                  >
                    {item.text}
                  </BorderBottomButton>
                )
              })}
            </ButtonsCarouselTabContainer>

            {/* ---- image preview ---- */}
            <div className="relative flex flex-row gap-6 mb-5 lg:ml-28">
              <div className="lg:basis-[570px] h-[206px] lg:h-[414px] overflow-hidden rounded-2xl flex items-end">
                <img
                  src={imageCarouselPreview1}
                  alt="image-preview-carousel-1"
                  className="brightness-125 opacity-90"
                  style={{ transform: "rotateY(180deg)" }}
                />
              </div>
              <div className="lg:basis-[94px] h-[414px] overflow-hidden rounded-2xl hidden lg:block">
                <img
                  src={imageCarouselPreview2}
                  alt="image-preview-carousel-2"
                  className="object-cover h-[120%] opacity-40"
                  style={{ transform: "rotateY(180deg) translateY(-8%)" }}
                />
              </div>
              <div className="lg:basis-[94px] h-[414px] overflow-hidden rounded-2xl hidden lg:block">
                <img
                  src={imageCarouselPreview3}
                  alt="image-preview-carousel-3"
                  className="object-cover h-[120%] opacity-40"
                  style={{ transform: "rotateY(180deg) translateY(-8%)" }}
                />
              </div>
              <button className="absolute left-0 p-2 top-1/2 lg:left-2 -translate-y-1/4" onClick={handleOpenCarousel}>
                <img src={arrowLeft} alt="arrow-left-svg" />
              </button>
              <button className="absolute right-0 p-2 top-1/2 lg:right-2 -translate-y-1/4" onClick={handleOpenCarousel}>
                <img src={arrowRight} alt="arrow-right-svg" />
              </button>
            </div>
          </div>
        </article>
      </RootContainer>

      {/* ---- carousel ---- */}
      <CarouselModal activeCarousel={activeCarousel} setActiveCarousel={setActiveCarousel} />
    </>
  )
}