const express = require("express")
const userRoute = express.Router();
const  usermodel = require("../models/user.model.js");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const token = process.env.token
const validatePassword =require("../helpers/PassValidation.js")
const Enc_Dec = require("../helpers/Enc_Dec.js")


exports.GetAllUser = async (req, res) => {
    
    try {
        const user  = await usermodel.find();
        if (user.length>0){
        res.status(200).send(user)
        }else{
        res.status(200).send("Dont have Users To Show...")
        }
    } catch (error) {
        console.log(error);
    }
};
exports.GetSearchedUser = async (req, res,next) => {
    try {
        let params = req.body || '';
        let searchParam = params.search;
        let filter = {};
        if (searchParam) {
            filter.$or = [
                { client_code: { $regex: searchParam, $options: 'i' } }, // i option for case-insensitive search
                { client_name: { $regex: searchParam, $options: 'i' } }
            ];
        }

        //let AllSearchedUser = await usermodel.find(filter);
        let AllSearchedUser = await usermodel.aggregate([
            { $match: filter },
            {
                $addFields: {
                    name: { $concat: ["$Name", " - ", "$Email"] },
                    value: "$Name"
                }
            },
            { $unset: ["Name", "Email"] }, // Remove original fields if needed
            {
                $project: {
                    _id: 0,
                    value:1,
                    name: 1 // Include only the value field
                }
            }
        ]);
        return res.status(200).json(AllSearchedUser)
        //return { status: true, statusCode: 200, error: false, data: AllSearchedUser };
    }
    catch (error) {
        console.log(error);
        next(error)
    }
};
exports.Login = async (req, res) => {
    let {Email,Password}=req.body;
    const user  = await usermodel.find({Email});
    var getData = JSON.stringify(user);
    var data = JSON.parse(getData);
    console.log(req.body);
    try{
       
        if (user.length>0){
            const pass = data[0]["Password"];
            // let npass = Enc_Dec.DecryptPass(pass);            
                if (Password == pass){
                    let keyToken= jwt.sign({userId:user[0]._id},token)//setting up a token using the '_id' in user model
                    data={
                        keyToken:keyToken,
                        Name:user[0].Name,
                        Email:user[0].Email
                    }
                    console.log(data);
                    res.send(data)
                }else{
                    res.status(500).send("Enter Valid Password ")
                }    
        }
        else{
            res.status(500).send("User not found ...!")
        }
    }catch(error){
        console.log(error);
        res.status(500).send("invalid Credentials3 ")
    }
};
exports.Register = async (req, res) => {
    const { Name , Email ,Password }=req.body
    const getExistingUser = await usermodel.find({ Email: Email });      
    console.log(req.body);
    // const valid = validatePassword(Password)
    // if(valid){
    //     return res.status(400).send({message:valid[0]})
    // }
    try{

        if (getExistingUser != "") {
            return res.send({ status: "failed", message: "Email already exist." });
          }else{
            // console.log("Password",Password);
            //     var Encpass = Enc_Dec.EncryptPass(Password);
                const user = new usermodel({
                    Password:Password,
                    Name:Name,
                    Email:Email})//the password from the body and hashed password is different
                await user.save();
                res.send("User Registered Successfully");          
            }
       
    
    }catch(err){
        console.log(err);
        res.send("Error...");
    }
};


exports.Edit = async (req, res) => {
    const { id } = request.body;
    try {
      const result = await usermodel.findById(id);
      response.send({
        status: "success",
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
};




exports.Update = async (req, res) => {
    const {Password, Name , Email }=req.body
    const getExistingUser = await usermodel.find({ Email: Email });   
    let User = await usermodel.findById(req.params.id); 
    if (req.body.Password != '' ){
        const valid = validatePassword(Password)
        if(valid){
            return res.status(400).send({message:valid[0]})
        }
    }

    try{

        if (getExistingUser != "") {
            return res.send({ status: "failed", message: "Email already exist." });
          }else{
            if (!User) {
                return res.status(404).json({ message: 'User not found' });
            }
    
            if (req.body.Name != '') {
                User.Name = req.body.Name;
            }
            if (req.body.Password != '') {
                User.Password = req.body.Password;
            }
            if (req.body.Email != '') {
                User.Email = req.body.Email;
            }
                // var Encpass = Enc_Dec.EncryptPass(Password);
                const user =  await User.save();
                res.status(200).json({ message: 'User Updated Successfully :', user});      
            }
        
    
    }catch(err){
        console.log(err);
        res.send("Error...");
    }
};

exports.DeleteUser = async (req, res) => {
    console.log(req.params.id);
    try {
        let User = await usermodel.findById(req.params.id);
        console.log(User); // Check what User object is returned
        if (!User) {
            return res.status(404).json({ message: 'User not found' });
        }
        let delete1 = await usermodel.findByIdAndDelete({_id:req.params.id});
        res.status(200).json({ message: 'User deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

exports.Logout = async (req, res) => {
    if (req.cookies) {
        Object.keys(req.cookies).forEach((cookie) => {
            res.clearCookie(cookie);
        });
    }
    req.session.destroy(err => {
        if (err) {
            console.error('Error destroying session:', err);
        } 
        else {
            res.send('Logged Out');
        }
    });
}

