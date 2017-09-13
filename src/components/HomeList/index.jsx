import React from 'react';
import CommonList from '../../base/CommonList';
import './style.less';
import { getList } from '../../api/homeData';

const PER_PAGE = 5;

class HomeList extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      data: [],
      loading: true,
      page: 1,
      hasMore: true,
    };
  }
  
  _getList(cityName,page) {
    getList(cityName, page).then(res => {
      setTimeout(() => {
        // 凸显异步加载过程
        this.setState({
          data: res.data.concat(this.state.data),
          loading: false,
          hasMore: res.data.length && res.data.length === PER_PAGE
        });
      }, 2000);
    });
  }
  
  getMore() {
    if (this.state.hasMore) {
      this.state.page += 1;
      this._getList(this.props.cityName, this.state.page);
    } else {
      alert('没有更多了...');
      this.setState({
        hasMore: false
      })
    }
  }
  
  render() {
    return (
      <div>
        <p style={{
          textIndent: '8px',
          padding: '4px 0',
          fontWeight: 'bold',
        }}>猜你喜欢</p>
        {
          this.state.loading ? <p>加载中...</p> :
          <CommonList data={this.state.data}
                      hasMore={this.state.hasMore}
                      getMore={this.getMore.bind(this)}/>
        }
      </div>
    );
  }
  
  componentDidMount() {
    this._getList(this.props.cityName, 1);
  }
}

export default HomeList;