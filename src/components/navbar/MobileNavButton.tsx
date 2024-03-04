import { cn } from "../../utils/cn"

interface MobileNavButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode,
}

export default function MobileNavButton({ children, className, ...props }: MobileNavButtonProps) {
  return (
    <button {...props} className={cn("flex flex-col gap-1 items-center", className)}>
      {children}
    </button>
  )
}