import express from 'express'
import actividadesRoutes from './routes/actividades.routes.js'

const app = express()

app.use(actividadesRoutes)

export default app