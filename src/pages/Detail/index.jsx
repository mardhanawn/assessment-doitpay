import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import ButtonBack from '../../components/Button/ButtonBack'
import CardDetail from '../../components/Card/CardDetail'
import CardNutriscore from '../../components/Card/CardNutriscore'
import CardNutriscoreData from '../../components/Card/CardNutriscoreData'
import SpinnerPage from '../../components/Spinner/SpinnerPage'
import { product_detail } from '../../services/api/foodfacts'
import Pages404 from '../404'

function Detail() {
  const { id } = useParams()
  const { isLoading, data, error } = useQuery(['product_detail', id], () => product_detail(id), {
    staleTime: Infinity,
    cacheTime: Infinity,
    onError: (error) => console.log(error),
  })
  const { product } = data || {}

  if (isLoading) return <SpinnerPage />

  if (error) {
    return <Pages404 />
  }

  return (
    <div className="p-5 sm:px-10 md:px-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center text-3xl font-bold">
          <ButtonBack path="dashboard" />
          {`Detail Product : ${product.product_name}`}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 py-5">
        <CardDetail product={product} />
        <CardNutriscore grade={product.nutriscore_grade} score={product.nutriscore_score} />
        <CardNutriscoreData data={product.nutriscore_data} />
      </div>
    </div>
  )
}

export default Detail
