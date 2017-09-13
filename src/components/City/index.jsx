import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { hashHistory } from 'react-router'
import CommonHeader from '../../base/CommonHeader';
import CurrentCity from '../../base/CurrentCity';
import CityList from '../../base/CityList';
import * as userInfoActionsFromOtherFile from '../../store/actions/userinfo';
import { LS } from '../../common/js/config';
import LocalStore from '../../common/js/localStore';

class City extends React.Component {
  constructor(...args) {
    super(...args);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  resetCity(name) {
    // 修改redux
    this.props.userInfoActions.update({
      cityName: name
    });
    // 修改localstorage
    LocalStore.setItem(LS.CITYNAME, name);
    // 回到首页
    hashHistory.push('/');
  }
  render() {
    return (
      <div>
        <CommonHeader title="当前城市～"/>
        <CurrentCity cityName={this.props.userinfo.cityName}/>
        <CityList resetCity={this.resetCity.bind(this)}/>
      </div>
    )
  }
}
// -------------------redux react 绑定--------------------
function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
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
)(City)