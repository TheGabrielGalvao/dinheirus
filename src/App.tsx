import { BrowserRouter } from "react-router-dom"
import { LayoutProvider } from "./contexts/LayoutProvider"
import { LayoutRoutes } from "./routes"
import { globalStyles } from "./util/globalStyle"

function Layout() {
  globalStyles()
  return (
    <LayoutProvider>
        <LayoutRoutes />
    </LayoutProvider>
  )
}

export default Layout
