import { forwardRef } from "react"
import { cn } from "../../utils/cn"

interface RootContainerProps extends React.ComponentProps<"section"> {
  children: React.ReactNode
}

const RootContainer = forwardRef<HTMLDivElement, RootContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <section {...props} ref={ref} className={cn("px-4 lg:px-0 w-full lg:w-[88%] mx-auto mt-12 lg:mt-16", className)}>
        {children}
      </section>
    )
  }
)

export default RootContainer