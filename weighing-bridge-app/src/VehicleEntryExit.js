// VehicleEntryExit.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import 'bootstrap/dist/css/bootstrap.min.css';
import './VehicleEntryExit.css';



const VehicleEntryExit = () => {
    const [ticketNumber, setTicketNumber] = useState(2);
  const [rows, setRows] = useState([
    {
      ticketNumber: 1,
      inTime: '',
      outTime: '',
      truckNo: '',
      product: '',
      poNo: '',
      challanNo: '',
    },
  ]);

  const navigate = useNavigate();
  
  useEffect(() => {
    addClickEventToTicketNumbers();
  }, [rows]);

  const addTicketNumberToRow = () => {
    setTicketNumber((prevTicketNumber) => prevTicketNumber + 1);
  };

  const addRow = () => {
    setRows((prevRows) => [
      ...prevRows,
      {
        ticketNumber: ticketNumber,
        inTime: '',
        outTime: '',
        truckNo: '',
        product: '',
        poNo: '',
        challanNo: '',
      },
    ]);
    setTicketNumber((prevTicketNumber) => prevTicketNumber + 1);
  };

  const handleOutClick = (index) => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows[index].outTime = currentTime;
      return updatedRows;
    });
  };

  const handleInClick = (index) => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows[index].inTime = currentTime;
      return updatedRows;
    });
  };

  const fetchData = () => {
    const selectedDate = document.getElementById('datePicker').value;
    // Perform data fetching based on the selected date
    console.log('Fetching data for date:', selectedDate);
  };

  const addClickEventToTicketNumbers = () => {
    const ticketNumberCells = document.querySelectorAll('.ticket-input');
    ticketNumberCells.forEach((cell) => {
      cell.addEventListener('click', () => {
        // Replace with your navigation logic
        navigate('/gate-entry'); // Assuming '/gate-entry' is the path for GateEntry.js
      });
    });
  };

  const handleInputChange = (e, fieldName, index) => {
    const { value } = e.target;
    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows[index][fieldName] = value;
      return updatedRows;
    });
  };

  return (
    <div className="vehicle-container">
      {/* Header content */}
      <div className="vehicle-header-content">
        <h1 className="col-md-3 font_arvo vehicle-h1">
          Weighbridge Management System (Vehicle Entry and Exit)
        </h1>
      </div>

      <div className="vehicle-header-content">
        <div id="navbar-left">
          <input
            type="date"
            id="datePicker"
            onChange={fetchData}
            style={{ border: '2px solid #0f0f0f', borderRadius: '5px' }}
          />
        </div>
        <button
  style={{ backgroundColor: '#007BFF', color: '#ffffff', padding: '4px 8px', borderRadius: '5px' }}
  onClick={addRow}
>
  + Add
</button>

      </div>

      {/* Table */}
      <table id="dataTable" className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 ticket-input">Ticket no.</th>
            <th className="border px-4 py-2">In Time</th>
            <th className="border px-4 py-2">Out Time</th>
            <th className="border px-4 py-2">Truck no.</th>
            <th className="border px-4 py-2">Product</th>
            <th className="border px-4 py-2">PO no.</th>
            <th className="border px-4 py-2">Challan no.</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td
                className="border px-4 py-2 ticket-input"
                onClick={() => window.location.href = 'GateEntry.js'}
              >
                <input
                  type="text"
                  className="form-control"
                  value={row.ticketNumber}
                  readOnly
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  className="form-control in-time"
                  value={row.inTime}
                  onChange={(e) => handleInputChange(e, 'inTime', index)}
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  className="form-control out-time"
                  value={row.outTime}
                  onChange={(e) => handleInputChange(e, 'outTime', index)}
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  className="form-control"
                  value={row.truckNo}
                  onChange={(e) => handleInputChange(e, 'truckNo', index)}
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  className="form-control"
                  value={row.product}
                  onChange={(e) => handleInputChange(e, 'product', index)}
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  className="form-control"
                  value={row.poNo}
                  onChange={(e) => handleInputChange(e, 'poNo', index)}
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  className="form-control"
                  value={row.challanNo}
                  onChange={(e) => handleInputChange(e, 'challanNo', index)}
                />
              </td>
              <td className="border px-4 py-2">
                <div className="flex-container">
                <button
  style={{ backgroundColor: '#28A745', color: '#ffffff', padding: '4px 8px', borderRadius: '5px' }}
  onClick={() => handleInClick(index)}
>
  In
</button>

<button
  style={{ backgroundColor: '#DC3545', color: '#ffffff', padding: '4px 8px', borderRadius: '5px' }}
  onClick={() => handleOutClick(index)}
>
  Out
</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleEntryExit;