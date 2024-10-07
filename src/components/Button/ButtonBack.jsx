import { HiChevronLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

function ButtonBack({ path, previous }) {
  const newPath = previous ? -1 : `/${path}`
  const navigate = useNavigate()
  return <HiChevronLeft className="size-10 cursor-pointer" onClick={() => navigate(newPath)} />
}

export default ButtonBack
