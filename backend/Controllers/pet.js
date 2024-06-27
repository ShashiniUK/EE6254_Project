import { request } from 'express';
import { Pet } from '../models/petsModel.js';
export const createPet = async(request,response,next) => {  try {
    if (
      !request.body.Name ||
      !request.body.Category ||
      !request.body.birthday ||
      !request.body.Gender ||
      !request.body.Discription
    ) {
      return response.status(400).send({
        message:
          "send all required feilds: Name, Catogery, birthday, Gender, Discription",
      });
    }
    const newPet = {
      Name: request.body.Name,
      Category: request.body.Category,
      birthday: request.body.birthday,
      Gender: request.body.Gender,
      Discription: request.body.Discription,
    };
    const pet = await Pet.create(newPet);
    return response.status(201).send(pet);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }

}

export const getPet = async (request,response,next) =>{
    try {
        const { id } = request.params;
    
        // Assuming 'id' is already a string, not an object
        const pet = await Pet.findById(id);
    
        if (!pet) {
          return response.status(404).json({ message: "Pet not found" });
        }
    
        return response.status(200).json(pet);
      } catch (error) {
        console.log(error.message);
        response.status(500).json({ message: error.message });
      }
}

export const updatePet = async (request,response,next) =>{
    try {
        if (
          !request.body.Name ||
          !request.body.Category ||
          !request.body.birthday ||
          !request.body.Gender ||
          !request.body.Discription
        ) {
          return response.status(400).send({
            message:
              "send all required feilds: Name, Category, birthday, Gender, Discription",
          });
        }
    
        const { id } = request.params;
    
        const result = await Pet.findByIdAndUpdate(id, request.body);
        if (!result) {
          return response.status(404).json({ message: "Pet not found" });
        }
        return response
          .status(200)
          .send({ message: "pet details updated successfully" });
      } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
      }
    
}

export const deletePet = async (request,response,next) =>{
    try {
        const { id } = request.params;
        const result = await Pet.findByIdAndDelete(id);
    
        if (!result) {
          return response.status(404).json({ message: "Pet not found" });
        }
        return response
          .status(200)
          .send({ message: "pet details deleted successfully" });
      } catch {
        console.log(error.message);
        response.status(500).send({ message: error.message });
      }
    
}
export const getAllPets = async(request,response,next) => {
    try {
        const pets = await Pet.find({});
        return response.status(200).json({
          count: pets.length,
          data: pets,
        });
      } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
      }
}

