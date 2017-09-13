import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactSwipe from 'react-swipe';

import './style.less';

class Category extends React.Component {
  /*
  轮播图需要用到一个第三方插件 https://github.com/voronianski/react-swipe 根据其文档要求需要安装插件，
  即`npm install react swipe-js-iso react-swipe --save`，这个插件的日常使用我已经验证过，大家可放心使用
  */
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      index: 0
    }
  }
  handleEnter() {
    this.props.setSearchKey('深圳');
  }
  render() {
    const defaultImg = 'http://pic41.nipic.com/20140529/18243620_101015342117_2.gif';
    const opt = {
      auto: 2500,
      callback: (index) => {
        // 更新当前轮播图的index
        this.setState({index: index});
      }
    };
  
    return (
      <div className="category-wrapper">
        <ReactSwipe swipeOptions={opt}>
          <div className="slider-wrapper">
            <ul className="category-list" onClick={this.handleEnter.bind(this)}>
              <li className="item"><img src={defaultImg} alt="icon"/><p>景点</p></li>
              <li className="item"><img src={defaultImg} alt="icon"/><p>景点1</p></li>
              <li className="item"><img src={defaultImg} alt="icon"/><p>景点</p></li>
              <li className="item"><img src={defaultImg} alt="icon"/><p>景点</p></li>
              <li className="item"><img src={defaultImg} alt="icon"/><p>景点</p></li>
              <li className="item"><img src={defaultImg} alt="icon"/><p>景点</p></li>
              <li className="item"><img src={defaultImg} alt="icon"/><p>景点</p></li>
              <li className="item"><img src={defaultImg} alt="icon"/><p>景点</p></li>
              <li className="item"><img src={defaultImg} alt="icon"/><p>景点</p></li>
              <li className="item"><img src={defaultImg} alt="icon"/><p>景点</p></li>
            </ul>
          </div>
          <div className="slider-wrapper">
            <ul className="category-list">
              <li className="item"><img src={defaultImg} alt="icon"/><p>景点</p></li>
              <li className="item"><img src={defaultImg} alt="icon"/><p>景点2</p></li>
              <li className="item"><img src={defaultImg} alt="icon"/><p>景点</p></li>
              <li className="item"><img src={defaultImg} alt="icon"/><p>景点</p></li>
              <li className="item"><img src={defaultImg} alt="icon"/><p>景点</p></li>
              <li className="item"><img src={defaultImg} alt="icon"/><p>景点</p></li>
              <li className="item"><img src={defaultImg} alt="icon"/><p>景点</p></li>
              <li className="item"><img src={defaultImg} alt="icon"/><p>景点</p></li>
              <li className="item"><img src={defaultImg} alt="icon"/><p>景点</p></li>
              <li className="item"><img src={defaultImg} alt="icon"/><p>景点</p></li>
            </ul>
          </div>
          <div className="slider-wrapper">
            <ul className="category-list">
              <li className="item"><img src={defaultImg} alt="icon"/><p>景点</p></li>
              <li className="item"><img src={defaultImg} alt="icon"/><p>景点3</p></li>
              <li className="item"><img src={defaultImg} alt="icon"/><p>景点</p></li>
              <li className="item"><img src={defaultImg} alt="icon"/><p>景点</p></li>
              <li className="item"><img src={defaultImg} alt="icon"/><p>景点</p></li>
              <li className="item"><img src={defaultImg} alt="icon"/><p>景点</p></li>
              <li className="item"><img src={defaultImg} alt="icon"/><p>景点</p></li>
              <li className="item"><img src={defaultImg} alt="icon"/><p>景点</p></li>
              <li className="item"><img src={defaultImg} alt="icon"/><p>景点</p></li>
              <li className="item"><img src={defaultImg} alt="icon"/><p>景点</p></li>
            </ul>
          </div>
        </ReactSwipe>
        <div className="index-container">
          <ul>
            <li className={this.state.index === 0 ? "selected" : ''}></li>
            <li className={this.state.index === 1 ? "selected" : ''}></li>
            <li className={this.state.index === 2 ? "selected" : ''}></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Category