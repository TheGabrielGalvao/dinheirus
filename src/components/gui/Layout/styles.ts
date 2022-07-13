import { styled } from "../../../util/stitches.config";

export const Layout = styled('div', {
    display: 'flex', 
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '$bodyColor',
    width: '100vw',
    height: '100vh',
    // maxWidth: 1120,
})

export const Content = styled('div', {
    position: 'absolute',
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    top: 0,
    left: 88,
    height: '100vh',
    width: 'calc(100% - 88px)',
    transition: '$tran05',
    gap: 30,
    // padding: '0 10rem'
})