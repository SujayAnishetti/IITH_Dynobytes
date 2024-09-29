import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios'; // Import Axios

const Marketplace = () => {
  const [shirts, setShirts] = useState([]);

  useEffect(() => {
    // Fetch data from the Node.js backend
    axios.get('http://localhost:5000/api/shirts')
      .then((response) => {
        setShirts(response.data); // Set the fetched data
      })
      .catch((error) => {
        console.error('Error fetching shirts:', error);
      });
  }, []);

  return (
    <div className="marketplace p-5 bg-gray-100 min-h-screen">
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-4 gap-6">
        {shirts.map((shirt) => (
          <div key={shirt.id} className="shirt-card transition-transform transform hover:scale-105 border rounded-lg shadow-lg p-3 bg-white">
            <Link to={`/product/${shirt.id}`}>
              <img src={shirt.image} alt={shirt.name} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h2 className="text-lg font-medium">{shirt.name}</h2>
                <p className="text-gray-500">{shirt.price}</p>
                <p className="text-sm text-gray-600 mt-1">Made by: {shirt.manufacturer}</p>
                <p className="text-sm text-gray-500 mt-1">{shirt.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
