import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const naivagate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    email: "",
    phone: "",
    zipcode: "",
    additionalInfo: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const requiredFields = [
      "firstName",
      "lastName",
      "city",
      "email",
      "phone",
      "zipcode",
      "additionalInfo",
    ];
    const trimmedFormData = {};

    for (const field of requiredFields) {
      const value = formData[field].trim();
      if (!value) {
        alert("Please fill out required fields.");
        return;
      }
      trimmedFormData[field] = value;
    }

    localStorage.setItem("formData", JSON.stringify(trimmedFormData));
    naivagate("/form");
  };

  return (
    <div className="container mt-5">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <textarea
            className="form-control"
            id="address"
            name="address"
            rows="3"
            value={formData.address}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="zipcode" className="form-label">
            Zip Code
          </label>
          <input
            type="text"
            className="form-control"
            id="zipcode"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="additionalInfo" className="form-label">
            Additional Information
          </label>
          <textarea
            className="form-control"
            id="additionalInfo"
            name="additionalInfo"
            rows="3"
            value={formData.additionalInfo}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
