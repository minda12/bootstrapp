
import React ,{useRef,useState} from 'react'

function ContactUs() {

    const nameref = useRef(null)
    const emailref = useRef(null)
    const phoneref = useRef(null)
    const[showmsg,setshowmsg]=useState(false)

  const saveContactData =  async (e)=>{
    e.preventDefault()
    const name = nameref.current.value
    const email = emailref.current.value
    const phone = phoneref.current.value

    const contactData = {
        name: name,
        email: email,
        phone: phone
    };
    console.log('Name:', name, 'Email:', email, 'Phone:', phone);

    const res =  await fetch('https://react-http-75d58-default-rtdb.asia-southeast1.firebasedatabase.app/Help/.json',{
     
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(contactData)

    })
    const convertedData = await res.json()
    console.log(convertedData)
   

        setshowmsg(true)


    nameref.current.value =""
    emailref.current.value =""
    phoneref.current.value= ""
    setTimeout(()=>{
    
    setshowmsg(false)
    
     },3000)
  }

  return (
    <>
    <div className=" border border-5 bg-secondary text-center text-white p-5 " >

        <h1 className='text-start'>Help Section </h1>
        
        <h5 className='fst-italic'> Just Fill the form and We will  reach out to you shortly </h5>
    
    </div>
        { showmsg &&  <p className='text-center'>Thank you For Submitting. Our Representive will reach out to you.</p>}
    <div className="  container border border-5 bg-secondary text-center text-white p-5 " >
           
           <form onSubmit={saveContactData}  className='container d-flex flex-column col-12 col-md-8 col-lg-6 '>
            <div className='mb-3'>
            <label className="form-label" id='name'>Name</label>  
            <input ref={nameref} className="form-control" text ='text' htmlFor='name'></input>
            </div>
            <div className='mb-3'>
            <label className="form-label" id='email'>Email</label>  
            <input ref={emailref}   className="form-control" type ='text' htmlFor='email'></input>
            </div>
            <div className='mb-3'>
            <label className="form-label" id='phnumber'>Contact Number</label>   
            <input  ref={phoneref}   className="form-control" type ='tel' htmlFor='phnumber'></input>
            </div>
            <button className='btn btn-primary' type='submit'>Submit</button>
           </form>
    
    </div>
    </>
  )
}

export default ContactUs