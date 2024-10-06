import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

function Pages404() {
  const navigate = useNavigate()
  return (
    <div className="p-5 content-center h-screen w-screen">
      <div className="text-3xl font-semibold">Oopss! 404 - Page Not Found.</div>
      <div className="text-xl mb-5 font-semibold">
        {`It seems like you've taken a wrong turn.`}
        <br /> Click the button below to go back to the dashboard
      </div>
      <Button type="primary" onClick={() => navigate('/dashboard')}>
        Go to Dashboard
      </Button>
    </div>
  )
}

export default Pages404
