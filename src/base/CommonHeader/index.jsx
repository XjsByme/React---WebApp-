import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router';
import './style.less';

class CommonHeader extends React.Component {
  constructor(...args) {
    super(...args);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  render() {
    return (
      <div className="common-header">
        <Link to="/">
            <span className="back-icon">
            <i className="icon-chevron-left"></i>
            </span>
        </Link>
        <h1 className="title">{this.props.title}</h1>
      </div>
    );
  }
}

export default CommonHeader;