import WhiteCard from "../card/WhiteCard";
import DesktopNavbar from "../navbar/DesktopNavbar";
import SocialLinkGroup from "../menu/SocialLinkGroup";
import logo from "../../assets/svg/smallLogo.svg"

export default function DesktopHeader() {
  return (
    <WhiteCard className="w-[87%] hidden lg:block relative" borderRadius="lg">
      <div className="flex flex-row">
        {/* ---- logo ---- */}
        <a href="/" className="flex-none opacity-hover">
          <img src={logo} alt="logo" loading="eager" />
        </a>

        {/* ---- navbar ---- */}
        <DesktopNavbar />

        {/* ---- facebook, youtube ---- */}
        <SocialLinkGroup />
      </div>
    </WhiteCard>
  )
}