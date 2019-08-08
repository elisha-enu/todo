import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import PagesRouter from './pages'
import * as serviceWorker from './serviceWorker';

import { Provider }  from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const WrapperApp = () => ( 
    <Provider store={store} >
      <PagesRouter />
    </Provider>
  )

ReactDOM.render(<WrapperApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
