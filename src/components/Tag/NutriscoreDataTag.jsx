import { Tag } from 'antd'
import { formattingCharUnderscoreWithSpace } from '../../utils/helper'

function NutriscoreDataTag({ type, value }) {
  return (
    <Tag color="default">
      <div className="text-base text-wrap">
        {formattingCharUnderscoreWithSpace(type)}: {value}
      </div>
    </Tag>
  )
}

export default NutriscoreDataTag
