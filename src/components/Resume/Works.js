import * as React from 'react'
const list = [
  {
    content:
      '(1)基于react框架的个人博客全栈系统,采用前后端分离(2)前端主要展示数据中的文章内容,归档内容以及说说  (3)后端管理系统可以对文章说说进行管理,添加和统计(4)用到的技术有:react react-redux react-router-dom  fetch antd等',
    title: 'react个人博客系统+后台管理',
    url: 'https://github.com/fxy5869571'
  },
  {
    content:
      '(1)一个基于VUE框架的用于记录日常开销的一个家庭资金管理系统,后端采用野狗数据库(2)包括每天的收入,支出,资金的来源以及买了什么东西以及注册登录验证功能(3)主要用到的技术有vue vuex router axios node等',
    title: 'VUE-全栈家庭资金管理系统',
    url: 'http://adm.qqzi.com/react'
  },
  {
    content:
      '(1)一个基于VUE框架以pizza为例的点餐系统(2)主要功能有:顾客可以点餐,查看加入购物车的食物,并实时计算购物和食物的总价格;管理员可以往系统里添加或修改数据库中内容(3)用到的主要技术: vue-cli3.0 vuex vue-router axios等',
    title: 'VUE-全栈点餐系统',
    url: 'https://pizza-order-0925.herokuapp.com/'
  },
  {
    content:
      '(1)一个基于node的课程管理系统(2)主要功能有根据登录的不同的账号对此账号下的课程进行添加,编辑,删除等操作(3)用到的主要的技术:node handlebars模板引擎 method-override connect-flash等',
    title: 'node课程管理系统',
    url: 'https://nodeapp180923.herokuapp.com/'
  }
]
const Works = () => {
  return (
    <div className="works">
      <p className="title">Sample reels</p>
      <div className="cards">
        {list.map((item, index) => (
          <div key={index} className="item">
            <span className="work-title">{item.title}</span>
            <p>{item.content}</p>
            <a className="work-link" href={item.url} target="view_window">
              网站地址
            </a>
          </div>
        ))}
      </div>
      <p>
        <a
          href="https://github.com/fxy5869571"
          style={{
            color: '#fff',
            cursor: 'pointer'
          }}>
        </a>
      </p>
    </div>
  )
}

export default Works