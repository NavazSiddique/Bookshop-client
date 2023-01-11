import React, { useState } from 'react'
import  {gql} from '@apollo/client'
import { useQuery,useMutation}  from '@apollo/client'

import { getAuthorQuery ,addBookMutation,getBookQuery} from '../queries/queries';


export default function AddBook() {
    const {loading, error, data} = useQuery(getAuthorQuery);
    const [addBooks, { mutationData, mutationLoading, mutationError }] = useMutation(addBookMutation);
 
const [name,setName] = useState(undefined)
const [genre,setGenre] = useState(undefined)
const [authorId,setAuthorId] = useState(undefined)

   
if (error) return <p>..error</p>

function displayfunction(){
    if(loading)
    {
        return <option disabled>...loading</option>
    }
    else{
        return data.Author.map((Author) => (<option key={Author.id} value={Author.id} >{Author.name}</option>))
    }
}




  return (
    <form id='addbook'  onSubmit={(e) => {
        e.preventDefault();
        addBooks({
          variables: {
            name: name,
            genre: genre,
            authorId: authorId,
          },
          refetchQueries: [ { query: getBookQuery } ],
        });
      }} >
<div className='field'>
<label>Book Name:</label>
<input type='text' onChange={(e) => setName(e.target.value)}></input>
</div>

<div className='field'>
    <label>genre:</label>
    <input type='text' onChange={(e) => setGenre(e.target.value)}></input>

</div>
<div className='field'>
    <label>Author:</label>
    <select onChange={(e) => setAuthorId(e.target.value)}>
        <option>select Author</option>
        {displayfunction() }

    </select>

</div>
<button>+</button>


      </form>
  )
}
