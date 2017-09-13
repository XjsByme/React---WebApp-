import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../app'
import Home from '../components/Home'
import City from '../components/City'
// import User from '../containers/User'
import Search from '../components/Search'
// import Detail from '../containers/Detail'
// import NotFound from '../containers/404'

// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps

class RouterMap extends React.Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path='/' component={App}>
          <IndexRoute component={Home}/>
          <Route path='/city' component={City}/>
          {/*<Route path='/User' component={User}/>*/}
          <Route path='/search' component={Search}/>
          {/*<Route path='/detail/:id' component={Detail}/>*/}
          {/*<Route path='*' component={NotFound}/>*/}
        </Route>
      </Router>
    )
  }
}

export default RouterMap
