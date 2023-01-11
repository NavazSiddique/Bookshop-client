import React from 'react'
import { useQuery}  from '@apollo/client'
import { getBookDetailsQuery } from '../queries/queries'


export default function BookQuery(props) {

    const { loading, error, data } = useQuery(getBookDetailsQuery, {
        variables: { id: props.bookId }
      });
      console.log(data)
      

      if(loading){
        return <div>loading... </div>
      }
    //   else if(data.Books != null){
        
    //     const {book} = data;
    //     //console.log(data)

    else if(data.Books!=null){




  return (
    <div id="bookDetails">
        <p>Book details are here </p>
       
            <h1>Book Details</h1>
            <h3>{data.Books.name}</h3>
             <p>Genre: {data.Books.genre}</p>
            <p>Author Name: {data.Books.Author.name}</p>
            <p>Author Age: {data.Books.Author.age}</p> 
             <p>All Books By this Author:</p>
          <ul>
                {data.Books.Author.Books.map((book) => (<li key={book.id}>{book.name}</li>))}
            </ul> 
        </div>
  )
}

}