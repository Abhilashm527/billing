import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FarmerDetails = () => {
  const [farmersData, setFarmersData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all farmers' data using axios
    const url = 'http://localhost:8080/getAllFarmers';
    axios
      .get(url)
      .then((response) => {
        setFarmersData(response.data);
        setError(null);
      })
      .catch((error) => {
        setError('Error fetching data. An error occurred.');
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (farmersData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>All Farmers Data</h2>
      <table>
        <thead>
          <tr>
          <th>Serial No</th>
            <th>Ids</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {farmersData.map((farmer,index) => (
            <tr key={farmer.id}>
               <td>{index + 1}</td>
               <td>
                <Link to={`/farmer/${farmer.id}`}>{farmer.id}</Link>
              </td>
              <td>{farmer.name}</td>
              <td>{farmer.PhoneNumber}</td>
              <td>{farmer.Address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FarmerDetails;
