import { cn } from "../../utils/cn"

interface WhiteCardProps extends React.ComponentProps<"section"> {
  children: React.ReactNode,
  padding?: "sm" | "md" | "lg",
  borderRadius?: "sm" | "md" | "lg"
}

export default function WhiteCard({ children, className, borderRadius = "md", padding = "md", ...props }: WhiteCardProps) {
  return (
    <section
      {...props}
      className={cn("bg-white mx-auto z-20 rounded-lg py-3 px-6 shadow",
        {
          "rounded-2xl": borderRadius === "lg",
          "py-4 px-4 lg:px-7 rounded-xl lg:rounded-lg": padding === "lg"
        }
        , className)}
    >
      {children}
    </section>
  )
}