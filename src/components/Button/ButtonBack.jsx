import { HiChevronLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

function ButtonBack({ path, previous }) {
  const newPath = previous ? -1 : `/${path}`
  const navigate = useNavigate()
  return (
    <div className="text-3xl">
      <HiChevronLeft className="cursor-pointer" onClick={() => navigate(newPath)} />
    </div>
  )
}

export default ButtonBack
