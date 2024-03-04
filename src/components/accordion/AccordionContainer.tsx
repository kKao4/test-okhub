import { cn } from "../../utils/cn"

interface AccordionContainerProps extends React.ComponentProps<"div"> {
  children: React.ReactNode
}

export default function AccordionContainer({ children, className, ...props }: AccordionContainerProps) {
  return (
    <div {...props} className={cn("flex flex-col gap-6", className)}>
      {children}
    </div>
  )
}