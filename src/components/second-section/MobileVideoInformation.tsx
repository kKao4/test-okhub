import travelSvg from "../../assets/svg/travel.svg"
import busSvg from "../../assets/svg/bus.svg"
import awardSvg from "../../assets/svg/award.svg"

interface MobileVideoInformationProps {
  about: "travel" | "bus" | "award"
}

export default function MobileVideoInformation({ about }: MobileVideoInformationProps) {
  const img = about === "travel" ? travelSvg : about === "bus" ? busSvg : awardSvg

  return (
    <div className="flex flex-row gap-2">
      <img src={img} alt="information-svg" />
      <div>
        <p className="text-white font-bold">
          {about === "travel" && "300 km"}
          {about === "bus" && "8 hours"}
          {about === "award" && "Top #1"}
        </p>
        <p className="text-white text-xs">
          {about === "travel" && "North of Hanoi"}
          {about === "bus" && "Bus drive"}
          {about === "award" && "Epic loop in Vietnam"}
        </p>
      </div>
    </div>
  )
}