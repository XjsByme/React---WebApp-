import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from './store/actions/userinfo';

import { LS } from './common/js/config';
import LocalStore from './common/js/localStore';

class App extends Component {
  constructor(...args) {
    super(...args);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (<div>
      {this.props.children}
    </div>);
  }
  // 获取city名称,假设是异步请求
  componentDidMount() {
    let cityName = LocalStore.getItem(LS.CITYNAME);
    if (cityName == null) {
      cityName = '北京';
    }
    // 这里用 ==
    this.props.userInfoActions.update({
      cityName
    });
  }
}
// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
