import React from 'react'
import { Layout, Icon } from 'antd'
import GlobalMenu from './components/menu'
import './default.css'
const { Header, Sider, Content } = Layout
class GlobalLayout extends React.Component {
  state = {
    collapsed: false,
    menuList: [{
      name: '书签管理',
      icon: 'pie-chart',
      key: '1',
      children: [{
        name: 'Vue',
        key: '1-1'
      }, {
        name: 'React',
        key: '1-2'
      }]
    }, {
      name: '其他管理',
      icon: 'pie-chart',
      key: '2',
    }]
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout id="components-layout-demo-custom-trigger">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" >{!this.state.collapsed ? '书签管理系统' : '书签'}</div>
          <GlobalMenu/>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default GlobalLayout