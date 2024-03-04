import { cn } from "../../../utils/cn"

interface Heading1Props extends React.ComponentProps<"h1"> {
  children: React.ReactNode
}

export default function Heading1({ children, className, ...props }: Heading1Props) {
  return (
    <h1 {...props} className={cn("text-2xl lg:text-6xl leading-none font-heavitas uppercase", className)}>
      {children}
    </h1 >
  )
}