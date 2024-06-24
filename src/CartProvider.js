import React, { useEffect, useState,useContext } from 'react';
import CartContext from './CartContext';

const cartElements = [
  {
    id: 1,
    title: 'Michael Jackson Bad (CD, Album, RE, RM, S/Edition, Sli)',
    price: 100,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Michael_Jackson_-_Bad.png/220px-Michael_Jackson_-_Bad.png',
    quantity: 1,
    images: [
      'https://m.media-amazon.com/images/I/71GFxDY+uZL._SY450_.jpg', 
      'https://m.media-amazon.com/images/I/71ohg43omaL._SX466_.jpg',
      'https://www.theaudiodb.com/images/media/album/cdart/bad-4ed0218465cf2.png'
    ],
    reviews: [
      { user: 'User 1', comment: 'Great album!', rating: 5 },
      { user: 'User 2', comment: 'Awesome tracks!', rating: 4 },
    ]
  },
  {
    id: 2,
    title: 'Justice : Justin Bieber',
    price: 50,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Justin_Bieber_-_Justice.png/220px-Justin_Bieber_-_Justice.png',
    quantity: 1,
    images: [
      'https://shop.justinbiebermusic.com/cdn/shop/products/justicestandardcd.png?v=1614314329', // Add more images as needed
      'https://i.ebayimg.com/images/g/fTkAAOSwwcZmBbQ-/s-l1600.jpg',
    ],
    reviews: [
      { user: 'User 1', comment: 'Nice Beats!', rating: 6 },
      { user: 'User 2', comment: 'Awesome tracks!', rating: 9 },
    ]
  },
  {
    id: 3,
    title: 'Good Girl Gone Bad: Reloaded',
    price: 70,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/Rihanna_-_Good_Girl_Gone_Bad_Reloaded.png/220px-Rihanna_-_Good_Girl_Gone_Bad_Reloaded.png',
    quantity: 1,
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjMqzSgrRF8Wfojm8M9uEYvi-lE6AyyNUiKw&s', // Add more images as needed
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd3Bpei4rxjBfBCy9dq_bJX6VuvIxLVyw2KA&s',
      'https://media.karousell.com/media/photos/products/2018/05/07/rihanna_15_lp_studio_album_box_set_contains_8_album_sealed_12_vinyl_original_usa_pressing_not_cd_rat_1525686105_f4ce0531.jpg'
    ],
    reviews: [
      { user: 'User 1', comment: 'Cool album!', rating: 8 },
      { user: 'User 2', comment: 'Nice tracks!', rating: 4 },
    ]

  }
];

const Loginuser = {

  email:'abc@gmail.com',
  pass:'12345'
}

function CartProvider({ children }) {
  const [items, setItems] = useState(cartElements);
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(0);
  const [total, setTotal] = useState(0);
  const [User, setUser] = useState([]);
  const [token, settoken] = useState([]);
  const [islogin, setisLogIn] = useState(false);
  const ctx =useContext(CartContext)

  console.log(User)
  useEffect(() => {
    console.log('CartProvider cartItems update', cartItems);
  }, [cartItems]);
  
  
  
   console.log('islogin',ctx.IsLogIn)
   
  const addtoCart = (id, title, price, quant) => {
    const updatedCartItem = {
      Id: id,
      Title: title,
      Price: price,
      Quantity: quant
    };
   
    
    

    setCartItems((prevCartItems) => {
      const itemIndex = prevCartItems.findIndex(item => item.Id === id);
      const newCartItems = [...prevCartItems];

      if (itemIndex !== -1) {
       
        newCartItems[itemIndex] = {
          ...newCartItems[itemIndex],
          Quantity: newCartItems[itemIndex].Quantity + 1
        };
      } else {
      
        newCartItems.push({ ...updatedCartItem, Quantity: quant });
      }

      return newCartItems;
    });

    setQty((prevQty) => prevQty + 1);
    setTotal((prevtot)=>prevtot+price)



    
  };

  const context = {
    token:token,
    Items: items,
    IsLogIn:islogin,
    Users:User,
    cartItems: cartItems,
    Qty: qty,
    Total: total,
    additemToCart: addtoCart,
    // AddUser:Adduser,
    setToken:settoken,
    setisLogIn:setisLogIn
  };
 
  return (
    <CartContext.Provider value={context}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
