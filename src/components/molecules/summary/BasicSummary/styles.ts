import { styled } from "../../../../util/stitches.config";


export const StyledSummary = styled('div', {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: '100%',
    padding: 20,
    gap: 20,
    // background: '#c23',

    p: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: 'inherit',
       
        svg: {
            fontSize: 30
        },
    
        span: {
            color: "$titleColor",
            fontWeight: 800,
            fontFamily: 'Inter, sans-serif', 
            fontSize: 33,
            
        },
        
    },

    '& .badge': {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "$successColor",
        padding: 5,
        background: '$successColorLight',
        borderRadius: 20,
        // border: '1px solid $successColor'    
    },

    

    h1: {
        color: "$textColorLight",
        fontFamily: 'Mulish, sans-serif',
        fontWeight: 700,
        fontSize: 20
    },

    
    // p: {
    //     color: "$textColorLight",
    //     fontFamily: 'Mulish, sans-serif',
    //     fontWeight: 700,
    //     fontSize: 26
    // }
})