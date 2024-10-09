import { Input } from 'antd'
import { debounce } from 'lodash'
import { useCallback } from 'react'

const { Search } = Input

function SearchProductList({ onSearch }) {
  const debouncedSearch = useCallback(
    debounce((value) => {
      onSearch(value)
    }, 1000),
    [onSearch],
  )

  const handleInputChange = (event) => {
    debouncedSearch(event.target.value)
  }

  return (
    <Search
      placeholder="Search Product"
      allowClear
      size="large"
      onChange={handleInputChange}
      onSearch={onSearch}
    />
  )
}

export default SearchProductList
