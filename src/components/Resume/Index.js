import * as React from 'react'

const Index = () => (
  <div className="index" key="index">
    <img
      className="header-img"
      src="http://life.southmoney.com/tuwen/UploadFiles_6871/201810/20181002231813657.jpg"
      //src="http://pic40.photophoto.cn/20160930/0018090541038273_b.jpg"
      alt="header-img"
      key="img"
    />
    <p className="title" key="title">
      心想到，话说到，事做到，尽己所能，高调做事，低调做人。
    </p>
    <div className="split" key="split" />
    <p key="name">我叫王璐</p>
    <p key="work">一名前端开发爱好者</p>
    <p key="emil">邮箱:1278904554@qq.com</p>
    <p key="tel">电话:18500290107</p>
  </div>
)

export default Index