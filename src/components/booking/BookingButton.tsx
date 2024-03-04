import { cn } from "../../utils/cn"

interface BookingButtonProps extends React.ComponentProps<"div"> {
  children: React.ReactNode
}

export default function BookingButton({ children, className, ...props }: BookingButtonProps) {
  return (
    <div {...props} className={cn("flex flex-row gap-2 w-full items-center", className)}>
      {children}
    </div>
  )
}