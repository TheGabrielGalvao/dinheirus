import { ITransaction } from '../../interfaces/ITransaction';
import { ETransactionType } from '../../util/constants/ETransactionType';

export const mockTransactions: ITransaction[] = [
    {
        Id: 1,
        Description: 'Recebido de',
        Type: ETransactionType.INCOMING,
        Value: 50,
        Category: 'Personal Payment',
        Contact: 'John'
    },
    {
        Id: 2,
        Description: 'Transfer to',
        Type: ETransactionType.WITHDRAW,
        Value: -80,
        Category: 'Personal Payment',
        Contact: 'Joe'
    },
];