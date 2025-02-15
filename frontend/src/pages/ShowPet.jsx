import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; 
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowPet = () => {
  const[pet, setPet] = useState({});
  const[loading, setLoading ] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8005/pets/${id}`)
      .then((response) => {
        setPet(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [])
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Show Pet</h1>
      {loading? (
        <Spinner/>
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-x1 w-fit p-4'>
          <div className ='my-4'>
            <span className= 'text-x1 mr-4 text-gray-500'>Id</span>
            <span>{pet._id}</span>
          </div>
          <div className ='my-4'>
            <span className= 'text-x1 mr-4 text-gray-500'>Name</span>
            <span>{pet.Name}</span>
          </div>
          <div className ='my-4'>
            <span className= 'text-x1 mr-4 text-gray-500'>Category</span>
            <span>{pet.Category}</span>
          </div>
          <div className ='my-4'>
            <span className= 'text-x1 mr-4 text-gray-500'>Gender</span>
            <span>{pet.Gender}</span>
          </div>
          <div className ='my-4'>
            <span className= 'text-x1 mr-4 text-gray-500'>Discription</span>
            <span>{pet.Discription}</span>
          </div>
          <div className ='my-4'>
            <span className= 'text-x1 mr-4 text-gray-500'>birthday</span>
            <span>{pet.birthday}</span>
          </div>

        </div>
      )}
    </div>
  );
};

export default ShowPet

