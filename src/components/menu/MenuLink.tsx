import { cn } from "../../utils/cn"

interface MenuLinkProps extends React.ComponentProps<"a"> {
  children: React.ReactNode
}

export default function MenuLink({ children, className, ...props }: MenuLinkProps) {
  return (
    <a {...props} className={cn("text-xl text-center font-heavitas uppercase py-2 z-30", className)}>
      {children}
    </a>
  )
}