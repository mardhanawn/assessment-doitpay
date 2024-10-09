import baseAPI from '../axios/baseAPI'

export async function lists_food(params) {
  return baseAPI.get(`/search`, { params }).then((response) => {
    return response.data
  })
}

export async function product_detail(id) {
  return baseAPI.get(`/product/${id}`).then((response) => {
    return response.data
  })
}
