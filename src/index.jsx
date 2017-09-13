import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { hashHistory } from 'react-router'
import configureStore from './store'
import './common/css/common.less';
import './common/css/font.css';

// 创建 Redux 的 store 对象
const store = configureStore();

import RouteMap from './router'

render(
    <Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
);