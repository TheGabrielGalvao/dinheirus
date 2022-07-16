import { ReactNode } from "react"
import { EColorType } from "../../../util/constants/EColorType"
import { StyledButton } from "./styles"


export interface ButtonProps {
    children: ReactNode
    color?: EColorType
}

export const Button = ({children, color}: ButtonProps) => {
    return (
        <StyledButton color={color ?? 'default'}>
            {children}
        </StyledButton>
    )
}