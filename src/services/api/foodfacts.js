import baseAPI from '../axios/baseAPI'

export async function lists_food() {
  return baseAPI.get(`/search`).then((response) => {
    return response.data
  })
}

export async function product_detail(id) {
  return baseAPI.get(`/product/${id}`).then((response) => {
    return response.data
  })
}
