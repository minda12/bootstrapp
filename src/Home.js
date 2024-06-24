import React from 'react'
import './Home.css'
import Disc from './Disc.png' 
import Equilizer from './Equilizer.gif'
import {Col,Badge,Button,Row} from 'react-bootstrap'


const Tours = [
    {
      date:"19th March 2024",
      title: 'Michael Jackson',
      Ticketprice: 1999,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Michael_Jackson_in_1988.jpg/220px-Michael_Jackson_in_1988.jpg',
      
    },
    {
      date:"19th June 2024",
      title: 'Justin Beiber',
      Ticketprice: 5000,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Justin_Bieber_in_2015.jpg/419px-Justin_Bieber_in_2015.jpg',
      
    },
    {
      date:"19 August 2024",
      title: 'Rihanna',
      Ticketprice: 25000,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Rihanna_Fenty_2018.png/220px-Rihanna_Fenty_2018.png',
      
    }
  ];
function Home() {

    const Tourlist = Tours.map((product) =>

         <Row>

        <div className='column-content'>
        <h1 className=' text-align-center text-white fst-italic  '>{product.title}</h1>

        <h3 className=' text-underline text-align-center text-dark fst-italic'><h4>Comming on</h4>{product.date}</h3>
       
        <img src={product.imageUrl} alt={product.title} className='column-image w-25 '/>
        <div className=' d-flex justify-content-between m-1' >
        <Col>  <Badge>Ticket₹<h3>{product.Ticketprice}</h3></Badge></Col>
        <Col><Button  variant = 'primary' className='mx-5 '>Buy Ticket</Button></Col>
        </div>
        </div>

       
        </Row>
    )


  return (
    <div className="container mt-4">
            <div className="border border-5 bg-secondary text-center p-5">
                <p className='font-size generic'>The Generics</p>
                <div className="d-flex justify-content-center align-items-center">
                    <span className='rotate'>
                        <img src={Disc} alt='Disc' className='img-fluid w-25 mr-2'></img>
                    </span>
                    <span>
                        <img src={Equilizer} alt='Equilizer' className='img-fluid w-50'></img>
                    </span>
                    <span className='rotate'>
                        <img src={Disc} alt='Disc' className='img-fluid w-25 ml-2'></img>
                    </span>
                </div>
            </div>
          
          <div className="border border-5 bg-secondary text-center p-5">{Tourlist} </div>
          
        </div>
  )
}

export default Home