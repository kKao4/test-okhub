import { cn } from "../../utils/cn"
import FancyBackgroundButton from "./FancyBackgroundButton"

interface OutlinedButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode,
}

export default function OutlinedButton({ children, className, ...props }: OutlinedButtonProps) {
  return (
    <button
      {...props}
      className={cn("relative bg-transparent rounded-lg transition-300 py-2.5 px-6 ring-1 ring-root-orange ring-inset group hover:bg-root-orange w-full", className)}
    >
      <FancyBackgroundButton className="opacity-0 group-hover:opacity-100 transition-300" />
      <span className="text-sm font-bold opacity-0 mt-px">{children}</span>
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lsm lg:text-sm font-bold text-root-orange w-full group-hover:text-white transition-300 mt-px">{children}</span>
    </button>
  )
}