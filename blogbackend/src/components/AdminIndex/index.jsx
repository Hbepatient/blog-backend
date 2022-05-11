import React, { useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import AddArticle from '../../pages/addArticle'
import { Layout, Menu, Breadcrumb, Button, message} from 'antd';
import {
  DesktopOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useCookies } from 'react-cookie';
import { AuthConsumer } from '../../utils/Auth';
import 'antd/dist/antd.less';

const { Content, Footer, Sider } = Layout;
const logoStyle = {  
  height: '32px',
  margin: '16px', 
  background: 'rgba(255, 255, 255, 0.3)'
}
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(<Link to='/index'>工作台</Link>, '1', <DesktopOutlined />),
  getItem(<Link to='/index/addArticle'>文章管理</Link>, 'sub1', <UserOutlined />, [
    getItem(<Link to='/index/addArticle'>添加文章</Link>, '3'),
    getItem('文章列表', '4'),
  ]),
];

const AdminIndex  = ()=>{
  const { logout } = AuthConsumer()
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false)
  const [, , removeCookie] = useCookies(['token'])

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const onLogout = ()=>{
    logout()
    removeCookie('token')
    message.success('已退出！', 1, navigate('/login'))
  };

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" style={logoStyle}/>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>后台管理系统</Breadcrumb.Item>
            <Breadcrumb.Item>工作台</Breadcrumb.Item>
          </Breadcrumb>
          <Button type='primary' onClick={onLogout}>退出</Button>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Routes>
              <Route path='/addArticle' element={<AddArticle/>} />
            </Routes>
            
          </div>
          
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          博客后台管理系统
        </Footer>
      </Layout>
    </Layout>
  );
}

export default AdminIndex;