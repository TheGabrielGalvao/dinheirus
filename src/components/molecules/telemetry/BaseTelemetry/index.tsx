import { ReactNode } from "react"
import { ButtonProps } from "../../../gui/Button"
import { Card } from "../../../gui/Card"
import { Container} from "./styles"

interface Props {
    body?:{
        title?: string
        icon?: ReactNode
        value?: number
        background?: 'transparent' |  'default' |  'primary' |  'success' |  'warning' |  'danger'
    }
    header?: {
        title?: string
        icon?: ReactNode
        button?: ButtonProps
    }
    children?: ReactNode
}

export const BaseTelemetry = ({body, header, children}: Props) => {
    return (
        <Card background={body?.background} header={header} >
            <Container>
                {children}
            </Container>
        </Card>
    )
}