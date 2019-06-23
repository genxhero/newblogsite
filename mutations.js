mutation {
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
}