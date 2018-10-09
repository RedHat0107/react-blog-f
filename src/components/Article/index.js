import { Card } from 'antd'
import React from 'react'
import Highlight from 'react-highlight'
import { format } from '../../common'
import {connect} from 'react-redux'
import actions from '../../store/actions/article'
import './highlight.less'
import './style.less'

class Article extends React.Component {
    componentDidMount() {
      this.props.RequestArticle(this.props.match.params.Id);
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.Id !== prevProps.match.params.Id) {
      //this.props.fetchArticle(this.props.match.params.Id)
    }
  }
  addCode = (content) => {
    return content
      .replace(new RegExp('<pre>', 'g'), '<pre><code>')
      .replace(new RegExp('</pre>', 'g'), '</code></pre>')
  }
  render() {
    const {
      title,
      create_at,
      access=10,
      type,
      content = '',
      tag
    } = this.props.article
    return (
      <div className="article">
        <Card hoverable={true} bordered={false}>
          <div>
            <h3>{title}</h3>
            <div className="tag">
              <span>发表于：{format(create_at)}</span>
              <span>分类：{type}</span>
              <span>标签：{tag.title}</span>
              <span>浏览：{access}</span>
          </div>
          </div>
          <Highlight innerHTML={true} className="javascript">
            {this.addCode(content)}
          </Highlight> 
        </Card>
      </div>
    )
  }
}

export default connect(state=>state, actions)(Article) 