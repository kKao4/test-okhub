import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { ModalProvider } from "./context/ModalContext.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModalProvider>
      <main className="antialiased font-poppins text-root-black overflow-hidden">
        <App />
      </main>
    </ModalProvider>
  </React.StrictMode>,
)
