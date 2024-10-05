import { Button } from 'antd'
import { useQuery } from 'react-query'
import BaseCard from '../../components/Card'
import Spinner from '../../components/Spinner'
import { lists_food } from '../../services/api/foodfacts'

function Dashboard() {
  const { isLoading, data } = useQuery('lists_food', lists_food, {
    onSuccess: (data) => {
      console.log('data dashboard return ON SUCCESS', data)
    },
  })

  return (
    <div className="h-screen w-screen p-5">
      <div className="text-3xl underline font-semibold">Dashboard</div>
      <Button onClick={() => localStorage.clear()}>Logout</Button>
      <div className="mt-5">
        <div>Username: {localStorage.getItem('username')}</div>
        {isLoading && <Spinner />}
        {
          <div>
            <div className="text-base">Product Lists</div>
            <div className="text-base">{`Page ${data?.page}`}</div>
            <div className="text-base">{`Page Count ${data?.page_count}`}</div>
            <div className="text-base">{`Page Size ${data?.page_size}`}</div>
          </div>
        }
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-5">
          {data?.products.map((product) => {
            return (
              <BaseCard
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
