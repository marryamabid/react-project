import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// const variabl='Marryam'
const reactElement = React.createElement(
  'a',
  {type:'link',href:'https//google.com',target:'_blank'},
  'click here to visit google',
  
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  reactElement
  
);
