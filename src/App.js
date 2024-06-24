import React, { useState ,useContext} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Headline from './Headline';
import Items from './Items';
import CartItems from './CartItems';
import Cart from './Cart';
import CartProvider from './CartProvider';
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
import './App.css';
import ProductDetails from './productDetails'; 
import login from './login';
import CartContext from './CartContext';

function App() {
  const [showModal, setShowModal] = useState(false);
  const ctx = useContext(CartContext)
  const show = () => {
    setShowModal(true);
  }

  const hide = () => {
    setShowModal(false);
  }

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <CartProvider>
          <Header />
          <Cart onShow={show} />

          <div className="main-content">
            <Switch>
            <Route path="/login" component={login} />
            
         <Route exact path="/" component={Home} />
             { <Route path="/store" render={() => (
                <>
                  <Headline />
                  <Items onShow={show} />
                </>
              )} />}
              <Route path="/contactus" component={ContactUs} />
              <Route path="/about" component={About} />
            
              <Route path="/productdetails/:ProductId" component={ProductDetails} />
            </Switch>
          </div>

          {showModal && <CartItems onClose={hide} />}
          <Route path ='*' ><Redirect to ='/login'/></Route>
          <Footer />
        </CartProvider>
      </div>
    </Router>
  );
}

export default App;
