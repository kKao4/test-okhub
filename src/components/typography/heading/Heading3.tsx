import { cn } from "../../../utils/cn"

interface Heading3Props extends React.ComponentProps<"h3"> {
  children: React.ReactNode
}

export default function Heading3({ children, className, ...props }: Heading3Props) {
  return (
    <h3 {...props} className={cn("text-xl lg:text-2.25xl leading-none font-semibold uppercase", className)}>
      {children}
    </h3 >
  )
}