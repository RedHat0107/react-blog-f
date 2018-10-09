import { Card, Pagination } from 'antd'
import QueueAnim from 'rc-queue-anim'
import React from 'react'
import { Link } from 'react-router-dom'
import { format } from '../../common'
import {connect} from 'react-redux'
import action from '../../store/actions/acticles'
import './style.less'

class Articles extends React.Component {
   
  onChange = (pageIndex, pageSize) => {
    this.props.RequestArticles({ pageIndex, pageSize })
  }
  onShowSizeChange = (pageIndex, pageSize) => {
    this.props.RequestArticles({ pageIndex, pageSize })  
  }
  componentDidMount() {
    this.props.RequestArticles({
      pageIndex: 1,
      pageSize: 5})
  }
  render() {
  
    const { articles }= this.props.articles
    const { pageIndex, pageSize } = this.props.articles.payload
    const total=this.props.info.ArticleNum
    return (
      <div>
        <QueueAnim
          animConfig={[
            { opacity: [1, 0], translateY: [0, 50] },
            { opacity: [1, 0], translateY: [0, -50] }
          ]}>
          {articles.map(item => (
            <Card
              key={item._id}
              bordered={false}
              hoverable={true}
              className="article"
              type="inner">
              <div>
                <h3>{item.title}</h3>
                <p className="tag">
                  <span>发表于：{format(item.create_at)}</span>
                  <span>标签：{item.tag && item.tag.title}</span>
                  <span>浏览：{item.access}</span>
                </p>
                <div className="abstract">{item.abstract}...</div>
                <Link to={`/article/${item._id}`}>
                  <span className="link">阅读全文 >></span>
                </Link>
              </div>
            </Card>
          ))}
        </QueueAnim>
        <QueueAnim className="Pagination" delay={1000}>
          <Pagination
            pageSizeOptions={['5','10','15','20']} 
            current={pageIndex}
            pageSize={pageSize}
            onChange={this.onChange}
            key="pagination"
            total= {total}
            showSizeChanger={true}
            onShowSizeChange={this.onShowSizeChange}
          />
        </QueueAnim>
      </div>
    )
  }
}
export default connect(state=>state, action)(Articles);