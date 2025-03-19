import React, { useState, useEffect} from 'react'
import BookCards from '../components/BookCards';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://humble-trout-jx944rvwrr7hq5x4-5000.app.github.dev/all-books").then(res => res.json()).then(data => setBooks(data.slice(7,12)))
    }, [])
      return (
        <div>
            <BookCards books={books} headline="Other Books"/>
        </div>
      )
    }

export default OtherBooks