//const express = require('express')
import express from 'express'
import {PORT, HOST} from './config.js'
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'
import logger from './middlewares/logger.js'
import cors from "cors"

const app = express()

app.use(logger)
app.use(cors())
app.use(express.json())

app.use('/user', userRouter)
app.use('/product', productRouter)



app.get('/',(req, res) =>{
  res.json({message:"OLA!"})
})

app.get('/produto',(req, res) =>{
  res.json({message:"OLA! PROD"})
})

app.listen(PORT, () => {
  console.log(`Server running on ${HOST}:${PORT}`)
})


