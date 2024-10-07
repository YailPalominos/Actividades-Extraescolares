import express from 'express'
import actividadesRoutes from './routes/actividades.routes.js'

const app = express()

// Middleware para interpretar JSON
app.use(express.json());

app.use(actividadesRoutes)

export default app