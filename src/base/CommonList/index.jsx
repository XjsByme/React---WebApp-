import React from 'react';
import './style.less';
import { hasScrollToBtm } from '../../common/js/dom';

class CommonList extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      loading: false,
    };
  }
  
  getMore() {
    this.setState({
      loading: true,
    });
    this.props.getMore();
  }
  
  componentWillReceiveProps() {
    this.setState({
      loading: false,
    });
  }
  
  render() {
    const img = 'http://img4.imgtn.bdimg.com/it/u=1193418232,3244632658&fm=26&gp=0.jpg';
    return (
      <div className="home-list-wrapper">
        <ul className="home-list">
          {
            this.props.data.map((item, index) => (
              <li className="item" key={index}>
                <img src={img} alt="img"/>
                <div className="item-right">
                  <div className="top">
                    <p className="title">{item.title}</p>
                    <p className="distance">{item.distance}</p>
                  </div>
                  <div className="middle">
                    <p className="desc">{item.subTitle}</p>
                  </div>
                  <div className="bottom">
                    <p className="price">¥ {item.price}</p>
                    <p className="number">已售{item.mumber}</p>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
        <div className="getmore" onClick={this.getMore.bind(this)}>
          <span className="text">{
            // 这里应该封装成组件。。。
            this.props.hasMore ? (this.state.loading ? '加载中...' : '点击加载更多')
              : '没有更多了...'
          }</span>
        </div>
      </div>
    );
  }
  
  componentDidMount() {
    let timer = null;
    window.addEventListener('scroll', () => {
      timer && clearTimeout(timer);
      timer = setTimeout(() => {
        if (hasScrollToBtm() && !this.state.loading) {
          this.getMore();
          clearTimeout(timer);
        }
      }, 50);
    });
  }
}

export default CommonList;