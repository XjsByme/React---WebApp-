import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { getAd } from '../../api/homeData';
import Ad from '../../base/Ad';
import './style.less';


class HomeAd extends React.Component {
  constructor(...args) {
    super(...args);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      adList: [],
      loading: true,
    }
  }
  render() {
    return (
      <div className="homeAd-wrapper">
        <p className="title">超值特惠</p>
        {
          this.state.loading ?
          <p>加载ads中</p> :
          <Ad adList={this.state.adList}/>
        }
      </div>
    )
  }
  componentDidMount() {
    getAd().then(res => {
      this.setState({
        adList: res,
        loading: false
      });
    });
  }
}
export default HomeAd;
