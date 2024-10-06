import { Button, Form, Input, notification, Space } from 'antd'
import ButtonLogout from '../../components/Button/ButtonLogout'
import openNotification from '../../utils/notification'

function ContactUs() {
  const { TextArea } = Input
  const [form] = Form.useForm()
  const [api, contextHolder] = notification.useNotification()

  const onSubmit = (value) => {
    openNotification(api.open, {
      message: `Thank you ${value.name}!`,
      description: 'Please wait for our response. We will contact you as soon as possible.',
    })
  }

  return (
    <div className="p-5">
      {contextHolder}
      <div className="flex items-center justify-between">
        <div className="text-3xl underline font-semibold">Contact Us</div>
        <ButtonLogout />
      </div>
      <div className="my-5">
        <div className="text-lg my-5">
          Help us make food transparency the norm! <br />
          {`We're all ears! Let us know how we can make this app even better for you. Developed by
          Ardhana Wahyu, we'll keep improving based on your feedback.`}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          <Form
            form={form}
            layout="vertical"
            onFinish={(value) => onSubmit(value)}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Name is required',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Email is required',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Message" name="message">
              <TextArea rows={4} placeholder="" />
            </Form.Item>
            <Space>
              <Button type="default" htmlType="reset">
                Reset
              </Button>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Space>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
