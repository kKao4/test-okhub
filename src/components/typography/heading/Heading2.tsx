import { cn } from "../../../utils/cn"

interface Heading2Props extends React.ComponentProps<"h2"> {
  children: React.ReactNode
}

export default function Heading2({ children, className, ...props }: Heading2Props) {
  return (
    <h2 {...props} className={cn("font-heavitas text-root-orange uppercase text-2xl lg:text-5xl leading-7", className)}>
      {children}
    </h2 >
  )
}