import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BaseSummary } from "../../components/molecules/summary/BaseSummary";
import { BasicSummary } from "../../components/molecules/summary/BasicSummary";
import { LastTransactions } from "../../components/molecules/LastTransactions";
import { ComposedSummary } from "../../components/molecules/summary/ComposedSummary";
import { DashboardFooter, DashboardHeader, Metrics } from "./styles";
import { getTransactions, useTransaction } from "../../store/slices/Transaction";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { useSummary } from "../../store/slices/Summary";
import {last} from 'lodash'
import { useBallance } from "../../store/slices/Ballance";
import { useEffect } from "react";
import { CustomModal } from "../../components/atoms/CustomModal";

export const Dashboard = () => {
    const {data} = useAppSelector(useTransaction)
    const summaryList = useAppSelector(useSummary)
    const ballance = useAppSelector(useBallance)
    const lastTransaction = last(data)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getTransactions())
    })

    return (
        <>
            <DashboardHeader>
                <ComposedSummary 
                    left ={{
                        title: 'Total Ballance',
                        value: lastTransaction?.Value,
                        legend: 'Last Transaction'
                    }}
                    right ={{
                        value: ballance,
                        legend: 'Wallets Amount'
                    }}
                />
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
                <LastTransactions transactions={data} />
                <BaseSummary header={{
                    title: 'Spending This Month',
                    button: {
                        children: <BiDotsHorizontalRounded />
                    }
                }} />
            </DashboardFooter>
            
        </>
)}
