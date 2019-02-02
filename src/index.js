import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import App from './App';


ReactDOM.render(<div><App/></div>, document.querySelector('#root'));
// ['./App.js', './index.js']
if (module.hot) {
    module.hot.accept();
}