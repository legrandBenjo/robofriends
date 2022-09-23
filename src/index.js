import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App.js'
import 'tachyons'

//import registerServiveWorker from './registerServiceWorker'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);
//ReactDOM.render( <Hello/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//registerServiceWorker();
