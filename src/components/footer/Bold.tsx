import { cn } from "../../utils/cn"


interface BoldProps extends React.ComponentProps<"b"> {
  children: React.ReactNode
}

export default function Bold({ children, className, ...props }: BoldProps) {
  return (
    <b {...props} className={cn("text-root-black leading-5.5 font-semibold uppercase lg:font-bold text-lsm lg:text-base", className)}>
      {children}
    </b>
  )
}