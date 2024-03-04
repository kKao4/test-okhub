import { useRef } from "react"
import { useHover } from "usehooks-ts"
import { cn } from "../../utils/cn"
import { FaAngleDown } from "react-icons/fa6"

interface DesktopNavLinkProps extends React.ComponentProps<"a"> {
  children: React.ReactNode,
  canDropdown?: boolean
}

export default function DesktopNavLink({ children, className, canDropdown = false, ...props }: DesktopNavLinkProps) {
  const hoverRef = useRef<HTMLAnchorElement>(null)
  const isHover = useHover(hoverRef)

  return (
    <a
      {...props}
      ref={hoverRef}
      className={cn("relative font-heavitas uppercase text-sm group hover:-translate-y-2 transition-500 p-4 hover:text-orange-500 delay-75 cursor-pointer", className)}
      style={isHover ? { textShadow: "0px 4px 3px rgba(0,0,0,0.3)" } : undefined}
      onClick={(e) => e.preventDefault()}
    >
      {canDropdown ? (
        <div className="flex flex-row gap-1 items-center">
          {children}
          <FaAngleDown className="text-sm" />
        </div>
      ) : children}
      {/* ---- dot ---- */}
      <div
        className="absolute size-2 rounded-full bg-orange-500 bottom-3 translate-y-full left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-500"
        style={isHover ? { boxShadow: "0px 4px 3px rgba(0,0,0,0.3)" } : undefined}
      />
    </a>
  )
}