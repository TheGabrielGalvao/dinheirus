import { EColorType } from "../../../../util/constants/EColorType"
import { moneyFormat } from "../../../../util/format"
import { BaseSummary } from "../BaseSummary"
import { Detail, TotalValue } from "./styles"

interface ComposedSummaryProps  {
    left?: {
        title?: string
        value?: number
        legend?: string
    }
    right?: {
        value?: number
        legend?: string
    }
}


export const ComposedSummary = ({left, right}: ComposedSummaryProps) => {
    const leftValue = left?.value ?? 0
    const rightValue = right?.value ?? 0
    const color = leftValue > 0 ? EColorType.SUCCESS : EColorType.DANGER
    return (
        <BaseSummary>
            <Detail color={color}>
                <h1>{left?.title}</h1>
                <strong>
                    {`${(leftValue > 0) ? '+' + moneyFormat(leftValue) : moneyFormat(leftValue)}`}
                </strong>
                <p>{left?.legend}</p>
            </Detail>            
            <TotalValue>
                <h1>{moneyFormat(rightValue)}</h1>
                <p>{right?.legend}</p>
            </TotalValue>
        </BaseSummary>
    )
}
