import { useEffect, useState } from "react"
import { BiArrowFromTop, BiArrowToTop, BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi"
import { EColorType } from "../../../../util/constants/EColorType"
import { moneyFormat, percentDiff, percentFormat } from "../../../../util/format"
import { Badge } from "../../../atoms/Badge/styles"
import { BaseSummary } from "../BaseSummary"
import { StyledSummary } from './styles'
import { BasicSummaryProps } from "./types"


export const BasicSummary = ({title, prevTotal, currentTotal}: BasicSummaryProps) => {
    const [color, setColor] = useState<EColorType>(EColorType.DEFAULT)
    
    const percent = percentDiff(currentTotal, prevTotal)
    
    
    useEffect(() => {
      percent > 0 ? setColor(EColorType.SUCCESS) : setColor(EColorType.DANGER)
    }, [])

    return (
        <BaseSummary>
            <StyledSummary>
                <h1>{title}</h1>
                <p>
                    <span>{moneyFormat(currentTotal)}</span>
                    <Badge color={color}>
                        <b>&nbsp; {percentFormat(percent)}</b>
                        {
                            percent > 0
                            ? <BiUpArrowAlt />
                            : <BiDownArrowAlt />
                        }
                    </Badge>
                </p>
            </StyledSummary>
        </BaseSummary>
    )
}