import { Tag } from 'antd'

function TagNutrientLevel({ nutrient_levels }) {
  const getColorCategory = (level) => {
    switch (level) {
      case 'low':
        return {
          color: 'green', // '#058B49' || green
          text: 'Low',
        }
      case 'moderate':
        return {
          color: 'gold', // '#FBC801' || yellow
          text: 'Moderate',
        }
      case 'high':
        return {
          color: 'red', // '#EF3120' ||red
          text: 'High',
        }
      default:
        return {
          color: 'default', // '#484848' || grey
          text: '-',
        }
    }
  }

  return Object.entries(nutrient_levels).map(([type, level]) => {
    const { color, text } = getColorCategory(level)
    return (
      <Tag key={type} color={color}>
        <div className="text-base">
          {type.charAt(0).toUpperCase() + type.slice(1)}: {text}
        </div>
      </Tag>
    )
  })
}

export default TagNutrientLevel
