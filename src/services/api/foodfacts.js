import baseAPI from '../axios/baseAPI'

export async function lists_food() {
  return baseAPI.get(`/search`).then((response) => {
    return response.data
  })
}
