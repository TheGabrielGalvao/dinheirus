import {createServer, Model} from 'miragejs'
import { mockTransactions } from './data/transactions'

export const server = createServer({
  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [...mockTransactions]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return this.schema.create('transaction', data)
    })
  }
})