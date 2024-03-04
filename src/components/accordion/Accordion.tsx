import { useEffect, useRef, useState } from "react"
import { cn } from "../../utils/cn"
import Paragraph from "../typography/paragraph/Paragraph"

interface AccordionProps {
  title: string,
  content: string
}

export default function Accordion({ title, content }: AccordionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (ref.current) {
      if (isOpen) {
        ref.current.style.maxHeight = ref.current.scrollHeight + "px"
        ref.current.style.opacity = "1"
      } else {
        ref.current.style.maxHeight = "0px"
        ref.current.style.opacity = "0"
      }
    }
  }, [isOpen])

  return (
    <div>
      <button className={cn("border-b border-b-root-gray flex flex-row py-1.5 w-full mb-2 transition-700", {
        "border-root-orange": isOpen
      })} onClick={() => setIsOpen(!isOpen)}>
        <span
          className={cn("text-sm text-root-gray font-semibold transition-700", {
            "text-root-orange": isOpen
          })}>
          {title}
        </span>
        <svg
          className={cn("ml-auto transition-700 fill-root-gray", { "fill-root-orange": isOpen })}
          style={isOpen ? { transform: "rotateX(180deg)" } : undefined}
          width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.00288 6.905L3.83874 3.741C3.67814 3.58023 3.48171 3.50003 3.24947 3.50003C3.01727 3.50003 2.82093 3.58025 2.66034 3.741L2.17198 4.2292C2.01144 4.38971 1.93115 4.58617 1.93115 4.81831C1.93115 5.05045 2.01144 5.24681 2.17198 5.40758L6.41035 9.6524C6.57096 9.81303 6.76736 9.89334 6.99962 9.89334C7.23187 9.89334 7.42812 9.81305 7.5888 9.6524L11.8272 5.4076C11.9878 5.24683 12.0681 5.05049 12.0681 4.81833C12.0681 4.58617 11.9878 4.38974 11.8272 4.22922L11.3389 3.74102C11.1784 3.58025 10.9831 3.50005 10.7529 3.50005C10.5229 3.50005 10.3254 3.58028 10.1605 3.74102L7.00288 6.905Z" />
        </svg>
      </button>
      <div ref={ref} className="overflow-hidden max-h-0 transition-300">
        <Paragraph>{content}</Paragraph>
      </div>
    </div>
  )
}