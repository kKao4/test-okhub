import { cn } from "../../utils/cn"

interface BookingLabelProps extends React.ComponentProps<"label"> {
  children: React.ReactNode
}

export default function BookingLabel({ children, className, ...props }: BookingLabelProps) {
  return (
    <label
      {...props}
      className={cn("uppercase text-xs lg:text-sm text-root-gray font-poppins", className)}>
      {children}
    </label>
  )
}