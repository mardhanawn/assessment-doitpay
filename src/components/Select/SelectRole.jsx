import { Select } from 'antd'

const dummyRole = [
  {
    key: 'FE',
    value: 'Frontend Developer',
  },
  {
    key: 'BE',
    value: 'Backend Developer',
  },
  {
    key: 'MBD',
    value: 'Mobile Developer',
  },
  {
    key: 'iOSD',
    value: 'iOS Developer',
  },
  {
    key: 'UIUXD',
    value: 'UI/UX Designer',
  },
  {
    key: 'UXR',
    value: 'UX Researcher',
  },
]

function SelectRole() {
  return (
    <Select
      showSearch
      placeholder="Select a job role"
      filterOption={(input, option) =>
        (option?.value ?? '').toLowerCase().includes(input.toLowerCase())
      }
      options={dummyRole}
    />
  )
}

export default SelectRole
