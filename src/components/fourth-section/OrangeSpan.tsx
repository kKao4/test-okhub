import { cn } from "../../utils/cn"

interface OrangeSpanProps extends React.ComponentProps<"span"> {
  children: React.ReactNode
}

export default function OrangeSpan({ children, className, ...props }: OrangeSpanProps) {
  return (
    <span {...props} className={cn("text-root-orange text-sm font-semibold", className)}>
      {children}
    </span>
  )
}