
/*[
    {
        "Name": "Eduard",
        "SecondName": "Fernandez",
        "DocumentID": "3XXXXXXXX",
        "Sex": "male",
        "Grades": "20",
        "Birthdate": "02/02/2003",
        "id": "1"
    }
]*/
const express = require('express');
const app = express();
let port = 3000;

app.use(express.json());
app.use(express.urlencoded());



var students = []

app.get("/api/student", (request,response) =>{

    response.send(students);

    const { grade } = req.params;
});

app.post("/api/student", (request,response) =>{

   console.log(request.body);
   response.send(201);

   students.push(request.body);

});

app.delete("/api/student/:id", (req,res)=>{
    const { id } = req.params;
 
    const deleted = students.find(students => students.id === id)
    console.log(deleted);
    if(deleted){
        console.log(deleted);
        students = students.filter(students => students.id != id)
        res.status(200).json(deleted);
    }else{
        console.log(deleted);
        res
        .status(404)
        .json({message: "no existe"})
    
    }
 

});



app.listen(port, () =>{
    console.log(`Example app listening on port http://localhost:${port}`)
})


