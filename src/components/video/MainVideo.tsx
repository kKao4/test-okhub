import { forwardRef } from "react"
import mainVideo from "../../assets/video/-63f7-400e-aa24-4786301f0124.mp4"
import { cn } from "../../utils/cn"

interface MainVideoProps extends React.ComponentProps<"video"> { }

const MainVideo = forwardRef<HTMLVideoElement, MainVideoProps>(({ className, ...props }, ref) => {
  return (
    <video
      ref={ref}
      {...props}
      className={cn("aspect-video brightness-90", className)}
      controls={false}
      autoPlay
      muted
      loop
    >
      <source src={mainVideo} type="video/mp4" />
    </video>
  )
})

export default MainVideo