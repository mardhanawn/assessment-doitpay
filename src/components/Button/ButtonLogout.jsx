import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

function ButtonLogout({ className }) {
  const navigate = useNavigate()
  return (
    <Button
      className={className}
      onClick={() => {
        localStorage.clear()
        navigate('/')
      }}
    >
      Logout
    </Button>
  )
}

export default ButtonLogout
