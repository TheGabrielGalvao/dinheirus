import { moneyFormat } from "../../../../util/format"
import { BaseTelemetry } from "../BaseTelemetry"
import { Detail, TotalValue } from "./styles"



export const TotalBalanceTelemetry = () => {
    return (
        <BaseTelemetry>
            <Detail>
                <h1>Total Ballance</h1>
                <strong>+ {moneyFormat(20)}</strong>
                <p>Last Transaction</p>
            </Detail>            
            <TotalValue>
                <h1>{moneyFormat(200)}</h1>
                <p>Wallets Amount</p>
            </TotalValue>
        </BaseTelemetry>
    )
}