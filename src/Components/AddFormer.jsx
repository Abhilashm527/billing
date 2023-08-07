import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import '../style/Card.css'
const AddFormer = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    phonenumber: '',
    address: '',
  });

  const submitForm = (event) => {
    event.preventDefault();
    // You can perform any actions you want with the user details here
    console.log('User Details:', userDetails);
    // You can also emit an event to send the data to a parent component if needed
    // this.props.onUserDetailsSubmitted(userDetails);
  };

  return (
    <div>
      {/* <h2>ಹೊಸ ರೈತರನ್ನು ಸೇರಿಸಿ</h2> */ }
      <h2>Add </h2>
      <form onSubmit={submitForm} acceptCharset="UTF-8">
        <div>
          <label htmlFor="name" lang='kn'> name{/* <h2>ಹೊಸ ರೈತರನ್ನು ಸೇರಿಸಿ</h2> */}</label>
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
          <label htmlFor="phonenumber" lang='kn'> dhjs{/* <h2>ಹೊಸ ರೈತರನ್ನು ಸೇರಿಸಿ</h2> */}</label>
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
          <label htmlFor="address" lang='kn'> fds{/* <h2>ಹೊಸ ರೈತರನ್ನು ಸೇರಿಸಿ</h2> */}</label>
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
          <button type="submit" lang='kn'>fds {/* <h2>ಹೊಸ ರೈತರನ್ನು ಸೇರಿಸಿ</h2> */}</button>
        </div>
      </form>
    </div>
  );
};

export default AddFormer;
