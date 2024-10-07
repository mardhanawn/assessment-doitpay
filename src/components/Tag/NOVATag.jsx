import { Tag } from 'antd'
import { removePrefixLanguage } from '../../utils/helper'

function NOVATag({ type }) {
  const colorCategory = (type) => {
    switch (type) {
      case '1-unprocessed-or-minimally-processed-foods':
        return {
          color: 'green', // '#058B49' || green
          text: '1-unprocessed-or-minimally-processed-foods',
        }
      case '2-processed-culinary-ingredients':
        return {
          color: 'gold', // '#FBC801' || yellow
          text: '2-processed-culinary-ingredients',
        }
      case '3-processed-foods':
        return {
          color: 'orange', // '#F4730E' || orange
          text: '3-processed-foods',
        }
      case '4-ultra-processed-food-and-drink-products':
        return {
          color: 'red', // '#EF3120' || red
          text: '4-ultra-processed-food-and-drink-products',
        }
      default:
        return {
          color: 'default', // '#484848' || grey
          text: 'unknown',
        }
    }
  }

  const { color, text } = colorCategory(removePrefixLanguage(type))

  return (
    <Tag color={color}>
      <div className="text-base text-wrap">{text}</div>
    </Tag>
  )
}

export default NOVATag
