import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Update = () => {

  const [ book, setBook ] = useState ({

    title: "",
    desc : "",
    price: null,
    cover: ""

  });

  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.pathname.split("/")[2];





  const handleChange = (e)=> {
    setBook( prev =>( {...prev, [e.target.name] : e.target.value } ))
  }

  // console.log( "data",book)

  const handleClick = async (e)=> {


    console.log()

    e.preventDefault()

    try {

       await axios.put("http://localhost:8801/books/"+bookId,book)

      navigate("/")


      
      
    } catch (error) {
      
      console.log(error)
      
    }

  }



  return (
    <div className='form'>
      <h2>Update a book</h2>
      <input className='input' type='text' onChange={handleChange} name='title' placeholder='title'/>
      <input className='input' type='text' onChange={handleChange} name='desc' placeholder='Desc'/>
      <input className='input' type='number' onChange={handleChange} name='price' placeholder='Price'/>
      <input className='input' type='text' onChange={handleChange} name='cover' placeholder='cover'/>

      <button onClick={handleClick}>Update</button>



    </div>
  )
}

export default Update
