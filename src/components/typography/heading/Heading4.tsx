import { cn } from "../../../utils/cn"

interface Heading4Props extends React.ComponentProps<"h4"> {
  children: React.ReactNode
}

export default function  Heading4({ children, className, ...props }: Heading4Props) {
  return (
    <h4 {...props} className={cn("font-heavitas text-root-orange uppercase text-xs lg:text-base leading-5 lg:leading-7", className)}>
      {children}
    </h4 >
  )
}