import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import ButtonBack from '../../components/Button/ButtonBack'
import DetailCard from '../../components/Card/DetailCard'
import NutriscoreCard from '../../components/Card/NutriscoreCard'
import NutriscoreDataCard from '../../components/Card/NutriscoreDataCard'
import PageSpinner from '../../components/Spinner/PageSpinner'
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

  if (isLoading) return <PageSpinner />

  if (error) {
    return <Pages404 />
  }

  return (
    <div className="p-5 md:px-10 sm:px-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center text-3xl font-bold">
          <ButtonBack path="dashboard" />
          {`Detail Product : ${product.product_name}`}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 py-5">
        <DetailCard product={product} />
        <NutriscoreCard grade={product.nutriscore_grade} score={product.nutriscore_score} />
        <NutriscoreDataCard data={product.nutriscore_data} />
      </div>
    </div>
  )
}

export default Detail
