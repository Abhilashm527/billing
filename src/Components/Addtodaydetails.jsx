
import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import "../style/Adddaydetails.css"; // Import the CSS file

const Addtodaydetails = () => {
  const now = new Date();
const istOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds (5 hours and 30 minutes)
const istDateTime = new Date(now.getTime() + istOffset);
const formattedDateTime = istDateTime.toISOString().slice(0, 16);
  const [date, setDate] = useState(formattedDateTime);
  const [autocompleteOptions, setAutocompleteOptions] = useState([]);
  const [selectedFarmer, setSelectedFarmer] = useState(null);
  const [inputValue, setInputValue] = useState(""); 
  const [selectedFarmerId, setSelectedFarmerId] = useState("");

  const [expenses, setExpenses] = useState([
    {
      item: "",
      quality: "Good",
      amount: "",
      isCash: true,
    },
  ]);
  useEffect(() => {
    fetchAutocompleteOptions();
  }, []);

  const fetchAutocompleteOptions = async () => {
    try {
      const response = await axios.get("http://localhost:8080/getAllFarmers");
      setAutocompleteOptions(response.data);
    } catch (error) {
      console.error("Error fetching autocomplete options:", error);
    }
  };
  const handleAutocompleteInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    setInputValue(value); // Update the input value
    const selectedFarmer = autocompleteOptions.find(option => option.name.toLowerCase() === value);
    setSelectedFarmer(selectedFarmer); // Set selected farmer object
    setSelectedFarmerId(selectedFarmer ? selectedFarmer.id : "");
  };
 
  console.log(autocompleteOptions);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleAddRow = () => {
    setExpenses([...expenses, { category: "", item: "", quality: "Good", amount: "", isCash: true }]);
  };

  const handleDeleteRow = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  const handleExpenseChange = (index, field, value) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index][field] = value;
    setExpenses(updatedExpenses);
  };

  const handleToggle = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index].isCash = !updatedExpenses[index].isCash;
    setExpenses(updatedExpenses);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const postObject = {
      farmerId: selectedFarmerId,
      date: date,
      data: expenses.map((expense) => ({ ...expense })),
    };
  
    try {
      const response = await axios.post("http://localhost:8080/addFarmerDaydetails", postObject);
      console.log("Response from server:", response.data);
      // You can add further logic here to handle the response
    } catch (error) {
      console.error("Error submitting expenses:", error);
      // Handle the error here
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
      <label>Date:</label>
      <input type="datetime-local" className="form-input"value={date} onChange={(event) => setDate(event.target.value)} />
        {expenses.map((expense, index) => (
          <div key={index}>
           {/* Replace the "Category" input */}
           <label className="form-label">Search Farmer:</label>
        <input
          type="text"
          onChange={handleAutocompleteInputChange}
          className="form-input"
          placeholder="Search farmer..."
        />
        {selectedFarmer && (
          <div>
           <p> Farmer Name: {selectedFarmer.name}</p>
            <p> Farmer ID: {selectedFarmer.id}</p>
            <p> Farmer Address: {selectedFarmer.Address}</p>
          </div>
        )}
            <br />
            <label className="form-label">Item:</label>
            <input
              type="text"
              value={expense.item}
              onChange={(event) => handleExpenseChange(index, "item", event.target.value)}
              className="form-input"
            />
            <br />
            <label className="form-label">Quality:</label>
            <select
              value={expense.quality}
              onChange={(event) => handleExpenseChange(index, "quality", event.target.value)}
              className="form-input"
            >
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
              <option value="Poor">Poor</option>
            </select>
            <br />
            <label className="form-label">Cash/Quantity:</label>
            <select
              value={expense.isCash ? "Cash" : "Quantity"}
              onChange={() => handleToggle(index)}
              className="form-input"
            >
              <option value="Cash">Cash</option>
              <option value="Quantity">Quantity</option>
            </select>
            <br />
            {expense.isCash ? (
              <div>
              <label className="form-label">Amount:</label>
              <input
                type="text"
                value={`Rs ${expense.amount}`}
                onChange={(event) =>
                  handleExpenseChange(index, "amount", event.target.value.substring(3))
                }
                className="form-input"
              />
            </div>
          ) : (
            <div>
              <label className="form-label">Quantity:</label>
              <input
                type="number"
                step="0.01"
                value={expense.amount}
                onChange={(event) => handleExpenseChange(index, "amount", event.target.value)}
                className="form-input"
              />
            </div>
          )}
            <br />
            <button
              type="button"
              onClick={() => handleDeleteRow(index)}
              className="form-button delete-button"
            >
              Delete Row
            </button>
            <hr className="form-hr" />
          </div>
        ))}
        <button type="button" className="add-button" onClick={handleAddRow}>
          +
        </button>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addtodaydetails;
