import fetch from 'node-fetch'
import express from 'express'
import cors from 'cors'


const app=express()
const port= 3000
app.use(cors())

app.get('/', async(req,res)=>{
  const response= await fetch("http://worldtimeapi.org/api/timezone/America/Los_Angeles")
  const d= await response.json()

  var g=""
  var h=""
    for(let a =0;a<19;a++){
      g=g+d.datetime[a]
      h=h+d.timezone[a]
    }

    res.send([g,h])
})
  
 app.listen(port,()=>{
  console.log('App is listening on port 3000')

})

