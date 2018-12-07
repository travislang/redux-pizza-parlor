import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// import reducers
import selectedPizzas from './components/redux/reducers/selectedPizzas.reducer';
import displayTotal from './components/redux/reducers/displayTotal.reducer';

const storeInstance = createStore(
    combineReducers({
      selectedPizzas,
      displayTotal
     }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
