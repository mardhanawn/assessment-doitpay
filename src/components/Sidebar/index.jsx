import { useState } from 'react'
import { Menu, Drawer, Button } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import ButtonLogout from '../Button/ButtonLogout'

const Sidebar = () => {
  const [visible, setVisible] = useState(false)
  const username = localStorage.getItem('username')

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  const menuItem = [
    {
      path: '/dashboard',
      title: 'Dashboard',
    },
    {
      path: '/contact-us',
      title: 'Contact Us',
    },
  ]

  return (
    <>
      <Drawer
        title={`Food Fact - Hello ${username}`}
        placement="left"
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        <Menu mode="inline">
          {menuItem.map(({ path, title }, index) => (
            <Menu.Item key={index}>
              <Link to={path}>{title}</Link>
            </Menu.Item>
          ))}
        </Menu>
        <ButtonLogout className="ml-7" />
      </Drawer>
      <Button
        className="menu-button fixed left-5 top-5 z-50"
        type="primary"
        icon={<MenuOutlined />}
        onClick={showDrawer}
      />
    </>
  )
}

export default Sidebar
