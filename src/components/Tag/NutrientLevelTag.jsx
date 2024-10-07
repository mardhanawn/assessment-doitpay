import { Tag } from 'antd'

function NutrientLevelTag({ type, level }) {
  const colorCategory = (level) => {
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

  const { color, text } = colorCategory(level)

  return (
    <Tag color={color}>
      <div className="text-base">
        {type.charAt(0).toUpperCase() + type.slice(1)}: {text}
      </div>
    </Tag>
  )
}

export default NutrientLevelTag
