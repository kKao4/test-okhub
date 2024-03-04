import fancyBackgroundButton from "../../assets/svg/fancyBackgroundButton.svg"
import { cn } from "../../utils/cn"

interface FancyBackgroundButtonProps extends React.ComponentProps<"img"> { }

export default function FancyBackgroundButton({ className, ...props }: FancyBackgroundButtonProps) {
  return (
    <img
      {...props}
      src={fancyBackgroundButton}
      alt="fancy-background-button"
      className={cn("absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 h-[75%]", className)}
    />
  )
}