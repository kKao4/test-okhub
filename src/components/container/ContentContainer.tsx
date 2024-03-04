import { cn } from "../../utils/cn"

interface ContentContainerProps extends React.ComponentProps<"div"> {
  children: React.ReactNode,
  marginBottom?: "xs" | "sm" | "md" | "lg"
}

export default function ContentContainer({ children, className, marginBottom = "md", ...props }: ContentContainerProps) {
  return (
    <div {...props} className={cn("mb-4 lg:mb-5", {
      "mb-2": marginBottom === "xs",
      "mb-2 lg:mb-3": marginBottom === "sm",
      "mb-5 lg:mb-7": marginBottom === "lg",
    }, className)}>
      {children}
    </div>
  )
}