import { Button, Form, Input, Space } from 'antd'
import SelectRole from '../../components/Select/SelectRole'

const { TextArea } = Input

function FormContactUs({ form, onSubmit }) {
  return (
    <Form form={form} layout="vertical" onFinish={(value) => onSubmit(value)} autoComplete="off">
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
      <Form.Item label="Role Position" name="rolePosition">
        <SelectRole />
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
  )
}

export default FormContactUs
