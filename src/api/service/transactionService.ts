import { ITransaction } from './../../interfaces/ITransaction';
import api from "../api"

export const getAll = async () => {
    try {
        const response: ITransaction[] = await api.get('transactions')
          
        return response
      }
      catch {
        return []
      }
}

export const responseFormatter = (response: Promise<ITransaction>) => {
    // console.log(response)
    return response
}