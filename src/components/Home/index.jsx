import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import HomeHeader from '../../base/HomeHeader';
import Category from '../../base/Category';
import HomeAd from '../HomeAd';
import HomeList from '../HomeList';

class Home extends React.Component {
  constructor(...args) {
    super(...args);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  setSearchKey(text) {
    this.refs.homeHeader.setKeyword(text);
  }
  render() {
    return (
      <div>
        <HomeHeader cityName={this.props.userinfo.cityName} ref="homeHeader"/>
        <Category setSearchKey={this.setSearchKey.bind(this)}/>
        <HomeAd/>
        {
          this.props.userinfo.cityName ?
          <HomeList cityName={this.props.userinfo.cityName}/> : <p>定位中...</p>
        }
      </div>
    );
  }
}

// -------------------链接redux react 获取state数据--------------------
function mapStateToProps(state) {
  return {
    userinfo: state.userinfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);