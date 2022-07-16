import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BaseSummary } from "../../components/molecules/summary/BaseSummary";
import { BasicSummary } from "../../components/molecules/summary/BasicSummary";
import { LastTransactions } from "../../components/molecules/summary/LastTransactions";
import { ComposedSummary } from "../../components/molecules/summary/ComposedSummary";
import { DashboardFooter, DashboardHeader, Metrics } from "./styles";

export const Dashboard = () => (
    <>
        <DashboardHeader>
            <ComposedSummary />
            <BaseSummary header={{
                title: 'Report',
                button: {
                    children: <BiDotsHorizontalRounded />
                }
            }} />
        </DashboardHeader>
        <Metrics>
            <BasicSummary />
            <BasicSummary />
            <BasicSummary />
            <BasicSummary />
        </Metrics>
        <DashboardFooter>
            <LastTransactions />
            <BaseSummary header={{
                title: 'Spending This Month',
                button: {
                    children: <BiDotsHorizontalRounded />
                }
            }} />
        </DashboardFooter>
    </>
)