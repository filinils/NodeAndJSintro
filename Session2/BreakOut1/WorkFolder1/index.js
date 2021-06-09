const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get("/todo",(req,res)=>{
    res.send({name:"MyToDo",status:"NEW"})
    })
app.listen(port, () => {
        console.log(`API started - Running on Port ${port}`);
      });