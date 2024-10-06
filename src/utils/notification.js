function openNotification(api, { message, description }) {
  api({
    message,
    description,
    duration: 3,
  })
}

export default openNotification
