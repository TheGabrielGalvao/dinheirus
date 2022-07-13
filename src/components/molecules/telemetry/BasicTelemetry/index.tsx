import { BiArrowFromTop, BiArrowToTop, BiUpArrowAlt } from "react-icons/bi"
import { moneyFormat } from "../../../../util/format"
import { BaseTelemetry } from "../BaseTelemetry"
import { StyledTelemetry } from "./styles"


export const BasicTelemetry = () => {
    return (
        <BaseTelemetry>
            <StyledTelemetry>
                <h1>Total Ballance</h1>
                <p>
                    <span>{moneyFormat(20)}</span>
                    <div className="badge">
                        <b>&nbsp; +8%</b>
                        <BiUpArrowAlt />
                    </div>
                </p>
            </StyledTelemetry>
        </BaseTelemetry>
    )
}