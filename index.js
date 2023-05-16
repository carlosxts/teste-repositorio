const express = require('express')
const app = express()

 

app.set('view engine', 'ejs')
 
app.get('/', (request, response) => {
      response.render('home')

})

app.get('/vaga', (request, response) => {

   response.render('vaga')

})


app.use(express.static('public')) 



app.listen(3000, (err) =>{
    if(err){
        console.log('não foi possivel iniciar o servidor')
    }else{
        console.log('servidor do jobify rodando')
    }
    }
    
)


