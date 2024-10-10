import { Form, notification } from 'antd'
import ButtonBack from '../../components/Button/ButtonBack'
import openNotification from '../../utils/notification'
import FormContactUs from './Form'

function ContactUs() {
  const [form] = Form.useForm()
  const [api, contextHolder] = notification.useNotification()

  const onSubmit = (value) => {
    form.resetFields()
    openNotification(api.open, {
      message: `Thank you ${value.name}!`,
      description: 'Please wait for our response. We will contact you as soon as possible.',
    })
  }

  return (
    <div className="p-5 sm:px-10 md:px-10">
      {contextHolder}
      <div className="flex items-center justify-between">
        <div className="flex items-center text-3xl font-bold">
          <ButtonBack previous />
          Contact Us
        </div>
      </div>
      <div className="my-5">
        <div className="my-5 text-lg">
          Help us make food transparency the norm! <br />
          {`We're all ears! Let us know how we can make this app even better for you. Developed by
          Ardhana Wahyu, we'll keep improving based on your feedback.`}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          <FormContactUs form={form} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  )
}

export default ContactUs
