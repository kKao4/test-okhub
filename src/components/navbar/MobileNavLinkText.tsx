import clsx from "clsx"

interface MobileNavLinkTextProps extends React.ComponentProps<"span"> {
  children: React.ReactNode
}

export default function MobileNavLinkText({ children, className, ...props }: MobileNavLinkTextProps) {
  return (
    <span {...props} className={clsx("text-xsm capitalize font-medium", className)}>
      {children}
    </span>
  )
}