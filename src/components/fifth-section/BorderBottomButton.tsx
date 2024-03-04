import { cn } from "../../utils/cn"

interface BorderBottomButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode,
  active: boolean
}

export default function BorderBottomButton({ children, className, active, ...props }: BorderBottomButtonProps) {
  return (
    <button
      {...props}
      className={cn("py-1 border-b-[3px] basis-1/2 border-b-transparent hover:border-b-root-orange transition-300",
        {
          "border-b-root-orange": active
        }, className)}
    >
      <span
        className={cn("text-fourth-gray hover:text-root-orange transition-300 uppercase font-bold", {
          "text-root-orange": active
        })}
      >
        {children}
      </span>
    </button>
  )
}