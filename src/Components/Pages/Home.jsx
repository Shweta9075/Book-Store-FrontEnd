import { LineAxisOutlined } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect } from 'react'
import Navbar from '../Navbar'

const Home = () => {
const [books, setBooks] = useEffect([]);

  useEffect(() => {
    fetchBooks();
  }, [])

  const fetchBooks = ()=>{
     axios.get("http://localhost:8080/BooksPage/Show All Books Data")
    .then((response) => {
      console.log(response.data)
      setBooks(response.data.obj)
      console.log(response.data.obj)
      console.log(books)
    })
  }

  return (
    <div>
    <Navbar/>
        <h1>Home Page</h1>
    </div>
  )
}

export default Home