const express = require('express')
const cors = require('cors')
const app = express()
const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("3612733e9a9fb6f3b215af7ed0aad00702b91303e06dea6ce63954df6cb3864d");

app.use(express.json())
app.use(cors())

app.get('/', (req,res) => {
  // res.send('hello world')
  const params = {
    engine: "google_scholar_author",
    hl: "en",
    author_id : 'gMxHUccAAAAJ'
  };
  
  const callback = function(data) {
    res.send(data);
  };
  
  // Show result as JSON
  search.json(params, callback);
})



app.listen(3000, () => console.log('listening to port 3000'))