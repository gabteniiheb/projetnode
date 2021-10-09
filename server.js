const  http= require('http') 

const server= http.createServer((req,res)=>{
  // res.statusCode=200
//   res.setHeader('content-type','text/html');
  // res.write('we don`t found this page \n')
   
  // res.end()
  if (req.url =='/home'){
     res.statusCode=200
     res.write('welcome to home')
  } else if (req.url =='/contact') {
   res.statusCode=200
     res.write('welcome from contact')
  } else if (req.url =='/about') {
   res.statusCode=200
   res.write('welcome from about')
} else {
   res.statusCode=404
   res.write ('not found')
}
  res.end()

})

server.listen(5000,()=>{console.log('server run with port 5000')})