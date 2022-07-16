import { styled } from '@stitches/react';

export const StyledSummary = styled('div', {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: '100%',
    height: 'inherit',
    // padding: 20,
    // gap: 20,
    // background: '#c23',
    
})

export const StyledLine = styled('p', {
    display: 'flex',
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,
    width: '100%',
    padding: 10,
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
                color: '$primaryColor'
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
        fontSize: 25
    },

    variants: {
        color: {
            default: {
                '& > strong': {
                    color: '$successColor'
                }
            },
            success: {
                '& > strong': {
                    color: '$successColor'
                }
            },
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
            default: {
                background: '$successColorLight',
                color: '$successColor'
            },
            success: {
                background: '$successColorLight',
                color: '$successColor'
            },
            danger: {
                background: '$dangerColorLight',
                color: '$dangerColor'
            },

        }
    },

    svg: {
        fontSize: 30,
        // color: '$textColor',
        alignSelf: 'center'
    },
})