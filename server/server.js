const express = require('express')
const app = express()

// using environment variables
const PORT = process.env.PORT || 8000
const Report = require('./models/report.js')



// using middleware to serve static files
// mainly for client side js that runs in the browser
// bascially how project 1 works
app.use(express.static('public'))

app.get('/api/reports', (req, res) => {
  Report.reports()
        .then(dbRes => {
          res.json(dbRes)
        })
})

app.get('/api/info', (req, res) => {
  res.json({ message: 'welcome to the safehaven json api'})
})

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
})

app.get('/api/stations/stats', (req, res) => {
  Report.stats()
    .then(dbRes => {
      res.json(dbRes.rows)
    })
})

// fundamentals - crucial for reading docs & example code
// code readability - tell a story - easier even for yourself when reading after 3 weeks
// following instructions - professional & reliable
// take small steps towards your goal - wisdom 
// understand the architecture - big picture stuff 
// understand the problem - takes time but neccessary
// mindset - effects your form
// refactoring - it's not the first step
// abstractions - if you can do all the above
