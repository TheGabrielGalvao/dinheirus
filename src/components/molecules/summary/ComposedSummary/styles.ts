import { styled } from "../../../../util/stitches.config";

export const TotalValue = styled('span', {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    background: "$primaryColor",
    color: "$white",
    height: 'inherit',
    padding: 80,
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
    
    h1: {
        color: "$white",
        fontWeight: 800,
        fontFamily: 'Inter, sans-serif', 
        fontSize: 45,
        
    },
    p: {
        color: "$bodyColor",
        fontFamily: 'Mulish, sans-serif',
        fontWeight: 900,
        fontSize: 16,
        textTransform: "uppercase"
    }
    // marginLeft: '50%'
})

export const Detail = styled('div', {
    display: 'flex',
    flexDirection: "column",
    width: '80%',
    padding: 50,
    // background: '#c23',

    h1: {
        color: "$titleColor",
        fontFamily: 'Mulish, sans-serif',
        fontWeight: 900,
        fontSize: 40
    },

    strong: {
        color: "$successColor",
        fontWeight: 800,
        fontFamily: 'Inter, sans-serif', 
        fontSize: 33,
    },
    p: {
        color: "$textColorLight",
        fontFamily: 'Mulish, sans-serif',
        fontWeight: 700,
        fontSize: 26
    }
})