import { notification } from 'antd'
import { useQuery } from 'react-query'
import ButtonLogout from '../../components/Button/ButtonLogout'
import ProductCard from '../../components/Card/ProductCard'
import PageSpinner from '../../components/Spinner/PageSpinner'
import { lists_food } from '../../services/api/foodfacts'
import openNotification from '../../utils/notification'

function Dashboard() {
  const { isLoading, data } = useQuery('lists_food', lists_food, {
    staleTime: Infinity,
    cacheTime: Infinity,
    onError: () => {
      openNotification(api.open, {
        message: `Oopss! Something went wrong`,
        description: 'Please try again later',
      })
    },
  })

  const [api, contextHolder] = notification.useNotification()

  return (
    <div className="p-5">
      {contextHolder}
      <div className="flex items-center justify-between">
        <div className="text-3xl underline font-semibold">Dashboard</div>
        <ButtonLogout />
      </div>
      <div className="my-5 mb-5">
        <div>Username: {localStorage.getItem('username')}</div>
        {isLoading && <PageSpinner />}
        {
          <div>
            <div className="text-base">Product Lists</div>
            <div className="text-base">{`Page ${data?.page}`}</div>
            <div className="text-base">{`Page Count ${data?.page_count}`}</div>
            <div className="text-base">{`Page Size ${data?.page_size}`}</div>
          </div>
        }
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-5">
          {data?.products.map((product) => {
            return (
              <ProductCard
                id={product.id}
                key={product.id}
                product_name={product.product_name}
                image_url={product.image_url}
                allergens={product.allergens_from_ingredients}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
