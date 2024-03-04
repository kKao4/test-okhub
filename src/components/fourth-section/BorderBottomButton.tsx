import { cn } from "../../utils/cn"

interface BorderBottomButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode,
  active: boolean
}

export default function BorderBottomButton({ children, className, active, ...props }: BorderBottomButtonProps) {
  return (
    <button
      {...props}
      className={cn("py-0.5 px-px border-b-2 border-b-transparent hover:border-b-root-orange transition-300",
        {
          "border-b-root-orange": active
        }, className)}
    >
      <span
        className={cn("text-fourth-gray hover:text-root-orange transition-300 uppercase text-xs lg:text-sm font-semibold", {
          "text-root-orange": active
        })}
      >
        {children}
      </span>
    </button>
  )
}