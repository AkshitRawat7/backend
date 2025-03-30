const { application } = require("express");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
// const movieModel = require('./models/movieModel');
const userModel = require("./model/UserModel");
const emailSender = require("./utility/EmailSender");


require("dotenv").config();

// MongoDB connection string with sensitive info coming from .env
const dbLink = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@atlascluster.6faby.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=AtlasCluster`;

mongoose.connect(dbLink)
  .then(function (connection) {
    console.log("Connected to DB:");
  })
  .catch((err) => console.log("Error connecting to DB:", err));

// Middleware should be used before handlers 
app.use(express.json());
app.use(cookieParser());

  //to check wether the user have a valid token or not
//   async function protectRouteMiddleware(req, res, next) {
//     try {
//       const token = req.cookies.jwt;
  
//       if (!token) {
//         return res.status(401).json({
//           message: "Unauthorized access",
//           status: "failure"
//         });
//       }
  
//       const result = await promisediedJWTverify(token, process.env.JWT_SECRET_KEY);
  
//       //token identifier
//       req.id = result.id;
//       next();
//     } catch (err) {
//       console.log("error", err);
//       return res.status(500).json({
//         message: "Internal server error",
//         status: "failure"
//       });
//     }
//   }

//   async function isAdminMiddleWare(req,res,next){
//     try{
//       const userId = req.id;
//       const user = await userModel.findById(userId);
  
//       if(!user){
//         res.staus(404).json({
//           message:"User not Found",
//           status:"Failure"
//         })
//         if(user.role !== "admin"){
//           return res.status(403).json({
//             message:"Access Denied , admin only",
//             status:"Failure"
//           })
//         }
  
//         else{
//           next();
//         }
  
//       }
//     }catch(err){
//       res.status(500).json({
//         mesage:err.message,
//         status:"Failure"
//       })
//     }
//   }
  
//   async function profileHandler(req, res) {
//     try {
//       const userId = req.id;
//       const user = await userModel.findById(userId);// Corrected this line
  
//       if (!user) {
//         return res.status(404).json({
//           message: "User not found",
//           status: "Failure"
//         });
//       }
  
//       res.json({
//         message: "Profile retrieved successfully",
//         status: "success",
//         user: user
//       });
//     } catch (err) {
//       res.status(500).json({
//         message: err.message,
//         status: "Failure"
//       });
//     }
//   }
  
//   async function logoutHandler(req,res){
//     try{
//       res.clearCookie('jwt', {path:"/"});
//       res.json({
//         message:"logout successfully",
//         status:"Failure"
//       })
//     }catch(err){
//       res.status(500).json({
//         message:err.message,
//         status:"Failure"
//       })
//     }
//   }
//Signup

const AuthRouter = require("./Routers/AuthRouter");
const MovieRouter = require("./Routers/MoviesRouters");
const TvShowsRouter = require("./Routers/TvRouter");
const DiscoverRouter = require("./Routers/DiscoverRouter");

app.use("/api/auth", AuthRouter);
app.use("/api/movies", MovieRouter);
app.use("/api/tv", TvShowsRouter);
app.use("/api/discover", DiscoverRouter);



// fetching the data from TMDB api

app.listen(3000 ,function(){
    console.log("Server starrted on port 3000")
})