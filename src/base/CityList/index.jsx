import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less';

class CityList extends React.Component {
  constructor(...args) {
    super(...args);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  handleClick(item) {
    this.props.resetCity(item);
  }
  render() {
    const arr = ['北京1','北京2','北京3','北京4','北京5','北京6','北京7','北京8','北京9','北京a','北京bb','北京ccc',]
    return (
      <div className="city-list-wrapper">
        <h3 className="title">热门城市</h3>
        <ul className="city-list">
          {
            arr.map((item, index) => (
               <li key={index} className="item" onClick={this.handleClick.bind(this, item)}><span className="name">{item}</span></li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default CityList;