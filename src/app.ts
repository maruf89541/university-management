import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/user.route'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1/users/', usersRouter)
app.get('/', (req: Request, res: Response) => {
  res.send('Working Successsfully')
})

export default app
