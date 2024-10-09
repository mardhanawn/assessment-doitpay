import { Tag } from 'antd'
import { formattingCharUnderscoreWithSpace } from '../../utils/helper'

function TagNutriscoreData({ type, value }) {
  return (
    <Tag color="default">
      <div className="text-wrap text-base">
        {formattingCharUnderscoreWithSpace(type)}: {value}
      </div>
    </Tag>
  )
}

export default TagNutriscoreData
