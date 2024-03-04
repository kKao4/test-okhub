import supportLocal from "../../assets/svg/supportLocal.svg"
import freeCancellations from "../../assets/svg/freeCancellations.svg"
import dailyDepartures from "../../assets/svg/dailyDepartures.svg"
import fullRefund from "../../assets/svg/fullRefund.svg"
import Paragraph from "../typography/paragraph/Paragraph";
import Strong from "../typography/paragraph/Strong";
import ContainedButton from "../button/ContainedButton";
import OutlinedButton from "../button/OutlinedButton";
import desktopVietnamSvg from "../../assets/svg/desktopVietnam.svg"
import mobileVietnamSvg from "../../assets/svg/mobileVietnam.svg"
import ThirdSectionSlogan from "../third-section/ThirdSectionSlogan";
import RootContainer from "../container/RootContainer";
import ContentContainer from "../container/ContentContainer";
import ButtonsContainer from "../button/ButtonsContainer";
import ButtonContainer from "../button/ButtonContainer";

export default function ThirdSection() {
  return (
    <>
      <RootContainer>
        <div className="flex flex-col  lg:flex-row">
          {/* ---- mobile ver slogan ---- */}
          <div className="block lg:hidden">
            <ThirdSectionSlogan />
          </div>

          <article className="order-last lg:basis-1/2 lg:order-first">
            {/* ---- desktop ver slogan ---- */}
            <div className="hidden mb-6 lg:block">
              <ThirdSectionSlogan />
            </div>

            {/* ---- 4 svg information ---- */}
            <ContentContainer>
              <div className="flex flex-row grid-cols-2 gap-1 -mt-6 -mr-4 overflow-x-auto lg:mt-0 flex-nowrap lg:grid lg:gap-4 no-scrollbar">
                <img src={supportLocal} alt="support-local" />
                <img src={freeCancellations} alt="free-cancellation" />
                <img src={dailyDepartures} alt="daily-departures" />
                <img src={fullRefund} alt="full-refund" />
              </div>
            </ContentContainer>

            {/* ---- summary trip ---- */}
            <ContentContainer>
              <Paragraph>The 3 Days Epic Ha giang Loop Tour with easy rider organized by <Strong>Vietnam Cheers Hostel</Strong> is a must in Vietnam for any traveler. It is considered a highlight of South East Asia.</Paragraph>
            </ContentContainer>
            <ContentContainer marginBottom="lg">
              <Paragraph>Explore <Strong>Ma Pi Leng</Strong>, one of The Big Four Passes in Vietnam, through thousands of conical limestone peaks as well as deep and meandering valleys. Party dinner, waterfall and local le at authentic <Strong>Cheers Du Gia Homestay</Strong>. will be the unique experience also. This is designed for adventure-seekers — those who want to experience the biggest challenge Vietnam has to offer in a safe environment with our experienced easy riders.</Paragraph>
            </ContentContainer>

            {/* ---- book and read more btn ---- */}
            <ButtonsContainer>
              <ButtonContainer>
                <ContainedButton size="md" fancyBackground>
                  <span className="uppercase">Book Now</span>
                </ContainedButton>
              </ButtonContainer>
              <ButtonContainer>
                <OutlinedButton>
                  <span className="uppercase">Read Now</span>
                </OutlinedButton>
              </ButtonContainer>
            </ButtonsContainer>

          </article>

          {/* ---- desktop vietnam map ---- */}
          <img src={desktopVietnamSvg} alt="vietnam-svg" className="ml-auto lg:h-[640px] hidden lg:block" />

          {/* ---- mobile vietnam map ---- */}
          <img src={mobileVietnamSvg} alt="vietnam-svg" className="block lg:hidden" />
        </div>
      </RootContainer>
    </>
  )
}
