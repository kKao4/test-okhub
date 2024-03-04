import { cn } from "../../utils/cn"

interface ButtonContainerProps extends React.ComponentProps<"div"> {
  children: React.ReactNode
}

export default function ButtonContainer({ children, className, ...props }: ButtonContainerProps) {
  return (
    <div {...props} className={cn("basis-1/2 lg:basis-auto", className)}>
      {children}
    </div>
  )
}