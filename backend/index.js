import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Pet } from './models/petsModel.js';
import petsRoute from './routes/petsRoute.js';
import cors from 'cors';
import usersRoute from './routes/usersRoute.js';
//import authRoute from './routes/auth.js';
//import employeeRoute from "./routes/employeeRoute.js";


const app = express();

//Middleware for passing request body
app.use(express.json());

app.use(cors());
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET','POST','PUT', 'DELETE'],
//         allowedHeaders: [],
//     })
// );
// app.get('/products/:id', function (req, res, next) {
//     res.json({msg: 'This is CORS-enabled for all origins!'});
//   });
  
//   const PORT = 3456;
  
//   app.listen(PORT, function () {
//     console.log(`CORS-enabled web server listening on port ${PORT}`);
//   });

app.get('/', (request,response) => {
    console.log(request);
    return response.status(234).send('Welcome To Sepet PetCare Center');
});

app.use('/pets', petsRoute);
//app.use('/employee', employeeRoute)

//app.use('/auth', authRoute);
app.use('/users', usersRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
        

    })
    .catch((error) =>{
        console.log(error);

    });