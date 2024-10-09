import { Pagination } from 'antd'
import { useState } from 'react'
import { useQuery } from 'react-query'
import CardProduct from '../../components/Card/CardProduct'
import SearchProductList from '../../components/Search/SearchProductList'
import Spinner from '../../components/Spinner'
import { list_products } from '../../services/api/foodfacts'

function Dashboard() {
  const [search, setSearch] = useState('')
  const paginationDashboard = localStorage.getItem('paginationDashboard')
  const [page, setPage] = useState(JSON.parse(paginationDashboard)?.page || 1)
  const [pageSize, setPageSize] = useState(JSON.parse(paginationDashboard)?.pageSize || 20)

  const paramsList = {
    ...(search && { categories_tags: search }),
    page,
    pageSize,
  }

  const { isLoading, data } = useQuery(
    ['list_products', paramsList],
    () => list_products(paramsList),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      onError: (error) => console.log(error),
    },
  )

  const onSearch = (value) => {
    setSearch(value)
    setPage(1)
  }

  const handlePageChange = (page, pageSize) => {
    setPage(page)
    setPageSize(pageSize)
    localStorage.setItem('paginationDashboard', JSON.stringify({ page, pageSize }))
  }

  return (
    <div className="p-5 sm:px-10 md:px-10">
      <div className="text-3xl font-bold">Dashboard</div>
      <div className="my-5 mb-5">
        <SearchProductList onSearch={onSearch} />
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div className="my-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {data?.products.map((product) => {
                return (
                  <CardProduct
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
              onChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default Dashboard
