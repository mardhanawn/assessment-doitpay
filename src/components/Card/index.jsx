import { Card, Image } from 'antd'

const BaseCard = ({ key, product_name, image_url, allergens }) => {
  const { Meta } = Card

  return (
    <Card className="text-center" key={key} hoverable>
      <Image width={200} height={200} src={image_url} preview={false} />
      <Meta title={product_name} description={allergens} />
    </Card>
  )
}

export default BaseCard
