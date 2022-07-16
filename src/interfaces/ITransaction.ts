import { IContact } from './IContact';
import { ETransactionType } from './../util/constants/ETransactionType';
export interface ITransaction {
    Id: number
    Description: string
    Type: ETransactionType
    Value: number
    Contact: string
    Category: string
}

export interface ICategory {
    Id: number
    Name: string
}