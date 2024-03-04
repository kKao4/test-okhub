import { cn } from "../../utils/cn"

interface CircleLinkProps extends React.ComponentProps<"a"> {
  children: React.ReactNode
}

export default function CircleLink({ children, className, ...props }: CircleLinkProps) {
  return (
    <a
      {...props}
      className={cn("size-7 bg-root-orange rounded-full flex justify-center items-center opacity-hover", className)}
      onClick={(e) => e.preventDefault()}
    >
      {children}
    </a>
  )
}