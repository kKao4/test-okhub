import mainVideo from "../../assets/video/-63f7-400e-aa24-4786301f0124.mp4"
import { cn } from "../../utils/cn"

interface MainVideoProps extends React.ComponentProps<"video"> { }

export default function MainVideo({ className, ...props }: MainVideoProps) {
  return (
    <video
      {...props}
      className={cn("aspect-video  brightness-90", className)}
      controls={false}
      autoPlay
      muted
      loop
    >
      <source src={mainVideo} type="video/mp4" />
    </video>
  )
}