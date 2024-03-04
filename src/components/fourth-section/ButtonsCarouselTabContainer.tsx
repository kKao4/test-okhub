import { cn } from "../../utils/cn"

interface ButtonsCarouselTabContainerProps extends React.ComponentProps<"div"> {
  children: React.ReactNode
}

export default function ButtonsCarouselTabContainer({ children, className, ...props }: ButtonsCarouselTabContainerProps) {
  return (
    <div {...props} className={cn("flex flex-row justify-between lg:gap-8 mb-5 lg:mb-8 w-full lg:w-auto", className)}>
      {children}
    </div>
  )
}