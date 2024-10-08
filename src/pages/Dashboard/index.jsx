import { notification, Pagination } from 'antd'
import { useState } from 'react'
import { useQuery } from 'react-query'
import ProductCard from '../../components/Card/ProductCard'
import Spinner from '../../components/Spinner'
import { lists_food } from '../../services/api/foodfacts'
import openNotification from '../../utils/notification'

function Dashboard() {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(20)

  const { isLoading, data } = useQuery(
    ['lists_food', { page, pageSize }],
    () => lists_food({ page, pageSize }),
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

  const [api, contextHolder] = notification.useNotification()

  const onShowSizeChange = (current, pageSize) => {
    setPage(current)
    setPageSize(pageSize)
  }

  return (
    <div className="p-5 md:px-10 sm:px-10">
      {contextHolder}
      <div className="text-3xl font-bold">Dashboard</div>
      <div className="my-5 mb-5">
        <div>Username: {localStorage.getItem('username')}</div>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
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
            <Pagination
              align="center"
              current={page}
              pageSize={pageSize}
              total={data?.count}
              onChange={onShowSizeChange}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default Dashboard
