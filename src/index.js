import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import {Body} from './components/body'
import store from './store/store'
import {Cart} from './components/cart'
import {Main} from './components/main'



ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Body/>}>
        <Route path='/' element={<Main/>}/>
        <Route path='/cat' element={<Cart/>}/>
        <Route path='/profile' element={<Cart/>}/>
        {/* <Route path='?shopitem' /> */}
      </Route>
    </Routes>
  </BrowserRouter>
</Provider>

,
  document.getElementById('root')
);

setInterval(() => {
  let x = document.getElementById('slidewrap')
  console.log(x.style.left)
}, 100);