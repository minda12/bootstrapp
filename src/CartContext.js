import React from 'react'


const CartContext = React.createContext({
    Items:[],
    Users:[],
    cartItems:[],
    Qty:0,
    Total:0,
    additemToCart : (id)=>{},
    AddUser:()=>{},
    IsLogIn:false

   
})


export default CartContext