import { Pagination, Timeline } from 'antd'
import QueueAnim from 'rc-queue-anim'
import React from 'react'
import './style.less'
import actions from '../../store/actions/say'
import {connect} from 'react-redux'
const Item = Timeline.Item


class Say extends React.Component {
  componentDidMount() {
    this.props.RequestSAY({ pageIndex: 1, pageSize: 10 })
    this.props.RequestArticles({
      pageIndex: 1,
      pageSize: 10})
  }
  onChange = (pageIndex, pageSize) => {
    this.props.RequestSAY({ pageIndex, pageSize })
  }
  onShowSizeChange = (pageIndex, pageSize) => {
    this.props.RequestSAY({ pageIndex, pageSize })  
  }
  render() {
    //console.log(this.props)
    const { say,payload } = this.props.say
    const { pageIndex, pageSize } = payload;
    const total = this.props.info.sayNumber;
    return (
      <div className="time-line-wrp">
      <div className="time-line">
        <Timeline key="Timeline">
          {say &&
            say.map((item,index) => (
              <Item key={index}>
                <QueueAnim
                  animConfig={[
                    { opacity: [1, 0], translateX: [0, -150] },
                    { opacity: [1, 0], translateX: [0, 150] }
                  ]}
                  duration={1500}>
                  <div className="item" key={item._id}>
                    <div dangerouslySetInnerHTML={{ __html: item.say }} />
                    <span className="posted">
                      发表于：{new Date(item.create_at).toLocaleString()}
                    </span>
                  </div>
                </QueueAnim>
              </Item>
              )
            )}
          <QueueAnim className="pagination" delay={1000}>
              <Pagination
                pageSizeOptions={['5','10','15','20']}  
                current={pageIndex}
                pageSize={pageSize}
                total= {total}
                key="pagination"
                showSizeChanger={true}
                onChange={this.onChange}
                onShowSizeChange={this.onShowSizeChange}
            />
          </QueueAnim>
        </Timeline>
      </div>
    </div>

    )
  }
}

export default connect(state => state, actions)(Say);

/* 
// current={pageIndex}
                // pageSize={pageSize}
                //total={total}
*/


