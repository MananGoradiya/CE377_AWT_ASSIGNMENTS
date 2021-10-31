const mongoose = require("mongoose");
db = "mongodb://localhost:27017/manan";
const dbConnection=mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(console.log("connection to database successful")).catch("Unable to connecct to database");
module.exports=dbConnection;

