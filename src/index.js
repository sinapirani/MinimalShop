import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import {Body} from './components/main/body'
import store from './store/store'
import {Cart} from './components/cart/cart'
import {Main} from './components/main/main'
import {ProductPage} from './components/products/productpage'
import {Profile} from '././components/profile/profile'




ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Body/>}>
        <Route path='/' element={<Main/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/products' element={<ProductPage/>}/>
        {/* <Route path='?shopitem' /> */}
      </Route>
    </Routes>
  </BrowserRouter>
</Provider>

,
  document.getElementById('root')
);
if(window.localStorage.getItem('sign') == null){
  window.localStorage.setItem('sign',false)
}else if(window.localStorage.getItem('sign') == false){
  
}
// window.localStorage.setItem('singuped',false)
let x = window.localStorage.getItem('singuped')
console.log('signup :',x)
