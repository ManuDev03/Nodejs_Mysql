const express = require('express')
const app = express()
const path = require('path')
const dotenv = require('dotenv')
const morganLogger = require('./middleware/logger')


//configuration
dotenv.config({path:path.resolve(process.cwd(),"./config/.env")})
const port = process.env.PORT || 3000

// middleware
app.use(morganLogger)
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello World!')
  })


app.listen(port, () => {
    console.log('server is runing on port' + port);
})