import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MakeAccountRequests = () => {
  const [requestedRole, setRequestedRole] = useState('');
  const [requestedID, setRequestedID] = useState('');
  const [requests, setRequests] = useState([]);
  const BASE_URL = 'https://backend-login-1-xc0i.onrender.com';
  const navigate = useNavigate(); // Hook for navigation

  // Fetch all requests made by the logged-in user
  useEffect(() => {
    const fetchRequests = async () => {
      const userID = localStorage.getItem('UserID'); // Fetch UserID from local storage
      if (!userID) {
        console.error('No UserID found in local storage');
        return;
      }

      try {
        const response = await fetch(`${BASE_URL}/myaccountrequests?RequesterID=${userID}`, {
          method: 'GET',
        });

        if (!response.ok) {
          console.error('Error fetching requests:', await response.text());
          return;
        }

        const data = await response.json();
        console.log('Fetched requests:', data); // Debugging log
        setRequests(data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests();
  }, []); // Empty dependency array ensures it runs once on mount

  // Handle form submission to post a new request
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userID = localStorage.getItem('UserID'); // Fetch UserID from local storage
    if (!userID || !requestedRole || !requestedID) {
      alert('Please fill out all fields');
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/postaccountrequests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ RequestedRole: requestedRole, RequestedID: requestedID, UserID: userID }),
      });

      if (response.ok) {
        const newRequest = await response.json();
        console.log('New request created:', newRequest); // Debugging log
        setRequests((prevRequests) => [...prevRequests, newRequest]); // Add the new request to the list
        setRequestedRole('');
        setRequestedID('');
      } else {
        const errorText = await response.text();
        alert(`Error: ${errorText}`); // Display error message returned by the server
      }
    } catch (error) {
      console.error('Error posting account request:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Make Account Requests</h2>

      {/* Back to Dashboard Button */}
      <button
        onClick={() => navigate('/dashboard')}
        className="bg-gray-600 text-white px-4 py-2 rounded mb-4"
      >
        ← Back to Dashboard
      </button>

      {/* Form to submit a new request */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Requested Role</label>
          <input
            type="text"
            value={requestedRole}
            onChange={(e) => setRequestedRole(e.target.value)}
            className="border px-4 py-2 w-full"
            placeholder="Enter Requested Role"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Requested ID</label>
          <input
            type="text"
            value={requestedID}
            onChange={(e) => setRequestedID(e.target.value)}
            className="border px-4 py-2 w-full"
            placeholder="Enter Requested ID"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit Request
        </button>
      </form>

      {/* Display fetched requests */}
      <h3 className="text-xl font-bold mb-4">Your Account Requests</h3>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Request ID</th>
            <th className="border px-4 py-2">Requested Role</th>
            <th className="border px-4 py-2">Requested ID</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.length > 0 ? (
            requests.map((req) => (
              <tr key={req.RequestID}>
                <td className="border px-4 py-2">{req.RequestID}</td>
                <td className="border px-4 py-2">{req.RequestedRole}</td>
                <td className="border px-4 py-2">{req.RequestedID}</td>
                <td className="border px-4 py-2">{req.Status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4">
                No account requests found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MakeAccountRequests;
