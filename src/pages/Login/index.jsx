import { Button, Form, Input } from 'antd'

function Login() {
  const onSubmit = (value) => {
    localStorage.setItem('username', value.username)
  }

  return (
    <div className="content-center h-[100vh] w-[100vw] inline-grid items-center justify-center">
      <div className="text-3xl">Log In to Food Facts</div>
      <div className="mt-5 max-w-[300px]">
        <Form
          wrapperCol={{
            span: 24,
          }}
          layout="vertical"
          onFinish={(value) => onSubmit(value)}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Username is required',
              },
              {
                min: 3,
                message: 'Username must be at least 3 characters',
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
