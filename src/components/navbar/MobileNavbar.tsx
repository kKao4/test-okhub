import homeSvg from "../.././assets/svg/home.svg"
import motorbikeSvg from "../.././assets/svg/motorbike.svg"
import whatsAppSvg from "../.././assets/svg/whatsApp.svg"
import mailSvg from "../.././assets/svg/mail.svg"
import hamburgerBarSvg from "../.././assets/svg/hamburgerBar.svg"
import MobileNavButton from "./MobileNavButton"
import MobileNavLinkText from "./MobileNavLinkText"
import { useModalContext } from "../../context/ModalContext"

export default function MobileNavbar() {
  const { setIsOpenMenu } = useModalContext()

  return (
    <nav
      className="fixed bottom-0 w-full left-0 bg-white pt-3 pb-1 px-4 grid lg:hidden grid-cols-5 gap-4 z-40"
      style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }}
    >
      <MobileNavButton>
        <img src={homeSvg} alt="home-svg" />
        <MobileNavLinkText className="text-root-orange">Home</MobileNavLinkText>
      </MobileNavButton>
      <MobileNavButton>
        <img src={motorbikeSvg} alt="motorbike-svg" />
        <MobileNavLinkText>Tour</MobileNavLinkText>
      </MobileNavButton>
      <MobileNavButton>
        <img src={whatsAppSvg} alt="whatsapp-svg" />
        <MobileNavLinkText>WhatsApp</MobileNavLinkText>
      </MobileNavButton>
      <MobileNavButton>
        <img src={mailSvg} alt="mail-svg" />
        <MobileNavLinkText>Book Now</MobileNavLinkText>
      </MobileNavButton>
      <MobileNavButton onClick={() => setIsOpenMenu(prevState => !prevState)}>
        <img src={hamburgerBarSvg} alt="hamburgerBar-svg" />
        <MobileNavLinkText>Menu</MobileNavLinkText>
      </MobileNavButton>
    </nav>
  )
}