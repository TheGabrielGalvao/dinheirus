import { ReactNode } from "react"
import { EColorType } from "../../../util/constants/EColorType"
import { Button, ButtonProps } from "../Button"
import { Container, StyledHeader } from "./styles"

interface Props {
    children?: ReactNode
    header?: {
        title?: string
        icon?: ReactNode
        button?: ButtonProps
    }
    background?: EColorType
}  

export const Card = ({children, header, background}: Props) => {
    return(
        <Container background={background}>
            {
                header &&
                <StyledHeader>
                    <p>{header?.title}</p>
                    {
                        <Button color={header.button?.color}>
                            {header.button?.children}
                        </Button>
                    }
                </StyledHeader>
            }
            
            {children}
        </Container>
    )
}