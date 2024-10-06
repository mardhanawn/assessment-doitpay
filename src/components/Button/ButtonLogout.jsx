import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

function ButtonLogout() {
  const navigate = useNavigate()
  return (
    <Button
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
