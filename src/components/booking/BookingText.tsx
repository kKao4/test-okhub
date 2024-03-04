import { cn } from "../../utils/cn"

interface BookingTextProps extends React.ComponentProps<"span"> {
  children: React.ReactNode
}

export default function BookingText({ children, className, ...props }: BookingTextProps) {
  return (
    <span {...props} className={cn("font-poppins font-bold grow text-start text-sm lg:text-base", className)}>
      {children}
    </span>
  )
}