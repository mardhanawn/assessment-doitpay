import { Tag } from 'antd'
import { formattingCharUnderscoreWithSpace } from '../../utils/helper'

function NutrimentsTag({ type, value }) {
  return (
    <Tag color="default">
      <div className="text-base">
        {formattingCharUnderscoreWithSpace(type)}: {value}
      </div>
    </Tag>
  )
}

export default NutrimentsTag
