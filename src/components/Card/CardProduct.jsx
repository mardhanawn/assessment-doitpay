import { Card, Image } from 'antd'
import { Link } from 'react-router-dom'

function CardProduct({ id, key, product_name, image_url, allergens }) {
  return (
    <Card className="text-center" key={key} hoverable>
      <Link to={`/detail/${id}`}>
        <Image width="auto" height={200} src={image_url} preview={false} />
        <div className="text-lg font-semibold">{product_name || '-'}</div>
        <div className="text-base">{allergens || '-'}</div>
      </Link>
    </Card>
  )
}

export default CardProduct
