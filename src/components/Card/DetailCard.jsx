import { Card, Col, Image, Row } from 'antd'
import NOVATag from '../Tag/NOVATag'
import NutrientLevelTag from '../Tag/NutrientLevelTag'
import NutrimentsTag from '../Tag/NutrimentsTag'
import { formattingHtmltoString } from '../../utils/helper'

function DetailCard({ product }) {
  return (
    <Card className="border-2">
      <Row>
        <Col xs={24} sm={12} md={10} lg={6}>
          <Image width={200} src={product.image_url} />
        </Col>
        <Col xs={24} sm={12} md={14} lg={18}>
          <div className="text-3xl mb-5 font-semibold">{product.product_name}</div>
          <Row className="mb-2">
            <div className="text-base mr-3">Ingredients : </div>
            <div className="text-base text-wrap">
              {formattingHtmltoString(product.ingredients_text_with_allergens_en)}
            </div>
          </Row>
          <Row className="mb-2">
            <div className="text-base mr-3">NOVA groups tag : </div>
            <NOVATag type={product.nova_groups_tags[0]} />
          </Row>
          <Row className="mb-2">
            <div className="text-base mr-3">Nutrient level : </div>
            <Col>
              <Row gutter={[8, 8]}>
                <NutrientLevelTag nutrient_levels={product.nutrient_levels} />
              </Row>
            </Col>
          </Row>
          <Row className="mb-2">
            <div className="text-base mr-3">Nutriments : </div>
            <Col>
              <Row gutter={[8, 8]}>
                <NutrimentsTag nutriments={product.nutriments} />
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default DetailCard
