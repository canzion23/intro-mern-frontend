import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import ProductLayout from './Products/components/ProductLayout';
import 'bulma/css/bulma.min.css';

// After (esto funciona para la versión de React 18x)
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<ProductLayout /> );

// Before (esto funciona para la versión de React 17x)
// ReactDOM.render(
//   <React.StrictMode>
//     <ProductLayout />    
//   </React.StrictMode>,
//   document.getElementById('root')
// );
