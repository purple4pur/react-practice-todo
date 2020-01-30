import axios from 'axios'

const ajax = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getTodos = () => (
  ajax.get('/todos')
)
