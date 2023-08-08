import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import axios from 'axios';

const AddFormer = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    PhoneNumber: '',
    Address: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const submitForm = (event) => {
    event.preventDefault();

    // Make a request to the API using axios
    const url = 'http://localhost:8080/addFarmer';
    const data = {
      name: userDetails.name,
      PhoneNumber: userDetails.phonenumber,
      Address: userDetails.address,
    };
    axios.post(url, data).then((response) => {
      if (response.status === 200) {
        setSuccessMessage('Farmer added successfully');
      } else {
        alert('An error occurred');
      }
    });
  };

  return (
    <div>
      <h2>ಹೊಸ ರೈತರನ್ನು ಸೇರಿಸಿ</h2> 
      <h2>Add </h2>
      <form onSubmit={submitForm} acceptCharset="UTF-8">
        <div>
          <label htmlFor="name" lang='kn'>ಹೆಸರು</label>
          <input
            type="text"
            id="name"
            value={userDetails.name}
            onChange={(e) =>
              setUserDetails({ ...userDetails, name: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="phonenumber" lang='kn'>ಮೊಬೈಲ್ ನಂಬರ</label>
          <input
            type="number"
            id="phonenumber"
            value={userDetails.phonenumber}
            onChange={(e) =>
              setUserDetails({ ...userDetails, phonenumber: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="address" lang='kn'>ವಿಳಾಸ</label>
          <textarea
            id="address"
            value={userDetails.address}
            onChange={(e) =>
              setUserDetails({ ...userDetails, address: e.target.value })
            }
            required
          />
        </div>
        <div>
          <button type="submit" lang='kn'>ಸಲ್ಲಿಸು</button>
        </div>
        {successMessage && (
          <div>
            <p>{successMessage}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default AddFormer;
