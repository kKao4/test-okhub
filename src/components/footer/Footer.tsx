import bgFooter from "../../assets/image/bg-footer.png"
import logo from "../../assets/svg/bigLogo.svg"
import decoLogo from "../../assets/svg/decoLogo.svg"
import ContentContainer from "../container/ContentContainer"
import phoneSvg from "../../assets/svg/phone.svg"
import Paragraph from "../typography/paragraph/Paragraph"
import InformationRow from "./InformationRow"
import orangeMailSvg from "../../assets/svg/orangeMail.svg"
import RowsContainer from "./RowsContainer"
import homeSvg from "../../assets/svg/home.svg"
import earthSvg from "../../assets/svg/earth.svg"
import orangeMotorbike from "../../assets/svg/orangeMotorbike.svg"
import locationSvg from "../../assets/svg/smallLocation.svg"
import Bold from "./Bold"

export default function Footer() {
  return (
    <>
      <footer className="relative flex flex-col h-screen lg:py-20 lg:flex-row bg-second-yellow">
        {/* ---- bg footer img ---- */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden h-3/4 lg:h-full">
          <img
            src={bgFooter}
            alt="background-footer-image"
            className="object-cover w-full h-full bottom-14 opacity-85 brightness-125"
            style={{ transform: "rotateY(180deg)" }}
          />
        </div>
        {/* ---- logo ---- */}
        <div className="relative z-10 flex-none -translate-y-1/2 lg:basis-1/4 lg:translate-y-0">
          <img src={logo} alt="logo" className="mx-auto w-[130px] lg:w-auto" />
          <img src={decoLogo} alt="deco-logo" className="absolute hidden -translate-x-1/2 lg:block left-1/2 top-24" />
        </div>

        {/* ---- information ---- */}
        <div className="z-10 flex flex-col items-center gap-5 -mt-8 lg:items-start lg:ml-40 lg:flex-row grow lg:mt-0 lg:gap-0">
          {/* ---- contact ---- */}
          <div className="flex flex-col lg:basis-[415px] items-center lg:items-start">
            <ContentContainer marginBottom="sm">
              <Bold>Contact Us</Bold>
            </ContentContainer>
            <RowsContainer>
              <InformationRow img={phoneSvg} alt="phone-svg">
                <Paragraph className="text-xs">+84 98 3333 986 (Miss. Linette)</Paragraph>
                <Paragraph className="text-xs">+84 989 655 995 (Mr. Chinh)</Paragraph>
              </InformationRow>
              <InformationRow img={orangeMailSvg} alt="mail-svg">
                <Paragraph className="text-xs">@cheershoster1@gmail.com</Paragraph>
              </InformationRow>
              <InformationRow img={homeSvg} alt="home-svg">
                <Paragraph className="text-xs">5 Au Trieu, Hoan Kien, Ha Noi</Paragraph>
              </InformationRow>
              <InformationRow img={earthSvg} alt="earth-svg">
                <Paragraph className="text-xs">Vietnam Cheers Hostel Official Site</Paragraph>
              </InformationRow>
            </RowsContainer>
          </div>

          {/* ---- all tour ---- */}
          <div className="flex flex-col items-center lg:items-start lg:basis-[325px]">
            <ContentContainer marginBottom="sm">
              <Bold>All Tour</Bold>
            </ContentContainer>
            <RowsContainer>
              <InformationRow img={orangeMotorbike} alt="motorbike-svg">
                <Paragraph className="text-xs">Ha Giang Tour (3D3N)</Paragraph>
              </InformationRow>
              <InformationRow img={orangeMotorbike} alt="motorbike-svg">
                <Paragraph className="text-xs">Ha Giang Tour (4D4N)</Paragraph>
              </InformationRow>
            </RowsContainer>
          </div>

          {/* ---- cheers tour ---- */}
          <div className="flex flex-col items-center lg:items-start lg:basis-[274px]">
            <ContentContainer marginBottom="sm">
              <Bold>Cheers Tours</Bold>
            </ContentContainer>
            <RowsContainer>
              <InformationRow img={locationSvg} alt="location-svg">
                <Paragraph className="text-xs">Ha Long Bay</Paragraph>
              </InformationRow>
              <InformationRow img={locationSvg} alt="location-svg">
                <Paragraph className="text-xs">Sapa Trekking Tour</Paragraph>
              </InformationRow>
              <InformationRow img={locationSvg} alt="location-svg">
                <Paragraph className="text-xs">Pu Luong Cheers Tour </Paragraph>
              </InformationRow>
            </RowsContainer>
          </div>
        </div>
      </footer>
    </>
  )
}