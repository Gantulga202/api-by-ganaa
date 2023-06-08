const express = require('express')
const app = express()
const PORT = 8000

const lolchamps = {
    'miss fortune': {
        'Gender': 'female',
        'type': 'range',
        'ability': 'AD'
    },
    'trundle': {
        'Gender': 'neutral',
        'type': 'melee',
        'ability': 'AD'
    },
    'kassadin': {
        'Gender': 'male',
        'type': 'melee',
        'ability': 'AP'
    }
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get( '/api/:name', (req, res)=>{
    const lolchamp = req.params.name.toLowerCase()
    if( lolchamps[lolchamp] ){
        res.json(lolchamps[lolchamp])
    }else{
        res.json('Unknown champ')
    }
} )

app.listen( process.env.PORT || PORT, ()=>{
    console.log(`Server is running on port ${PORT}!`)
})