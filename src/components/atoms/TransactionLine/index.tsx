import { useEffect, useState } from "react"
import { BiDollar, BiUser } from "react-icons/bi"
import { EColorType } from "../../../util/constants/EColorType"
import { ETransactionType } from "../../../util/constants/ETransactionType"
import { moneyFormat } from "../../../util/format"
import { StyledIcon, StyledLine } from "./styles"
import { TransactionLineProps } from "./types"


export const TransactionLine = ({transaction}: TransactionLineProps) => {
    const [color, setColor] = useState<EColorType>(EColorType.DEFAULT)

    useEffect(() => {
      if(transaction.Type === ETransactionType.INCOMING) {
        setColor(EColorType.SUCCESS)
      }
      else {
        setColor(EColorType.DANGER)
      }
    }, [])
    

    return (
        <StyledLine color={color}>
            <StyledIcon color={color}>
                <BiDollar />
            </StyledIcon>
            <span>
                <strong>{transaction.Description} <b>{transaction.Contact}</b></strong>
                <i>{transaction.Category}</i>
            </span>
            <strong>
                { 
                    transaction.Type === ETransactionType.INCOMING && transaction.Value > 0
                    ? '+' + moneyFormat(transaction.Value)
                    : moneyFormat(transaction.Value)
                }

            </strong>
        </StyledLine>
    )
}