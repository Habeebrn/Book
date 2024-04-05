import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {

  const [ book, setBook ] = useState ({

    title: "",
    desc : "",
    price: null,
    cover: ""

  });

  const navigate = useNavigate();

  const handleChange = (e)=> {
    setBook( prev =>( {...prev, [e.target.name] : e.target.value } ))
  }

  // console.log( "data",book)

  const handleClick = async (e)=> {

    e.preventDefault()

    try {

       await axios.post("http://localhost:8801/books", book)

      navigate("/")


      
      
    } catch (error) {
      
      console.log(error)
      
    }

  }



  return (
    <div className='form'>
      <h2>Add a book</h2>
      <input type='text' onChange={handleChange} name='title' placeholder='title'/>
      <input type='text' onChange={handleChange} name='desc' placeholder='Desc'/>
      <input type='number' onChange={handleChange} name='price' placeholder='Price'/>
      <input type='text' onChange={handleChange} name='cover' placeholder='cover'/>

      <button onClick={handleClick}>Add</button>



    </div>
  )
}

export default Add
