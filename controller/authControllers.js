const userModel = require("../model/UserModel");
const jwt = require("jsonwebtoken");
const promisify = require("util").promisify;
const promisifiedJWTSign = promisify(jwt.sign);
const promisifiedJWTVerify = promisify(jwt.verify);
// const otpGenerator = require("../utility/generateOtp");
const { JWT_SECRET } = process.env;


async function signupHandler(req, res) {
    try {
      const userObject = req.body;
  
      if (!userObject.email || !userObject.password) {
        return res.status(400).json({
          message: "Required data is missing",
          status: "failure",
        });
      }
  
      const user = await userModel.findOne({ email: userObject.email });
  
      if (user) {
        return res.status(400).json({
          data: "User is already registered",
          status: "failure",
        });
      }
  
      let newUser = await userModel.create(userObject);
      return res.status(201).json({
        message: "User created successfully",
        user: newUser,
        status: "success",
      });
  
  
      //user Email varification OTP
      
    } catch (err) {
      return res.status(500).json({
        message: err.message,
        status: "failure",
      });
    }
  }
  
  //LOGIN
  async function loginHandler(req, res) {
    try {
      const { email , password } = req.body
      const user = await userModel.findOne({email})
  
      if(!user){
        return res.status(404).json({
          message:"Invalid email or password",
          status:"failure"
        })
      }
  
      const areEqual = password == user.password;
  
      if(!areEqual){
        return res.status(404).json({
          message:"Invalid email or password",
          status:"failure"
        })
      }
  
      //generate token
      const authToken = await promisifiedJWTSign({ id:user["_id"] },process.env.JWT_SECRET_KEY);
  
      res.cookie("jwt",authToken, {
        maxAge:1000*60*60*24,
        httpOnly:true,
      })
  
      res.status(200).json({
        message:"Login Successfully",
        status:"Success",
        user:user
      })
  
    } catch (err) {
      return res.status(500).json({
        message: err.message,
        status: "failure",
      });
    }
  }
  
const optGenerator = function(){
  return Math.floor(100000 + Math.random() * 900000);
}

async function forgetPasswordHandler(req,res){
  try{

    //1
    if(req.body.email == undefined){
      return res.status(401).json({
        status: "failure",
        message: "Please enter the email for Forget Password"
      })
    }

    
    // 2
    const user =  await userModel.findOne({email: req.body.email});
    if(user == null){
      return res.status(401).json({
        status: "failure",
        message: "User not found for this email"
      })
    }

    // 3
    const otp = optGenerator();
    user.otp = otp;
    user.otpExpiry = Date.now() + 1000 * 60 * 10;

    //4 now  them in the db
    await user.save({validateBeforeSave: false});

    emailSender("./templates/otp.html",user.email, {name:user.name , otp:user.otp})
    // send email
    return res.status(200).json({
      status: "Success",
      messag: "OTP send successfully",
      otp: user.otp,
      // to make a unique URL
      resetURL: `http:localhost:3000/api/auth/resetPassword/${user["_id"]}`
    })
  } catch(err){
    console.log("err" , err);

    return res.status(500).json({
      status:  "failure",
      message: err.message
    })
  }
}

async function resetPasswordHandler(req,res){
      //  -> otp 
    //  newPassword and newConfirmPassword 
    // -> params -> id 
    try {
      const {email, password, confirmPasword, otp } = req.body;
      /****
       * 1. search user using id
       * 
       *      a.  not found -> invalid otp or session  
       *      b. it's found 
       *                  -> get the token  is matching&&check it's expiry>currentTime 
       *                          -> update the user's password
       *                              
       * **/

      const user = await UserModel.findOne({ email });
      if (user) {
          if (otp && user.token == otp) {
              let currentTime = Date.now();
              if (currentTime < user.otpExpiry) {
                  user.confirmPassword = confirmPasword;
                  user.password = password;
                  delete user.token;
                  delete user.otpExpiry
                  await user.save();
                  res.status(200).json({
                      "status": "success",
                      message: "your password is updated"
                  })
              }
          } else {
              res.status(404).json({
                  status: "failure",
                  message: "otp is not found or wrong"
              })
          }

      } else {
          res.status(404).json({
              status: "failure",
              message: "no user with this email id found"
          })
      }
  } catch (err) {
      res.status(500).json({
          message: err.message,
          status: "failure"
      })
  }
}  

/*****************middleware**********************/

const protectedRouteMiddleWare = async function(req,res,next){
  try{
    let jwttoken = req.cookies.JWT;
    if(!jwttoken) throw new Error("UnAuthorized!");

    let decryptedToken = await promisifiedJWTVerify(jwttoken, JWT_SECRET);

    if(decryptedToken){
      let userId = decryptedToken.id;
      // adding userId to the req object

      req.userId = userId;
      console.log("authenticated");
      next();
    }
  }catch(err){
    res.status(500).json({
      message: err.message,
      status:"failure"
    })
  }
}

module.exports = {
    signupHandler,
    loginHandler,
    forgetPasswordHandler,
    resetPasswordHandler,
    protectedRouteMiddleWare,
    logoutController
}