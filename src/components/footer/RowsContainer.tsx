import { cn } from "../../utils/cn"

interface RowsContainerProps extends React.ComponentProps<"div"> {
  children: React.ReactNode,
}

export default function RowsContainer({ children, className, ...props }: RowsContainerProps) {
  return (
    <div {...props} className={cn("flex flex-col items-center lg:items-start gap-1.5 lg:gap-2.5", className)}>
      {children}
    </div>
  )
}