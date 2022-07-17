import { BiDotsHorizontalRounded, BiUser, BiUserCircle } from "react-icons/bi"
import { ITransaction } from "../../../interfaces/ITransaction"
import { CustomModal } from "../../atoms/CustomModal"
import { TransactionLine } from "../../atoms/TransactionLine"
import { BaseSummary } from "../summary/BaseSummary"
import {StyledSummary } from "./styles"

interface Props {
    transactions?: ITransaction[]
}

export const LastTransactions = ({transactions}: Props ) => {
    return (
        <BaseSummary header={{
            title: 'Latest Transactions',
            button: {
                children: <BiDotsHorizontalRounded />
            }
        }} >
            <StyledSummary>
                    {
                        transactions?.map(item => (
                            <TransactionLine transaction={item} />
                        ))
                    }
            </StyledSummary>
            {/* <CustomModal visible={true} /> */}
        </ BaseSummary>    
    )
}