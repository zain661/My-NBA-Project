const express = require("express")
const axios = require("axios")
const app = express()
const path = require("path")
const port = 5000
let players = []
app.use(express.static((path.join(__dirname, "dist"))))
app.use(express.static((path.join(__dirname, "node_modules"))))
app.get('/',function(req,res){
    res.send("this is home page")
})
const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}
app.get('/teams/:teamName',function(req,res){
    const name = req.params.teamName
    let result = []
    result = players.filter(p=>p.teamId == teamToIDs[name])
    res.send(result)
    
})
axios.get('http://data.nba.net/10s/prod/v1/2018/players.json')
  .then(res => {
  players= res['data']['league']['standard']
  })
app.listen(port,function(){
    // console.log("")
})
