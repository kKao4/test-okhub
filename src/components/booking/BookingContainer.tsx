import { cn } from "../../utils/cn"

interface BookingContainerProps extends React.ComponentProps<"div"> {
  children: React.ReactNode
}

export default function BookingContainer({ children, className, ...props }: BookingContainerProps) {
  return (
    <div
      {...props}
      className={cn("flex flex-col gap-2 w-full", className)}
    >
      {children}
    </div>
  )
}