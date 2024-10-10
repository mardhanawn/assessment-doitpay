import axios from 'axios'

const baseAPI = axios.create({
  baseURL: 'https://world.openfoodfacts.org/api/v2',
})

export default baseAPI
