// import express from "express";
// import { Employee } from "../models/employee.js";

// const router = express.Router();

// router.post("/signup", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if an employee with the given email already exists
//     const existingEmployee = await Employee.findOne({ Email: email });

//     if (existingEmployee) {
//       return res.status(400).json("exist");
//     }

//     // If the employee does not exist, create a new employee
//     const newEmployee = new Employee({ Email: email, Password: password });
//     await newEmployee.save();

//     res.status(201).json("notexist");
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json("error");
//   }
// });

// export default router;
