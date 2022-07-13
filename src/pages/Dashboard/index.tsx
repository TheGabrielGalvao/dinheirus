import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BaseTelemetry } from "../../components/molecules/telemetry/BaseTelemetry";
import { BasicTelemetry } from "../../components/molecules/telemetry/BasicTelemetry";
import { TotalBalanceTelemetry } from "../../components/molecules/telemetry/TotalBallanceTelemetry";
import { DashboardFooter, DashboardHeader, Metrics } from "./styles";

export const Dashboard = () => (
    <>
        <DashboardHeader>
            <TotalBalanceTelemetry />
            <BaseTelemetry header={{
                title: 'Report',
                button: {
                    children: <BiDotsHorizontalRounded />
                }
            }} />
        </DashboardHeader>
        <Metrics>
            <BasicTelemetry />
            <BasicTelemetry />
            <BasicTelemetry />
            <BasicTelemetry />
        </Metrics>
        <DashboardFooter>
            <BaseTelemetry header={{
                title: 'Latest Transactions',
                button: {
                    children: <BiDotsHorizontalRounded />
                }
            }} />
            <BaseTelemetry header={{
                title: 'Spending This Month',
                button: {
                    children: <BiDotsHorizontalRounded />
                }
            }} />
        </DashboardFooter>
    </>
)