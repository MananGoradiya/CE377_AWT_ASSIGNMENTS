const mysql = require("mysql");
const mysqlconnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'university'

});

mysqlconnection.connect((err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Connected to mysql");
    }
})


const express = require("express");
//const schema=require("./schema");
//const database=require("./database");
//db = "mongodb://localhost:27017/manan";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("Homepage");
})


app.post("/", (req, res) => {

    const cId = req.body.cId;
    const dName = req.body.dName;
    const cName = req.body.cName;
    const insName = req.body.insName;

    // const insName2=req.body.inssName2;
    const uniName = req.body.uniName;
    console.log(cId);


    mysqlconnection.query("INSERT INTO `unischema`(`courseId`, `courseName`, `insName`, `uniName`) VALUES (?,?,?,?)", [cId, cName, insName, uniName], (err, rows, field) => {
        if (err) {
            console.log(err);
        }
        else {
            //console.log("Rows "+rows);
            //console.log("field "+field);
            res.render("Homepage");
        }
    });

})


app.get("/showData", (req, res) => {
    // res.render("showData",{error: false});
    mysqlconnection.query("SELECT * FROM `unischema` WHERE 1", (err, rows, field) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(rows[0].courseName);
            res.render("showData", { data: rows });
        }
    })


})


app.post("/showData", (req, res) => {
    // res.render("showData",{error: false});
    const cId = req.body.cId;
    console.log(req.body.cId);


    mysqlconnection.query("SELECT `courseId`, `courseName`, `insName`, `uniName` FROM `unischema` WHERE courseId=?", [cId], (err, rows, field) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render("edit", { data: rows });

        }


    })

});




app.get("/edit", (req, res) => {
    //res.render("update");
    // const id=req.params.id;
    //console.log(req.params.id);
    res.send("okayy");


})




app.post("/showData/edit", (req, res) => {
    // console.log(req);

    mysqlconnection.query("UPDATE `unischema` SET `courseId`=?,`courseName`=?,`insName`=?,`uniName`=? WHERE 1", [cId, cName, insName, uniName], (err, rows, fields) => {

        if (err) {
            console.log(err);
        }
        else {
            console.log("Updated");
            // res.render("showData",{data:rows});
            res.send("okay");
        }




    });





})

app.get("/showData/Homepage", (req, res) => {
    res.render("Homepage");
})


app.post("/showData/Homepage", (req, res) => {
    const cId = req.body.cId;
    const dName = req.body.dName;
    const cName = req.body.cName;
    const insName = req.body.insName;

    // const insName2=req.body.inssName2;
    const uniName = req.body.uniName;
    console.log(cId);

    //const quee="INSERT INTO `unischema`(`courseId`, `courseName`, `insName`, `uniName`) VALUES (?,?,?,?)",[cId,cName,insName,uniName],
    mysqlconnection.query("INSERT INTO `unischema`(`courseId`, `courseName`, `insName`, `uniName`) VALUES (?,?,?,?)", [cId, cName, insName, uniName], (err, rows, field) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(cId);
            console.log(cName);
            res.render(insName);
        }
    });
})



app.listen("3000", () => {
    console.log("listening to the port on 3000...");
})