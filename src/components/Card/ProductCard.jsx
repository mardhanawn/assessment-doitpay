import { Card, Image } from 'antd'
import { Link } from 'react-router-dom'

const { Meta } = Card

function ProductCard({ id, key, product_name, image_url, allergens }) {
  return (
    <Card className="text-center" key={key} hoverable>
      <Link to={`/detail/${id}`}>
        <Image width={200} height={200} src={image_url} preview={false} />
        <Meta title={product_name} description={allergens} />
      </Link>
    </Card>
  )
}

export default ProductCard
