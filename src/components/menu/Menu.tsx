import xMark from "../../assets/svg/xMark.svg"
import bgMenu1 from "../../assets/image/bg-menu_1.png"
import bgMenu2 from "../../assets/image/bg-menu_2.png"
import MenuLink from "./MenuLink"
import SocialLinkGroup from "./SocialLinkGroup"
import { useModalContext } from "../../context/ModalContext"
import Modal from "../modal/Modal"

interface IMenu {
  text: string,
  href: string,
}

const menu: IMenu[] = [
  { text: "Home", href: "/" },
  { text: "About us", href: "/" },
  { text: "Tour", href: "/" },
  { text: "Destinations", href: "/" },
  { text: "Blog", href: "/" },
  { text: "FAQ", href: "/" },
  { text: "Contact", href: "/" },
  { text: "Vietnam Cheers Hostel", href: "/" },
]

export default function Menu() {
  const { isOpenMenu, setIsOpenMenu } = useModalContext()

  return (
    <Modal isOpen={isOpenMenu}>
      <nav className="relative w-full h-full py-6 flex flex-col bg-white">
        {/* ---- close button ---- */}
        <button className="absolute top-3 right-3 p-2 z-40" onClick={() => setIsOpenMenu(false)}>
          <img src={xMark} alt="x-mark" />
        </button>

        {/* ---- cloud background ---- */}
        <img
          src={bgMenu2}
          alt="bg-menu-2"
          className="absolute bottom-[40%] -left-[200%] scale-[5]"
        />

        {/* ---- mountain background ---- */}
        <img
          src={bgMenu1}
          alt="bg-menu-1"
          className="absolute -bottom-[15%] left-[70%] scale-150 -translate-x-1/2"
        />

        {menu.map(item => {
          return (
            <MenuLink key={item.text} href={item.href}>
              {item.text}
            </MenuLink>
          )
        })}

        <div className="z-30 py-2">
          <SocialLinkGroup />
        </div>

      </nav>
    </Modal>
  )
}