let express = require("express");
let path = require("path");
let logger = require("morgan");
let mainRoute = require("./routes/index") ;
let app = express();
let PORT = 4000;
// view engine setup
app.set ("views", path.join(__dirname, "./views"));
    app.set ("view engine", "ejs");


// middlewares
app.use( logger ("dev"));
app.use(express.json());
app.use (express. urlencoded ({ extended: false }));
//For statis files
app.use(express.static(path.join(__dirname,"./public")));
app.use(express.static(path. join( dirname,"./node_modules")));
//For routes 
app.use("/", mainRoute);
app. listen(PORT, () =>{
console.log('Server is running on port ${PORT} ');
});