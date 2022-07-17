import * as Dialog from "@radix-ui/react-dialog"
import Modal from "react-modal"
import { Container, ModalContent } from "./styles"

interface CustomModalProps {
    visible: boolean
    
}

export const CustomModal = ({visible}: CustomModalProps) => {
    if (!visible) return null
    return (
        <Container>
            <ModalContent>
                
            </ModalContent>
        </Container>
    )
}