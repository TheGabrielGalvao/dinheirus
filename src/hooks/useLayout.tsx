import { useContext } from "react"
import { LayoutContext } from "../contexts/LayoutProvider"

export const useLayout = () => {
    const context = useContext(LayoutContext)

    return context
}
