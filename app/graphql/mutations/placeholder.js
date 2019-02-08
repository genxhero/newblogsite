//MUTATIONS

// mutation {
//     createArticle(title: STRING, body: STRING userId: CURRENTUSERID){
//       id
//       title
//       body 
//     }
    
//   }


// mutation{
//     deleteArticle(id: INTEGER) {
//       id
//     }
//   }

// mutation {
//     createUser(
//       username: "STRING",
//       authProvider: {
//         email: {
//           email: "STRING",
//           password: "STRING"
//         }
//       }
//     )
//     {
//       id
//       email
//       username
//     }
//   }

//QUERIES
// {
//     articles {
//       id
//       title
//       body
//     }
//   }

// {
//     article(id: 1) {
//       id
//       title
//       body
//     }
//   }  returns a data pojo; data.article will grab the article