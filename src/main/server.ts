import app from './config/app'
import 'dotenv/config'

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Escutando na porta ${port}`)
  console.log(`CTRL + Clique em http://localhost:${port}`)
})
