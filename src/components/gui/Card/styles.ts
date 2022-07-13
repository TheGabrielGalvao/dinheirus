import { styled } from "../../../util/stitches.config";


export const Container = styled("div", {
    background: '$sidebarColor',
    // padding: '0.5rem',
    borderRadius: '1rem',
    color: '$titleColor',
    height: 'inherit',
    width: '100%',
    overflow: 'hidden',
    // minHeight: '80%',
    flex: 1,

    variants: {
        background: {
            transparent: {},
            default:{
                background: '$sidebarColor',
                color: '$textColor',
            },
            primary:{},
            success:{
                background: '$successColor',
                color: '$white',
            },
            warning:{},
            danger:{
                background: '#c23',
                color: '#fff'
            },
        }
    }
})

export const StyledHeader = styled('head',{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    fontWeight: 'bold'
    
})
    
