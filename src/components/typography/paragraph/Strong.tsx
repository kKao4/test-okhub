import { cn } from "../../../utils/cn"

interface StrongProps extends React.ComponentProps<"strong"> {
  children: React.ReactNode
}

export default function Strong({ children, className, ...props }: StrongProps) {
  return (
    <strong {...props} className={cn("text-sm text-root-black font-semibold leading-5.5", className)}>
      {children}
    </strong>
  )
}