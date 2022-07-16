import { moneyFormat } from "../../../../util/format"
import { BaseSummary } from "../BaseSummary"
import { Detail, TotalValue } from "./styles"



export const ComposedSummary = () => {
    return (
        <BaseSummary>
            <Detail>
                <h1>Total Ballance</h1>
                <strong>+ {moneyFormat(20)}</strong>
                <p>Last Transaction</p>
            </Detail>            
            <TotalValue>
                <h1>{moneyFormat(200)}</h1>
                <p>Wallets Amount</p>
            </TotalValue>
        </BaseSummary>
    )
}