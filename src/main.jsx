import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from "./App.jsx";
import UserContext from './context/UserContext.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <UserContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContext>
  </Provider>
);

















// // import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from "./App.jsx"
// import UserContext from './context/UserContext.jsx'
// import { Provider } from 'react-redux'
// import { store } from './redux/store.js'

// import { BrowserRouter } from 'react-router-dom';
// createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//        <UserContext>
//           <BrowserRouter>
//                <App/>
//           </BrowserRouter>
       
       
//   </UserContext>
//   </Provider>

//  //wrapped in user contex for the context api for entire website
// )

