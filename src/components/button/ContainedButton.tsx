import { cn } from "../../utils/cn"
import FancyBackgroundButton from "./FancyBackgroundButton"

interface ContainedButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode,
  size?: "sm" | "md" | "lg",
  fancyBackground?: boolean
}

export default function ContainedButton({ children, className, size = "md", fancyBackground = false, ...props }: ContainedButtonProps) {
  return (
    <button
      {...props}
      className={cn("relative bg-root-orange rounded-lg opacity-hover w-full", {
        "py-2.5 px-6": size === "md",
        "py-2.5 lg:py-2 px-4 lg:px-6": size === "lg",
      }, className)}
    >
      {fancyBackground ? (
        <>
          <FancyBackgroundButton />
          <span className="text-sm font-bold opacity-0 mt-px">{children}</span>
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lsm lg:text-sm font-bold text-white w-full mt-px">{children}</span>
        </>
      ) : (
        children
      )}
    </button>
  )
}