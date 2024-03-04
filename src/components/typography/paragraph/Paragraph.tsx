import { forwardRef } from "react"
import { cn } from "../../../utils/cn"

interface ParagraphProps extends React.ComponentProps<"p"> {
  children: React.ReactNode
}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(({ children, className, ...props }, ref) => {
  return (
    <p {...props} ref={ref} className={cn("text-sm text-root-gray leading-5.5 text-justify", className)}>
      {children}
    </p>
  )
})

export default Paragraph