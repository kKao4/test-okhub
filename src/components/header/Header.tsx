import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

export default function Header() {
  return (
    <>
      <header className=" absolute top-2 lg:top-6 w-full">
        <MobileHeader />
        <DesktopHeader />
      </header>
    </>
  )
}