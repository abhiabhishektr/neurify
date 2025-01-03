import userModel from "../model/userModel"



export const saveUser= (request, response)=>{
const {name,email,password,bio}=req.body
const newUser = new userModel({name,email,password,bio});
newUser.save();

response.status(201).json({message:"user created"})
}

export const updateUser= (request, response)=>{

    
}

export const deleteUser= (request, response)=>{

    
}
export const showUser= (request, response)=>{
    const {name,email,password,bio}=req.body
    
}