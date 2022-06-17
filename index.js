import 'dotenv/config'
import express from 'express'
import nodeCleanup from 'node-cleanup'
import routes from './api/routes.js'
import { init, cleanup } from './whatsapp.js'

const app = express()
import cors from 'cors'
const host = process.env.HOST ?? '127.0.0.1'
const port = parseInt(process.env.PORT ?? 8000)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use('/api', routes)

app.listen(port, host, () => {
    init()
    console.log(`Server is listening on http://${host}:${port}`)
})

nodeCleanup(cleanup)

export default app
