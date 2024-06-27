// import { Employee } from '../models/employee.js';
// import bcrypt from "bcryptjs";
// import { createError } from "../utils/error.js";
// import jwt from 'jsonwebtoken'

// export const register = async (request, response, next) => {
//     try{

//         const salt = bcrypt.genSaltSync(10);
//         const hash = bcrypt.hashSync(request.body.Password, salt);

//         const newEmployee = new Employee({
//             username:request.body.username,
//             Email: request.body.Email,
//             Password:hash,
//         })
//         await newEmployee.save()
//         response.status(200).send("user has been created")

//     }catch(error){
//         console.log(error.message);
//         response.status(500).send({ message: error.message });


//     }
   
// };
// export const login = async (request, response, next) => {
//     try {
//         const employee = await Employee.findOne({ username: request.body.username });

//         if (!employee) {
//             return next(createError(404, "User not found"));
//         }

//         const isPasswordCorrect = await bcrypt.compare(request.body.Password, employee.Password);

//         if (!isPasswordCorrect) {
//             return next(createError(400, "Wrong password or username"));
//         }
        
//     // const token = jwt.sign(
//     //     { id: user._id, isAdmin: user.isAdmin },
//     //     "sdfsdfs"
//     //   );
  

//         const { Password, isAdmin, ...otherDetails } = employee._doc;
//         response.status(200).json(otherDetails);
//     } catch (error) {
//         console.log(error.message);
//         response.status(500).send({ message: error.message });
//     }
// };


// // export const register =async(req, res, next) =>{
// //    try{
// //     const newEmployee = new Employee({
// //         email:req.body.Email,
// //         password: req.body.password,
// //     })
// //     await newEmployee.save()
// //     res(200).send("user has been created")
// //    }catch{
// //     console.log(error.message);
// //     response.status(500).send({ message: error.message })
// //    }
// // }
 