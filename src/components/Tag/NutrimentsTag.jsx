import { Tag } from 'antd'
import { formattingCharUnderscoreWithSpace } from '../../utils/helper'

function NutrimentsTag({ nutriments }) {
  return Object.entries(nutriments).map(([type, value]) => {
    return (
      <Tag key={type} color="default">
        <div className="text-wrap text-base">
          {formattingCharUnderscoreWithSpace(type)}: {value}
        </div>
      </Tag>
    )
  })
}

export default NutrimentsTag
