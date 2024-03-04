import { createContext, useContext, useState } from "react";

interface IModalContext {
  isOpenMenu: boolean,
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>,
  isOpenCarousel: boolean,
  setIsOpenCarousel: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalContext = createContext<IModalContext | null>(null)

export function useModalContext() {
  const menuContext = useContext(ModalContext)
  if (!menuContext) {
    throw new Error("Menu context is not provide")
  }
  return menuContext
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isOpenCarousel, setIsOpenCarousel] = useState(false)

  return (
    <ModalContext.Provider value={{ isOpenMenu, setIsOpenMenu, isOpenCarousel, setIsOpenCarousel }}>
      {children}
    </ModalContext.Provider>
  )
}
