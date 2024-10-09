import { Layout as AntLayout } from 'antd'
import Sidebar from '../components/Sidebar'

const { Content } = AntLayout

const Layout = ({ children }) => {
  return (
    <AntLayout className="min-h-screen">
      <Sidebar />
      <AntLayout>
        <Content className="m-4 overflow-auto">{children}</Content>
      </AntLayout>
    </AntLayout>
  )
}

export default Layout
