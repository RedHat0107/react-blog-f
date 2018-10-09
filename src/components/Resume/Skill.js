import * as React from 'react'
const outCircle = [
  { label: 'fetch', color: 'rgba(121,100,102,0.8)' },
  { label: 'vue', color: 'rgba(76,157,160,0.8)' },
  { label: 'less', color: 'rgba(66,66,66,0.8)' },
  { label: 'css', color: 'rgba(117,148,179,0.8)' },
  { label: 'js', color: 'rgba(71,83,94,0.8)' },
  { label: 'node', color: 'rgba(147,147,189,0.8)' },
  { label: 'webpack', color: 'rgba(121,100,102,0.8)' },
  { label: 'axios', color: 'rgba(121,100,102,0.8)' }
]
const innerCircle = [
  { label: 'react', color: 'rgba(179,164,140,0.8)' },
  { label: 'redux', color: 'rgba(171,209,220,0.8)' },
  { label: 'vue', color: 'rgba(238,215,163,0.8)' },
  { label: 'antd', color: 'rgba(207,184,178,0.8)' }
]
const Skill = () => (
  <div className="skill">
    <p className="title">Skills</p>
    <div className="skills">
      <div className="skill-circle">
        <div className="out-circle">
          {outCircle.map((item, index) => (
            <div
              key={index}
              className={`circle-item circle-item${index}`}
              style={{ backgroundColor: item.color }}>
              {item.label}
            </div>
          ))}
        </div>
        <div className="inner-circle">
          {innerCircle.map((item, index) => (
            <div
              key={index}
              className={`innerCircle-item innerCircle-item${index}`}
              style={{ backgroundColor: item.color }}>
              {item.label}
            </div>
          ))}
        </div>
      </div>
      <div className="skill-intru">
        <p>1. 可以熟练使用html5和css构建各种静态页面</p>
        <p>2. 可以熟练使用element和antd ui工具来构建页面</p>
        <p>3. 可以熟练使用原生js封装一些工具库,实现代码的"高内聚,低耦合"</p>
        <p>4. 了解Jquery实现原理,可以熟练使用Jquery实现功能开发</p>
        <p>5. 可以熟练使用vue框架以及vuex组合来完成项目的开发</p>
        <p>6. 了解react框架以及redux或react-redux原理</p>
        <p>7. 会使用react router 组合以及saga中间件配合来完成项目的开发</p>
        <p>8. 会用node express框架书写后端接口,与前端配合</p>
        <p>9. 可以熟练使用mongoose数据库来对后端数据库进行操作</p>
      </div>
    </div>
  </div>
)

export default Skill