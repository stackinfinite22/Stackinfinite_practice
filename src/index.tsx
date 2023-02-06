import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import cartReducer, { getTotals } from "./features/cartSlice"
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';



//import { configureStore } from '@reduxjs/toolkit';
//import { Provider } from 'react-redux';

//import productReducer from './features/productSlice';

const store =configureStore({
  reducer:{
  cart:cartReducer,
  },
});
store.dispatch(getTotals(''));
const root = ReactDOM.createRoot(document.getElementById('root')as HTMLInputElement);
root.render(
  <React.StrictMode>
    <Provider store ={store}>
     <App />
    </Provider>
    
  </React.StrictMode>
);

