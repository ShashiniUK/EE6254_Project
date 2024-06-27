// // import express from "express";
// import { Employee } from "../models/employee.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// const router = express.Router();

// router.post("/login", async (req, res, next) => {
//     try {
//         const { email, password } = req.body;

//         // Find the employee with the provided email
//         const employee = await Employee.findOne({ Email: email });

//         if (!employee) {
//             return res.status(401).json({ message: "Employee not found" });
//         }

//         // Compare the provided password with the stored hash
//         const passwordMatch = await bcrypt.compare(password, employee.Password);

//         if (!passwordMatch) {
//             return res.status(401).json({ message: "Invalid password" });
//         }

//         // Generate a JWT token and send it as a response
//         const token = jwt.sign({ userId: employee._id }, "your-secret-key");

//         res.status(200).json({ token });
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ message: error.message });
//     }
// });

// export default router;
