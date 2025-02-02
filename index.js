
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const bookRouter = require('./routes/bookRoutes')


app.use(express.json());
app.use('', bookRouter)


app.listen('5000', ()=>console.log("server running on 5000"))

mongoose.connect('mongodb+srv://pmmuthukumarofficial:Muthu123@sample.dk2hn.mongodb.net/?retryWrites=true&w=majority&appName=sample')
    .then(()=>console.log('database connected'))
    .catch((err)=> console.log(err.message))

app.get('/', (req, res)=>{
    res.send('Server reacted.')
})
