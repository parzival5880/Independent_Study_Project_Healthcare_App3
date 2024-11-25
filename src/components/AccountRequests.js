// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AccountRequests = () => {
//   const [requests, setRequests] = useState([]); // State to store account requests
//   const BASE_URL = 'https://backend-login-1-xc0i.onrender.com';
//   const navigate = useNavigate();

//   // Fetch requests for the logged-in user on component mount
//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const userID = localStorage.getItem('UserID'); // Fetch UserID from local storage
//         if (!userID) {
//           console.error('No UserID found in local storage');
//           return;
//         }

//         // Send GET request with UserID as query parameter
//         const response = await fetch(`${BASE_URL}/getaccountrequest?UserID=${userID}`, {
//           method: 'GET',
//           headers: {
//             'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include token for authentication
//           },
//         });

//         if (!response.ok) {
//           console.error('Error fetching requests:', await response.text());
//           return;
//         }

//         const data = await response.json(); // Parse JSON response
//         console.log('Fetched data:', data); // Debugging log
//         setRequests(data); // Update state with fetched requests
//       } catch (error) {
//         console.error('Error fetching requests:', error);
//       }
//     };

//     fetchRequests(); // Call the fetch function
//   }, []);

//   // Function to update the status of a request
//   const handleUpdateStatus = async (requestID, newStatus) => {
//     try {
//       const response = await fetch(`${BASE_URL}/updateaccountrequest/${requestID}`, {
//         method: 'PUT', // Send a PUT request to update status
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include token for authentication
//         },
//         body: JSON.stringify({ Status: newStatus }), // Send new status in the request body
//       });

//       if (response.ok) {
//         // Update the state to reflect the status change
//         setRequests(requests.map(req =>
//           req.RequestID === requestID ? { ...req, Status: newStatus } : req
//         ));
//       } else {
//         console.error('Failed to update status');
//       }
//     } catch (error) {
//       console.error('Error updating status:', error);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto py-8">
//       <h2 className="text-2xl font-bold mb-4">Account Requests</h2>

//       {/* Back to Dashboard Button */}
//       <button
//         onClick={() => navigate('/dashboard')}
//         className="bg-gray-600 text-white px-4 py-2 rounded mb-4"
//       >
//         ← Back to Dashboard
//       </button>

//       {/* Account Requests Table */}
//       <table className="w-full border">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border px-4 py-2">Request ID</th>
//             <th className="border px-4 py-2">Requester ID</th>
//             <th className="border px-4 py-2">Requested Role</th>
//             <th className="border px-4 py-2">Status</th>
//             <th className="border px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {requests.length > 0 ? (
//             requests.map((req) => (
//               <tr key={req.RequestID}>
//                 <td className="border px-4 py-2">{req.RequestID}</td>
//                 <td className="border px-4 py-2">{req.RequesterID}</td>
//                 <td className="border px-4 py-2">{req.RequestedRole}</td>
//                 <td className="border px-4 py-2">{req.Status}</td>
//                 <td className="border px-4 py-2">
//                   {req.Status !== 'Approved' && (
//                     <button
//                       onClick={() => handleUpdateStatus(req.RequestID, 'Approved')}
//                       className="bg-green-500 text-white px-2 py-1 rounded mr-2"
//                     >
//                       Approve
//                     </button>
//                   )}
//                   {req.Status !== 'Rejected' && (
//                     <button
//                       onClick={() => handleUpdateStatus(req.RequestID, 'Rejected')}
//                       className="bg-red-500 text-white px-2 py-1 rounded"
//                     >
//                       Reject
//                     </button>
//                   )}
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5" className="text-center py-4">
//                 No account requests found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AccountRequests;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AccountRequests = () => {
  const [requests, setRequests] = useState([]); // State to store account requests
  const BASE_URL = 'https://backend-login-1-xc0i.onrender.com';
  const navigate = useNavigate();

  // Fetch requests for the logged-in user on component mount
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const userID = localStorage.getItem('UserID'); // Fetch UserID from local storage
        if (!userID) {
          console.error('No UserID found in local storage');
          return;
        }

        // Send GET request with UserID as query parameter
        const response = await fetch(`${BASE_URL}/getaccountrequest?UserID=${userID}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include token for authentication
          },
        });

        if (!response.ok) {
          console.error('Error fetching requests:', await response.text());
          return;
        }

        const data = await response.json(); // Parse JSON response
        console.log('Fetched data:', data); // Debugging log
        setRequests(data); // Update state with fetched requests
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests(); // Call the fetch function
  }, []);

  // Function to update the status of a request
  const handleUpdateStatus = async (requestID, newStatus) => {
    try {
      const response = await fetch(`${BASE_URL}/updateaccountrequest/${requestID}`, {
        method: 'PUT', // Send a PUT request to update status
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include token for authentication
        },
        body: JSON.stringify({ Status: newStatus }), // Send new status in the request body
      });

      if (response.ok) {
        // Update the state to reflect the status change
        setRequests(requests.map(req =>
          req.RequestID === requestID ? { ...req, Status: newStatus } : req
        ));
      } else {
        console.error('Failed to update status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Account Requests</h2>

      {/* Back to Dashboard Button */}
      <button
        onClick={() => navigate('/dashboard')}
        className="bg-gray-600 text-white px-4 py-2 rounded mb-4"
      >
        ← Back to Dashboard
      </button>

      {/* Account Requests Table */}
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Request ID</th>
            <th className="border px-4 py-2">Requester ID</th>
            <th className="border px-4 py-2">Requested Role</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.length > 0 ? (
            requests.map((req) => (
              <tr key={req.RequestID}>
                <td className="border px-4 py-2">{req.RequestID}</td>
                <td className="border px-4 py-2">{req.RequesterID}</td>
                <td className="border px-4 py-2">{req.RequestedRole}</td>
                <td className="border px-4 py-2">{req.Status}</td>
                <td className="border px-4 py-2">
                  {req.Status !== 'Approved' && (
                    <button
                      onClick={() => handleUpdateStatus(req.RequestID, 'Approved')}
                      className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                    >
                      Approve
                    </button>
                  )}
                  {req.Status !== 'Rejected' && (
                    <button
                      onClick={() => handleUpdateStatus(req.RequestID, 'Rejected')}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Reject
                    </button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4">
                No account requests found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AccountRequests;

