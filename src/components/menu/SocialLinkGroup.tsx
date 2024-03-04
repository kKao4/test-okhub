import { FaFacebookF, FaYoutube } from "react-icons/fa6";
import CircleLink from "../link/CircleLink";
import { cn } from "../../utils/cn";

interface SocialLinkGroupProps extends React.ComponentProps<"div"> { }

export default function SocialLinkGroup({ className, ...props }: SocialLinkGroupProps) {
  return (
    <div {...props} className={cn("flex flex-row items-center justify-center gap-2", className)}>
      <CircleLink href="/">
        <FaFacebookF className="text-white text-sm" />
      </CircleLink>
      <CircleLink href="/">
        <FaYoutube className="text-white text-sm" />
      </CircleLink>
    </div>
  )
}