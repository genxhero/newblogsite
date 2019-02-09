//MUTATIONS

`mutation {
    createArticle(
         title: "With Current User", 
         body: "Normally this would be much much longer. Like, super long")
     {
      id
      title
      body 
     
       author{
                       id
                       username
           }
    }
  }
`



`mutation{
    deleteArticle(id: INTEGER) {
      id
    }
  }`

`mutation {
    createUser(
      username: "STRING",
      authProvider: {
        email: {
          email: "STRING",
          password: "STRING"
        }
      }
    )
    {
      id
      email
      username
    }
  }`

`mutation {
    signinUser(
     email: {
       email:"aaronbear@gmail.com",
       password: "butter"
     }
   ){
     token
     user {
       id
       username
       email
     }
   }
}`

//QUERIES
`{
    articles {
      id
      title
      body
    }
  }`

  
`{
    article(id: 1) {
      id
      title
      body
    }
  }`  