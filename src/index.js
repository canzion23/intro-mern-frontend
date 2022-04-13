import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import { ProductsLayout } from './Products/components/index';
import 'bulma/css/bulma.min.css';

// After (esto funciona para la versión de React 18x)
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<ProductsLayout /> );

// Before (esto funciona para la versión de React 17x)
// ReactDOM.render(
//   <React.StrictMode>
//     <ProductLayout />    
//   </React.StrictMode>,
//   document.getElementById('root')
// );
