import { styled } from "../../../util/stitches.config";

export const Badge = styled('div', {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        borderRadius: 20,
        // border: '1px solid $successColor'    
    
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
})