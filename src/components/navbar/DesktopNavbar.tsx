import DesktopNavLink from "./DesktopNavLink"

interface INavbar {
  text: string,
  href: string,
  canDropdown?: boolean
}

const navbar: INavbar[] = [
  { text: "Home", href: "/" },
  { text: "About us", href: "/" },
  { text: "Tour", href: "/", canDropdown: true },
  { text: "Destinations", href: "/" },
  { text: "Blog", href: "/" },
  { text: "FAQ", href: "/" },
  { text: "Contact", href: "/" },
  { text: "VIETNAM Cheers Hostel", href: "/" },
]
export default function DesktopNavbar() {
  return (
    <nav className="flex flex-row gap-2 justify-center items-center grow mx-auto">
      {navbar.map(item => {
        return <DesktopNavLink key={item.text} canDropdown={!!item.canDropdown}>{item.text}</DesktopNavLink>
      })}
    </nav>
  )
}