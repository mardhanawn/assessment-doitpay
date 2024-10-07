import { notification } from 'antd'
import { HiChevronLeft } from 'react-icons/hi'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import ButtonLogout from '../../components/Button/ButtonLogout'
import DetailCard from '../../components/Card/DetailCard'
import NutriscoreCard from '../../components/Card/NutriscoreCard'
import NutriscoreDataCard from '../../components/Card/NutriscoreDataCard'
import PageSpinner from '../../components/Spinner/PageSpinner'
import { product_detail } from '../../services/api/foodfacts'
import openNotification from '../../utils/notification'

function Detail() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { isLoading, data: productData } = useQuery(
    ['product_detail', id],
    () => product_detail(id),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      onError: () => {
        openNotification(api.open, {
          message: `Oopss! Something went wrong`,
          description: 'Please try again later',
        })
      },
    },
  )
  const { product } = productData || {}

  const [api, contextHolder] = notification.useNotification()

  if (isLoading) return <PageSpinner />

  return (
    <div className="py-5 md:px-20 sm:px-10">
      {contextHolder}
      <div className="flex items-center justify-between">
        <div className="flex text-3xl font-bold">
          <HiChevronLeft
            className="size-10 cursor-pointer"
            onClick={() => navigate('/dashboard')}
          />
          {`Detail Product : ${product.product_name}`}
        </div>
        <ButtonLogout />
      </div>
      <div className="grid gap-y-5 py-5">
        <DetailCard product={product} />
        <NutriscoreCard grade={product.nutriscore_grade} score={product.nutriscore_score} />
        <NutriscoreDataCard data={product.nutriscore_data} />
      </div>
    </div>
  )
}

export default Detail
