import { styled } from "../../../util/stitches.config"

export const StyledLine = styled('p', {
    display: 'flex',
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,
    width: '100%',
    padding: '1rem',
    transition: '$tran03',
    cursor: 'pointer',

    
    span: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: "flex-start",
        height: '100%',
        flex: 2,
        flexDirection: 'column',
        
        strong: {
            fontFamily: 'Mulish, sans-serif',
            fontWeight: 800,
            fontSize: 20,

            b: {
                color: '$primaryColor',
                fontWeight: 800
            }
            
        },
        i: {
            fontFamily: 'Mulish, sans-serif',
            fontWeight: 800,
            fontSize: 17,
            color: '$textColorLight',
            top: 0,
            
        }
    },

    '&:hover': {
        background: '$primaryColorLight',
    },

    '& > strong': {
        color: '$successColor',
        fontFamily: 'Mulish, sans-serif',
        fontWeight: 800,
        fontSize: 22
    },

    variants: {
        color: {
            transparent: {},
            default: {
                '& > strong': {
                    color: '$successColor'
                }
            },
            primary: {},
            success: {
                '& > strong': {
                    color: '$successColor'
                }
            },
            warning: {},
            danger: {
                '& > strong': {
                    color: '$dangerColor'
                }
            },
            

        }
    },
})

export const StyledIcon = styled('div', {
    width: 42,
    height: 42,
    background: 'url(.jpg), #D9D9D9',
    /* Inside auto layout */
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    order: '0',
    flexGrow: '0',
    borderRadius: 100,

    variants: {
        color: {
            transparent: {},

            default: {
                background: '$successColorLight',
                color: '$successColor'
            },
            primary: {},
            success: {
                background: '$successColorLight',
                color: '$successColor'
            },
            danger: {
                background: '$dangerColorLight',
                color: '$dangerColor'
            },
            warning: {}
        }
    },

    svg: {
        fontSize: 30,
        // color: '$textColor',
        alignSelf: 'center'
    },
})