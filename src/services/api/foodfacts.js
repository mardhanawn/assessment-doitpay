import baseAPI from '../axios/baseAPI'

export async function lists_food({ page, pageSize }) {
  return baseAPI.get(`/search?page=${page}&page_size=${pageSize}`).then((response) => {
    return response.data
  })
}

export async function product_detail(id) {
  return baseAPI.get(`/product/${id}`).then((response) => {
    return response.data
  })
}
