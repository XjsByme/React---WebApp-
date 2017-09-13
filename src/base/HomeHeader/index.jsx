import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router';
import SearchInp from '../SearchInp';

import './style.less';

class HomeHeader extends React.Component {
  constructor(...args) {
    super(...args);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  setKeyword(text) {
    this.refs.searchInp.setKeyword(text);
  }
  render() {
    return (
      <div className="home-header">
          <div className="header-left">
            <Link to="/city">
                <span className="city-name">{this.props.cityName}</span>
                <i className="icon-angle-down"></i>
            </Link>
          </div>
        <div className="header-center">
          <SearchInp  ref="searchInp"/>
        </div>
        <div className="header-right">
          <i className="icon-user"></i>
        </div>
      </div>
      
    )
  }
}

export default HomeHeader