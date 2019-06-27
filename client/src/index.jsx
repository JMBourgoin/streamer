import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers);
const root = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
    <App />
</Provider>, root);