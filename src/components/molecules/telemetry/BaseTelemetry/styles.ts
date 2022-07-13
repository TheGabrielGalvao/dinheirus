import { styled } from "../../../../util/stitches.config";

export const Container = styled('div', {
    display: 'flex',
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: '0.25rem',
    color: '$titleColor',
    // overflow: "hidden",
    height: '100%',
    width: 'inherit',
    
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        '& svg': {
            fontSize: 25
        }
    },

    strong: {
        display: 'block',
        marginTop: '1rem',
        fontSize: '2rem',
        fontWeight: '500',
        lineHeight: '3rem',
    }
})
