import express from 'express'
import { ContactRouter } from './src/routes/contact.router'

const app = express()
app.use(express.json())
const contactRouter = new ContactRouter()

app.use('/contact', contactRouter.getRoutes())

app.listen(3000, ()=> console.log("dale ta rodando"))