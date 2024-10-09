import { Tag } from 'antd'

function TagNutriscore({ grade }) {
  const getColorCategory = (grade) => {
    switch (grade) {
      case 'a':
        return {
          color: 'green', // '#058B49' || green
          text: grade,
        }
      case 'b':
        return {
          color: 'lime', // '#74C928' || light green
          text: grade,
        }
      case 'c':
        return {
          color: 'yellow', // '#FBC801' || yellow
          text: grade,
        }
      case 'd':
        return {
          color: 'orange', // '#F4730E' || orange
          text: grade,
        }
      case 'e':
        return {
          color: 'red', // '#Ef3120' || red
          text: grade,
        }
      case 'unknown':
        return {
          color: 'default', // '#484848' || grey
          text: '-',
        }
    }
  }

  const { color, text } = getColorCategory(grade) || {}

  return (
    <Tag color={color}>
      <div className="text-3xl font-semibold">{text?.toUpperCase()}</div>
    </Tag>
  )
}

export default TagNutriscore
