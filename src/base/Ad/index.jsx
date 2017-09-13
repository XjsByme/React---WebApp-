import React from 'react';
import './style.less';


class Ad extends React.Component {
  render() {
    const img = 'http://img4.imgtn.bdimg.com/it/u=1193418232,3244632658&fm=26&gp=0.jpg';
    return (
      <ul className="aaa">
        {this.props.adList.map((item, index) => (
          <li  key={index}>
            <p>{item.title}</p>
            <img src={img} alt="img"/>
          </li>
        ))}
      </ul>
    )
  }
}
export default Ad;