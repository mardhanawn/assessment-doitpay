import { Button, Form, Input } from 'antd'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  const onSubmit = ({ username }) => {
    if (username.length > 5 && username.length <= 50) {
      localStorage.setItem('username', username)
      navigate('/dashboard')
    }
  }

  return (
    <div className="inline-grid h-screen w-screen content-center items-center justify-center">
      <div className="text-3xl font-semibold underline">Log In to Food Facts</div>
      <div className="mt-5 max-w-[300px]">
        <Form layout="vertical" onFinish={(value) => onSubmit(value)} autoComplete="off">
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Username is required',
              },
              {
                min: 5,
                message: 'Username must be at least 5 characters',
              },
              {
                max: 50,
                message: 'Username must be at most 50 characters',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Button block type="primary" htmlType="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Login
