
const express = require("express")
const port = 8888
const path = require('path');
const app = express()





app.get('/', (req,res) => {
    
return res.sendFile(path.join(__dirname+'/index.html'));
}
)
app.get('/login', (req,res) => {
    
    return res.sendFile(path.join(__dirname+'/login.html'));
    }
    )


app.listen(port,(err) => {
    if(err){
        console.log("Error");
    }else{
        console.log("Server is up on port", port);
    }
})