import React, { useState }from 'react'
import  {gql} from '@apollo/client'
import { useQuery,useMutation}  from '@apollo/client'
import { getBookQuery } from '../queries/queries';
import BookQuery from './BookQuery';




export default function BookList() {
  const {loading, error, data} = useQuery(getBookQuery);
 console.log(data);
 const [bookId, setBookId] = useState(undefined);

if (loading) return <p>...loading</p>
if (error) return <p>..error</p>


function displayfunction(){
  if(loading)
  return  <p>...loading</p>
  else {
    return data.Book.map((book) => (<li key={book.id} onClick={(e)=>(setBookId(book.id))} >{book.name}</li>))
  }
}

  return (
    <div>
       <ul id='booklist'> 
       {displayfunction()  }
        </ul>
        <BookQuery bookId={bookId}/>
        </div>
  )
}


