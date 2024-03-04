import { cn } from "../../utils/cn"

interface InformationContainerProps extends React.ComponentProps<"div"> {
  children: React.ReactNode
}

export default function InformationContainer({ children, className, ...props }: InformationContainerProps) {
  return (
    <div {...props} className={cn("flex flex-row gap-1", className)}>
      {children}
    </div>
  )
}