import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"


const Books = () => {

    const [ books,setBooks ] = useState([])

        useEffect( ()=> {
            const fetchAllBooks = async () => {
                try {

                    const res = await axios.get("http://localhost:8801/books")
                    setBooks(res.data)
                    
                } catch (error) {
                    console.log(error)
                }
            }
            fetchAllBooks()
        },[])

      const handleDelete = async (id)=> {

         try {
                await axios.delete("http://localhost:8801/books/"+id)

            window.location.reload()
            
         } catch (error) {
            console.log(error)
         }

      }


  return (
    <div className='books_container'>

        <h1>Book stall</h1>

        <div className='books'>

            {books.map(book =>(

                <div className='book' key={book.id}> 
                <img src={book.cover} alt="" /> 
                <h2> {book.title} </h2>
                <p> {book.desc} </p> 
                <span> {book.price} </span>

                <button className='book_button' > <Link style={{textDecoration: "none", color: "black"}} to={`/update/${book.id}`}> Update </Link> </button>
                <button className='book_button' onClick={()=> handleDelete(book.id)} >Delete</button>

                </div>
            ))}

        </div>

        <button> <Link style={{textDecoration: "none", color: "black"}} to="/add"> Add book</Link> </button>

      

    </div>
  )
}

export default Books
