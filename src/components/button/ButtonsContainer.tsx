import { cn } from "../../utils/cn"

interface ButtonsContainerProps extends React.ComponentProps<"div"> {
  children: React.ReactNode
}

export default function ButtonsContainer({ children, className, ...props }: ButtonsContainerProps) {
  return (
    <div {...props} className={cn("flex flex-row gap-3 lg:gap-4 w-full lg:w-auto", className)}>
      {children}
    </div>
  )
}