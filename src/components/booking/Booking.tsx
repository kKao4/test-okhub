import ContainedButton from "../button/ContainedButton";
import WhiteCard from "../card/WhiteCard";
import locationSvg from "../../assets/svg/bigLocation.svg"
import personSvg from "../../assets/svg/person.svg"
import SmallBar from "./SmallBar";
import BookingLabel from "./BookingLabel";
import BookingContainer from "./BookingContainer";
import BookingText from "./BookingText";
import BookingButton from "./BookingButton";
import chevronDownSvg from "../../assets/svg/chevronDown.svg"
import chevronUpDownSvg from "../../assets/svg/chevronUpDown.svg"

export default function Booking() {
  return (
    <div className="absolute w-full bottom-16 lg:bottom-6">
      <WhiteCard className="w-[92%] lg:w-[72%]" padding="lg" borderRadius="md">

        <div className="flex flex-col items-center gap-6 lg:flex-row">
          <div className="grid items-center w-full grid-cols-2 gap-6 lg:grid-cols-3 grow lg:gap-2">

            {/* ---- tour ---- */}
            <div className="relative col-span-2 lg:pr-8 lg:col-span-1">
              <BookingContainer>
                <BookingLabel htmlFor="tour">Tour</BookingLabel>
                <BookingButton id="tour">
                  <img src={locationSvg} alt="tour-svg" />
                  <BookingText className="uppercase">HaGiang Loop Tour</BookingText>
                  <img src={chevronDownSvg} alt="chevron-down-svg" />
                </BookingButton>
              </BookingContainer>
              <SmallBar />
            </div>

            <div className="block h-px col-span-2 lg:hidden bg-second-gray/80" />

            {/* ---- self driving ---- */}
            <div className="relative lg:px-8">
              <BookingContainer>
                <BookingLabel htmlFor="self-driving">Self - Driving</BookingLabel>
                <BookingButton id="self-driving">
                  <img src={personSvg} alt="person-svg" />
                  <BookingText>2 pax</BookingText>
                  <img src={chevronUpDownSvg} alt="chevron-up-down-svg" />
                </BookingButton>
              </BookingContainer>
              <SmallBar />
            </div>

            {/* ---- private driver ---- */}
            <div className="relative lg:pl-8">
              <button className="flex flex-col w-full gap-2">
                <BookingLabel htmlFor="private-driver">Private Driver</BookingLabel>
                <BookingButton id="private-driver">
                  <img src={personSvg} alt="person-svg" />
                  <BookingText>5 pax</BookingText>
                  <img src={chevronUpDownSvg} alt="chevron-up-down-svg" />
                </BookingButton>
              </button>
            </div>
          </div>

          {/* ---- book now btn ---- */}
          <ContainedButton className="flex-none w-full lg:w-auto" size="lg">
            <div className="flex flex-row items-center lg:flex-col">
              <span className="text-xl lg:text-[1.625rem] text-white font-bold">$299</span>
              <span className="ml-auto text-sm font-semibold text-white uppercase lg:font-bold lg:normal-case">Book Now</span>
            </div>
          </ContainedButton>
        </div>

      </WhiteCard>
    </div>
  )
}