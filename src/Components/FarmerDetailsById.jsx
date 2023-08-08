import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FarmerDetailsById = ({ farmerId }) => {
  const [farmerData, setFarmerData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch farmer data by ID using axios
    const url = `http://localhost:8080/getFarmer/${farmerId}`;
    axios
      .get(url)
      .then((response) => {
        setFarmerData(response.data);
        setError(null);
      })
      .catch((error) => {
        setError('Error fetching data. Farmer not found or an error occurred.');
      });
  }, [farmerId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!farmerData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Farmer Details</h2>
      <p>Name: {farmerData.name}</p>
      <p>Phone Number: {farmerData.PhoneNumber}</p>
      <p>Address: {farmerData.Address}</p>
    </div>
  );
};

export default FarmerDetailsById;
