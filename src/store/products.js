import { createSlice } from "@reduxjs/toolkit";
import ssofa from './pictures/sofa.jpg'
import ssofa2 from './pictures/sofa2.jpg'
import ssofa3  from './pictures/sofa3.jpg'
import ssofa4 from './pictures/sofa4.jpg'
import ssofa5 from './pictures/sofa5.jpg'
import ssofa6 from './pictures/sofa6.jpg'

export const ProductsList = createSlice({
    name: 'products list',
    initialState:{
        products:[
            {id:1,name:'Siba',price:'1000$',img:'./pictures/sofa.jpg'},
            {id:2,name:'Saltanat',price:'1200$',img:'./pictures/sofa2.jpg'},
            {id:3,name:'Max',price:'1400$',img:'./pictures/sofa3.jpg'},
            {id:4,name:'JavaScript',price:'1050$',img:'./pictures/sofa4.jpg'},
            {id:5,name:'Lisila',price:'1570$',img:'./pictures/sofa5.jpg'},
            {id:6,name:'Niusha',price:'1880$',img:'./pictures/sofa6.jpg'},
        ]
    }
})