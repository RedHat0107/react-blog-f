import { Tooltip } from 'antd'
import * as React from 'react'
const CallMe = () => (
  <div className="call-me">
    <p className="title">Contact Me</p>
    <div className="tag">
      <span>写代码</span>
      <span>找灵感</span>
      <span>逐梦想</span>
      <span>向未来</span>
    </div>
    <p>博观而约取，厚积而薄发</p>
    <p>带上我吧，一起去看更美好的世界</p>
    <div className="call">
      <Tooltip title="github">
        <a href="https://github.com/RedHat0107">&#xe6ad;</a>
      </Tooltip>
      <Tooltip
        title='18500290107'>
        <a>&#xe6e6;</a>
      </Tooltip>
      <Tooltip title="1278904554@qq.com">
        <a>&#xe606;</a>
      </Tooltip>
      <Tooltip title="18500290107">
        <a>&#xe6d5;</a>
      </Tooltip>
    </div>
    <div className="footer">
      <div className="item">All Rights Reserved</div>
    </div>
  </div>
)

export default CallMe
