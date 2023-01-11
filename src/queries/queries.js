import  {gql} from '@apollo/client'

const getAuthorQuery=gql`
{
    Author{
        id
        name
}
}`

const getBookQuery=gql`
{
Book{
  id
  name
  genre
}
}
`

const addBookMutation =gql`
mutation AddBook($name: String!, $genre: String!, $authorId:ID!) {
    addBooks(name:$name, genre:$genre, authorId:$authorId){
      id
      name
      genre
    }
  }
`

const getBookDetailsQuery = gql`
  query GetBook($id: ID){
    Books(id: $id) {
      name
      genre
      Author {
        id
        name
        age
        Books {
          id
          name
          genre
        }
      }
    }
  }`








export{ getAuthorQuery, getBookQuery,addBookMutation,getBookDetailsQuery};