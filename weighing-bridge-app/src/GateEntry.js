import React, { useState } from 'react';
import './GateEntry.css';
import Ldtech from './assets/Ldtech.jpg';

const GateEntry = () => {
  const [date, setDate] = useState('');
  const [inTime, setInTime] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Escape' || event.key === 'Esc') {
      window.location.href = 'VehicleEntry&Exit.html';
    }
  };

  const handleSave = () => {
    // Save functionality
  };

  const handleDelete = () => {
    // Delete functionality
  };

  const handleClear = () => {
    // Clear functionality
  };

  const handlePrint = () => {
    // Print functionality
  };

  return (
    <div className="container">
      <div className="header">
      <img src={Ldtech} alt="Logo" className="logo mb-3" width="150"
          height="150" />
        <h1 className="col-md-3 font_arvo">
          Weighbridge Management System(Gate Entry)
        </h1>
      </div>
      <div className="form-top">
        <div className="form-left">
          <div className="form-group row">
            <label htmlFor="date" className="col-sm-2 col-form-label">
              Date:
            </label>
            <div className="col-sm-4">
              <input
                type="date"
                id="date"
                name="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="in" className="col-sm-2 col-form-label">
              In:
            </label>
            <div className="col-sm-4">
              <input
                type="time"
                id="in"
                name="in"
                className="form-control"
                value={inTime}
                onChange={(e) => setInTime(e.target.value)}
              />
            </div>
          </div>
          <div className="form-left">
  <div className="form-group">
    <label htmlFor="customer">Customer:</label>
    <select id="customer" name="customer">
      <option value="">Select</option>
      {/* Add more options here */}
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="supplier">Supplier:</label>
    <select id="supplier" name="supplier">
      <option value="">Select</option>
      {/* Add more options here */}
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="truck">Truck Number:</label>
    <select id="truck" name="truck">
      <option value="">Select</option>
      {/* Add more options here */}
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="transporter">Transporter:</label>
    <select id="transporter" name="transporter">
      <option value="">Select</option>
      {/* Add more options here */}
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="driver-dl">Driver DL no.:</label>
    <select id="driver-dl" name="driver-dl">
      <option value="">Select</option>
      {/* Add more options here */}
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="driver-name">Driver Name:</label>
    <select id="driver-name" name="driver-name">
      <option value="">Select</option>
      {/* Add more options here */}
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="department">Department:</label>
    <select id="department" name="department">
      <option value="">Select</option>
      {/* Add more options here */}
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="product">Product:</label>
    <select id="product" name="product">
      <option value="">Select</option>
      {/* Add more options here */}
    </select>
  </div>
</div>
        </div>

        <div className="form-right">
          <div className="form-group">
            <label htmlFor="ticket">Ticket no.: </label>
            <input type="number" id="ticket" name="ticket" />
          </div>
          <div className="form-group">
  <label htmlFor="po">PO no.:</label>
  <input type="text" id="po" name="po" />
</div>

<div className="form-group">
  <label htmlFor="challan">Challan no.:</label>
  <input type="text" id="challan" name="challan" />
</div>
          <div className="camera-container mt-3">
            <div className="rectangular-box">Camera</div>
          </div>
          <div className="buttons text-center mt-2">
            <button
              id="save"
              className="btn btn-primary"
              onClick={handleSave}
            >
              Save (F10)
            </button>
            <button
              id="delete"
              className="btn btn-danger"
              onClick={handleDelete}
            >
              Delete (F9)
            </button>
            <button id="clear" className="btn btn-secondary" onClick={handleClear}>
              Clear (F9)
            </button>
            <button id="print" className="btn btn-success" onClick={handlePrint}>
              Print
            </button>
            <button id="closeButton" className="btn btn-dark" onClick={handleKeyDown}>
              Close (Esc)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GateEntry;