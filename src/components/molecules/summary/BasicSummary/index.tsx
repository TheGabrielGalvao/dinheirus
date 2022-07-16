import { BiArrowFromTop, BiArrowToTop, BiUpArrowAlt } from "react-icons/bi"
import { moneyFormat } from "../../../../util/format"
import { BaseSummary } from "../BaseSummary"
import { StyledSummary } from './styles'


export const BasicSummary = () => {
    return (
        <BaseSummary>
            <StyledSummary>
                <h1>Total Ballance</h1>
                <p>
                    <span>{moneyFormat(20)}</span>
                    <div className="badge">
                        <b>&nbsp; +8%</b>
                        <BiUpArrowAlt />
                    </div>
                </p>
            </StyledSummary>
        </BaseSummary>
    )
}