import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// provider:提供者，提供数据
import {Provider} from 'react-redux';
// createStore:该函数用来创建store对象
import {createStore} from 'redux';

import reducers from './store/reducers'

// 根据reducers函数创建store对象
var store = createStore(reducers);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
