import React from 'react';
import ReactDOM from 'react-dom/client'; // Залишаємо import для нового способу рендерингу
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Створюємо кореневий елемент
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендеримо додаток з BrowserRouter
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Якщо ви хочете почати вимірювати продуктивність у вашому додатку, передайте функцію
// для логування результатів (наприклад: reportWebVitals(console.log))
// або відправте на аналітичний кінцевий пункт. Дізнайтеся більше: https://bit.ly/CRA-vitals
reportWebVitals();
