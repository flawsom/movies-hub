import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeProvider from './context/home_context';
import SingleItemProvider from './context/single_item_context';

ReactDOM.render(
  <HomeProvider>
    <SingleItemProvider>
      <App />
    </SingleItemProvider>
  </HomeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
