import { ITransaction } from './../../../interfaces/ITransaction';


export interface ITransactionState {
    data?: ITransaction[]
    loading?: boolean
    error?: boolean
}