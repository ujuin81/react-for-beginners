import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import './styles.css'; // 일반적인 방식이지만 여기서는 사용하지 않을 것, 모든곳에 css가 적용되길 원하지 않음

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
