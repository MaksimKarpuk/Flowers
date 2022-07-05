import axios from 'axios'
import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
dotenv.config({ path: 'env/.env' })
const app = express()
app.use(bodyParser.json({ limit: '10mb' }))
app.post('/telegram', async (req, res) => {
  let message = encodeURI (req.body.value)
  try {
    await axios.post(
      `https://api.telegram.org/bot${process.env.TG_TOKEN}` +
        `/sendMessage?chat_id=${process.env.TG_CHAT}&parse_mode=html&text=${message}`
    )
    return res.status(200).json({ message: 'success' })
  } catch (error) {
    return res.status(500).json({ error: new Error(error) })
  }
  
})

export default app
