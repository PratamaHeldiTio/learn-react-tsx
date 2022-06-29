import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { IStateRedux } from './index.types';

// * state management

const initState: IStateRedux = {
  totalOrder: 0,
};

// * Reducer
const rootReducer = (state = initState, action = { type: {} }) => {
  if (action.type === 'PLUS_ORDER') {
    return {
      ...state,
      totalOrder: state.totalOrder + 1,
    };
  }
  
  if (action.type === 'MINUS_ORDER') {
    let totalOrder = 0; 
    if (state.totalOrder > 0) {
      totalOrder = state.totalOrder - 1;
      return {
        ...state,
        totalOrder: totalOrder,
      };
    }
  }
  return state;
};

const reduxStore = createStore(rootReducer);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
