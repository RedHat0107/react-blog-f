import { Card, Tag, Tooltip } from 'antd'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { headerImg } from '../../../common'
import './style.less'
import { connect } from 'react-redux'
import action from '../../../store/actions/info'

class Sidebar extends React.Component {  

  componentDidMount(){
    this.props.IRequestInfo();
  }
  render() {
    const { Meta } = Card;
    let { tag,
      present,
      totalAccess,
      ArticleNum,
      name,
    } = this.props.info;
    const { articles }=this.props.articles
    return (<div className="Sidebar">
    <Card hoverable={true} className="card" cover={<img src='http://life.southmoney.com/tuwen/UploadFiles_6871/201810/20181002231813657.jpg' />}>
      <div className="authorImg">
        <Link to='/admin'><img src='http://life.southmoney.com/tuwen/UploadFiles_6871/201810/20181002231813657.jpg' alt="" /></Link>
      </div>
      <Meta
        title={
          <div>
            <span className="card-title">{name}</span>
          </div>
        }
        description={
          <div>
            <p className="abstract">{present}</p>
            <p className="abstract">
              <span>文章 : {ArticleNum}</span>
              <span style={{ marginRight: 10, marginLeft: 10 }}>|</span>
              <span>访问 :{totalAccess}</span>
            </p>
          </div>
        }
      />
    </Card>
    <Card title="FOLLOW ME" hoverable={true} className="card">
      <div className="icon-git-wrp">
        <div className="call">
          <Tooltip title="个人简历">
            <Link to="/resume">&#xe653;</Link>
          </Tooltip>
          <Tooltip title="github">
            <a href="https://github.com/RedHat0107" target="view_window">
            &#xe6ad;
            </a>
            </Tooltip>
            <Tooltip title="18500290107">
            <a>&#xe6d5;</a>
          </Tooltip>
          <Tooltip
            title='18500290107'>
            <a>&#xe6e6;</a>
          </Tooltip>
        </div>
      </div>
    </Card>
    <Card title="云标签" hoverable={true} className="card">
    {tag &&
          tag.map((item, index) => (
        <Tag
          key={item.title}
          color={item.color}
          className="tag"
          onClick={() =>
            this.props.fetchArticle({
              pageIndex: 1,
              pageSize: 10,
              tagTitle: item.title
            })
          }
          >
          <Link to="/"> {item.title}</Link>
        </Tag>
      ))}

    </Card>
    <Card title="最近5篇文章列表" hoverable={true} className="card">
      <ul>
       {articles &&
          articles.map((item, index) => (
            index<5?
  <li key={index} className="tag">
    <Link to={`/article/${item._id}`}>{item.title}</Link>
  </li>:null
))}
      </ul>
    </Card>
  </div>)
  }
}
export default connect(state=>state,action)(Sidebar);

