import { cn } from "../../utils/cn"

interface GraySpanProps extends React.ComponentProps<"span"> {
  children: React.ReactNode
}

export default function GraySpan({ children, className, ...props }: GraySpanProps) {
  return (
    <span {...props} className={cn("text-root-gray text-sm", className)}>
      {children}
    </span>
  )
}