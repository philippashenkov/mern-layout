 const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

 const app = express()

app.use('/api/auth', require('./routes/auth.routes'))

 const PORT = config.get('PORT') || 5000;

 async function start () {
     try {
         await mongoose.connect(config.get("mongoUri"), {
             useUnifiedTopology: true
         })
         .then(
            () => {
              console.log('Database sucessfully connected!')
            },
            (err) => {
              console.log('Could not connect to database : ' + err),
              process.exit()
            },
          )
         app.listen(5000, () => console.log(`Server has been started on port ${PORT}`));
     } catch (err) {
         console.log('Server Error', err.message)
         process.exit(1)
     }
 }

 start()

