import express from 'express';
import { Pet } from '../models/petsModel.js';
import { createPet } from '../Controllers/pet.js'
import { deletePet, getAllPets, getPet, updatePet } from '../Controllers/pet.js';
const router = express.Router();

router.post("/", createPet);
//Route for Get all pets from database
router.get("/", getAllPets);

//Route for Get one pet from database by id
/*app.get('/:id', async(request, response ) =>{
    try{

       const { id } = request.params;
       


        const pet = await Pet.findById(id);
        return response.status(200).json(pet);

    } catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});

    }
}) ;*/

router.get("/:id", getPet);
//route for a update book
router.put("/:id", updatePet);

//Route for delete a pet
router.delete("/:id", deletePet);
export default router;
