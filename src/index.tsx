import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducer/store';
import "../node_modules/primereact/resources/themes/saga-blue/theme.css";
// import '../node_modules/primereact/resources/themes/lara-light-indigo/theme.css';
import '../node_modules/primereact/resources/primereact.css'
// import "../node_modules/primereact/resources/themes/vela-blue/theme.css";
import "../node_modules/primeicons/primeicons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import ConfirmationAlert from './common/ConfirmAlert';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>

  <BrowserRouter>
  <React.StrictMode>
    <ConfirmationAlert/>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
