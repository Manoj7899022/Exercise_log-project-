import express from 'express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import cors from 'cors'
import router from './routes/userRoutes.js'
import router1 from './routes/exerciseRoutes.js'
import build from '../frontend/build';

dotenv.config()

const app = express()
const port = process.env.PORT || 8080

const url = process.env.URL;
mongoose.connect(url, ()=> console.log("Database connected") )

app.use(cors())
app.use(express.json())

app.get('/', async( req, res) =>{
    res.send('Hello hii')
})

app.use('/users', router)
app.use('/excercises', router1)

//static files
app.use(express.static(path.join(__dirname, build)));
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname,'../frontend/build/index.html'));
})



app.listen(port, ()=> console.log('server has started on port http://localhost:8080'))

