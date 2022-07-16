import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BaseSummary } from "../../components/molecules/summary/BaseSummary";
import { BasicSummary } from "../../components/molecules/summary/BasicSummary";
import { LastTransactions } from "../../components/molecules/summary/LastTransactions";
import { ComposedSummary } from "../../components/molecules/summary/ComposedSummary";
import { DashboardFooter, DashboardHeader, Metrics } from "./styles";
import { BasicSummaryProps } from "../../components/molecules/summary/BasicSummary/types";

const summaryList: BasicSummaryProps[] = [
    {
        title: 'Total Income',
        prevTotal: 50,
        currentTotal: 60,
    },
    {
        title: 'Total Saves',
        prevTotal: 100,
        currentTotal: 60,
    },
    {
        title: 'Total Expense',
        prevTotal: 600,
        currentTotal: 500,
    },
    {
        title: 'Upcoming',
        prevTotal: 50,
        currentTotal: 60,
    },
]

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
            {
                summaryList.map(item => (
                    <BasicSummary title={item.title} prevTotal={item.prevTotal} currentTotal={item.currentTotal} />
                ))
            }            
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