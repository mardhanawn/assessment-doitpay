import { Card, Col, Row } from 'antd'
import NutriscoreDataTag from '../Tag/NutriscoreDataTag'

function NutriscoreDataCard({ data }) {
  return (
    <Card className="border-2">
      <div className="text-3xl mb-5 font-semibold">Nutriscore Data</div>
      <Row>
        <Col>
          <Row gutter={[8, 8]}>
            {Object.entries(data).map(([type, value]) => (
              <NutriscoreDataTag key={type} type={type} value={value} />
            ))}
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default NutriscoreDataCard
