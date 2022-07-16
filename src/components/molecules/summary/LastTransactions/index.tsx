import { BiDotsHorizontalRounded, BiUser, BiUserCircle } from "react-icons/bi"
import { ITransaction } from "../../../../interfaces/ITransaction"
import { ETransactionType } from "../../../../util/constants/ETransactionType"
import { moneyFormat } from "../../../../util/format"
import { TransactionLine } from "../../../atoms/TransactionLine"
import { BaseSummary } from "../BaseSummary"
import { StyledIcon, StyledLine, StyledSummary } from "./styles"


const transactions: ITransaction[] = [
    {
        Id: 1,
        Description: 'Recebido de',
        Type: ETransactionType.INCOMING,
        Value: 50,
        Category: 'Personal Payment',
        Contact: 'John'
    },
    {
        Id: 2,
        Description: 'Transfer to',
        Type: ETransactionType.WITHDRAW,
        Value: 50,
        Category: 'Personal Payment',
        Contact: 'Joe'
    },
]

export const LastTransactions = () => {
    return (
        <BaseSummary header={{
            title: 'Latest Transactions',
            button: {
                children: <BiDotsHorizontalRounded />
            }
        }} >
            <StyledSummary>
                    {
                        transactions.map(item => (
                            <TransactionLine transaction={item} />
                        ))
                    }
            </StyledSummary>
        </ BaseSummary>    
    )
}