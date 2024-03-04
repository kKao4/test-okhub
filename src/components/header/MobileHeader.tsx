import logo from "../../assets/svg/smallLogo.svg"

export default function MobileHeader() {
  return (
    <div className="block lg:hidden">
      {/* ---- fixed logo ---- */}
      <a href="/" className="fixed z-30 scale-90 left-1 opacity-hover">
        <img src={logo} alt="logo" loading="eager" />
      </a>
    </div>
  )
}