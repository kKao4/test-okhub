import { Transition, TransitionStatus } from "react-transition-group"
import { useEffect, useRef } from "react"
import { createPortal } from "react-dom";
import { cn } from "../../utils/cn";
import { useLockedBody } from "usehooks-ts"

type TransitionStyles = {
  [key in TransitionStatus]?: React.CSSProperties;
};

const duration = 200

const defaultStyle = {
  transition: `opacity ${duration}ms ease-out`,
  opacity: 0,
}

const transitionStyles: TransitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

interface ModalProps extends React.ComponentProps<"div"> {
  isOpen: boolean,
  children: React.ReactNode
}

export default function Modal({ isOpen, children, className, ...props }: ModalProps) {
  const nodeRef = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setLocked] = useLockedBody(false, "root")

  useEffect(() => {
    setLocked(isOpen)
  }, [isOpen, setLocked])

  return createPortal(
    <Transition nodeRef={nodeRef} in={isOpen} timeout={duration} unmountOnExit>
      {state => (
        <div
          {...props}
          ref={nodeRef}
          className={cn("fixed top-0 left-0 h-dvh w-full z-50 overflow-hidden", className)}
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
        >
          {children}
        </div>
      )}
    </Transition>,
    document.body
  )
}