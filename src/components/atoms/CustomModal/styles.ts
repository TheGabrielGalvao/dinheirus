import { styled } from "../../../util/stitches.config";


export const Container = styled('div',{
    position: 'fixed',
    left: '0',
    right: '0',
    bottom: '0',
    top: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(0, 0, 0, 0.5)',
})

export const ModalContent = styled('div', {
    padding: '3rem',
    minHeight: '400px',
    width: '600px',
    backgroundColor: '$sidebarColor',
    borderRadius: '5px',
    position: 'relative',
})
  