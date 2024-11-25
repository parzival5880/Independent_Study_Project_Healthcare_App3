// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const AuthorizedUsers = () => {
//   const [authorizedUsers, setAuthorizedUsers] = useState([
//     {
//       AuthorizationID: 'AUTH001',
//       PatientID: 'P001',
//       AuthorizedUserID: 'U001',
//       CanManageAccounts: true,
//       CreatedAt: '2024-10-25 12:30:00',
//       ExpiresAt: '2024-11-01 12:30:00',
//     },
//     {
//       AuthorizationID: 'AUTH002',
//       PatientID: 'P002',
//       AuthorizedUserID: 'U002',
//       CanManageAccounts: false,
//       CreatedAt: '2024-10-24 14:00:00',
//       ExpiresAt: '2024-10-31 14:00:00',
//     },
//   ]);

//   const [newUser, setNewUser] = useState({
//     PatientID: '',
//     AuthorizedUserID: '',
//     CanManageAccounts: false,
//   });

//   const navigate = useNavigate(); // Initialize navigate function

//   // Function to add a new authorized user (static simulation)
//   const handleAddUser = () => {
//     const newUserEntry = {
//       AuthorizationID: `AUTH${String(authorizedUsers.length + 1).padStart(3, '0')}`,
//       ...newUser,
//       CreatedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
//       ExpiresAt: new Date(new Date().setDate(new Date().getDate() + 7))
//         .toISOString()
//         .slice(0, 19)
//         .replace('T', ' '),
//     };
//     setAuthorizedUsers([...authorizedUsers, newUserEntry]);
//     setNewUser({ PatientID: '', AuthorizedUserID: '', CanManageAccounts: false });
//   };

//   return (
//     <div className="max-w-4xl mx-auto py-8">
//       <h2 className="text-2xl font-bold mb-4">Authorized Users</h2>

//       {/* Back to Dashboard Button */}
//       <button
//         onClick={() => navigate('/dashboard')}
//         className="bg-gray-600 text-white px-4 py-2 rounded mb-4"
//       >
//         ← Back to Dashboard
//       </button>

//       {/* New User Form */}
//       <div className="mb-6">
//         <input
//           type="text"
//           placeholder="Patient ID"
//           value={newUser.PatientID}
//           onChange={(e) => setNewUser({ ...newUser, PatientID: e.target.value })}
//           className="border p-2 rounded mb-2 mr-2"
//         />
//         <input
//           type="text"
//           placeholder="Authorized User ID"
//           value={newUser.AuthorizedUserID}
//           onChange={(e) => setNewUser({ ...newUser, AuthorizedUserID: e.target.value })}
//           className="border p-2 rounded mb-2 mr-2"
//         />
//         <label className="inline-flex items-center">
//           <input
//             type="checkbox"
//             checked={newUser.CanManageAccounts}
//             onChange={(e) =>
//               setNewUser({ ...newUser, CanManageAccounts: e.target.checked })
//             }
//             className="mr-2"
//           />
//           Can Manage Accounts
//         </label>
//         <button
//           onClick={handleAddUser}
//           className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
//         >
//           Add User
//         </button>
//       </div>

//       {/* Users Table */}
//       <table className="w-full border">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border px-4 py-2">Authorization ID</th>
//             <th className="border px-4 py-2">Patient ID</th>
//             <th className="border px-4 py-2">User ID</th>
//             <th className="border px-4 py-2">Can Manage Accounts</th>
//             <th className="border px-4 py-2">Created At</th>
//             <th className="border px-4 py-2">Expires At</th>
//           </tr>
//         </thead>
//         <tbody>
//           {authorizedUsers.map((user) => (
//             <tr key={user.AuthorizationID}>
//               <td className="border px-4 py-2">{user.AuthorizationID}</td>
//               <td className="border px-4 py-2">{user.PatientID}</td>
//               <td className="border px-4 py-2">{user.AuthorizedUserID}</td>
//               <td className="border px-4 py-2">
//                 {user.CanManageAccounts ? 'Yes' : 'No'}
//               </td>
//               <td className="border px-4 py-2">{user.CreatedAt}</td>
//               <td className="border px-4 py-2">{user.ExpiresAt}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AuthorizedUsers;
//2 nd one
// import React, { useState, useEffect, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AuthorizedUsers = () => {
//   const [authorizedUsers, setAuthorizedUsers] = useState([]);
//   const [newUser, setNewUser] = useState({
//     AuthorizedUserID: '',
//     CanManageAccounts: false,
//   });
//   const [loading, setLoading] = useState(true); // Loading state for fetching users
//   const navigate = useNavigate();

//   // Function to fetch authorized users from the backend
//   const fetchAuthorizedUsers = useCallback(async () => {
//     setLoading(true); // Set loading to true when starting to fetch
//     try {
//       const response = await fetch('https://backend-login-1-xc0i.onrender.com/authorizedusers', {
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming JWT token is stored in localStorage
//         },
//       });
//       const data = await response.json();
//       setAuthorizedUsers(data);
//     } catch (error) {
//       console.error('Error fetching authorized users:', error);
//     } finally {
//       setLoading(false); // Set loading to false after fetching is complete
//     }
//   }, []);

//   // Call fetchAuthorizedUsers after adding a new user
//   const handleAddUser = async () => {
//     try {
//       const response = await fetch('https://backend-login-1-xc0i.onrender.com/postauthorizeduser', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming JWT token is stored in localStorage
//         },
//         body: JSON.stringify(newUser),
//       });

//       if (response.ok) {
//         setNewUser({ AuthorizedUserID: '', CanManageAccounts: false });
//         await fetchAuthorizedUsers(); // Refresh list after adding user
//       } else {
//         const data = await response.json();
//         console.error('Error adding authorized user:', data.message);
//       }
//     } catch (error) {
//       console.error('Error during add user request:', error);
//     }
//   };

//   // Fetch users on initial render
//   useEffect(() => {
//     fetchAuthorizedUsers();
//   }, [fetchAuthorizedUsers]);

//   return (
//     <div className="max-w-4xl mx-auto py-8">
//       <h2 className="text-2xl font-bold mb-4">Authorized Users</h2>
//       <button
//         onClick={() => navigate('/dashboard')}
//         className="bg-gray-600 text-white px-4 py-2 rounded mb-4"
//       >
//         ← Back to Dashboard
//       </button>

//       {/* New User Form */}
//       <div className="mb-6">
//         <input
//           type="text"
//           placeholder="Authorized User ID"
//           value={newUser.AuthorizedUserID}
//           onChange={(e) => setNewUser({ ...newUser, AuthorizedUserID: e.target.value })}
//           className="border p-2 rounded mb-2 mr-2"
//         />
//         <label className="inline-flex items-center">
//           <input
//             type="checkbox"
//             checked={newUser.CanManageAccounts}
//             onChange={(e) =>
//               setNewUser({ ...newUser, CanManageAccounts: e.target.checked })
//             }
//             className="mr-2"
//           />
//           Can Manage Accounts
//         </label>
//         <button
//           onClick={handleAddUser}
//           className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
//         >
//           Add User
//         </button>
//       </div>

//       {/* Users Table */}
//       {loading ? (
//         <p>Loading users...</p>
//       ) : (
//         <table className="w-full border">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border px-4 py-2">User ID</th>
//               <th className="border px-4 py-2">Authorized User ID</th>
//               <th className="border px-4 py-2">Can Manage Accounts</th>
//               <th className="border px-4 py-2">Created At</th>
//               <th className="border px-4 py-2">Expires At</th>
//             </tr>
//           </thead>
//           <tbody>
//             {authorizedUsers.length > 0 ? (
//               authorizedUsers.map((user, index) => (
//                 <tr key={index}>
//                   <td className="border px-4 py-2">{user.UserID}</td>
//                   <td className="border px-4 py-2">{user.AuthorizedUserID}</td>
//                   <td className="border px-4 py-2">
//                     {user.CanManageAccounts ? 'Yes' : 'No'}
//                   </td>
//                   <td className="border px-4 py-2">{user.CreatedAt}</td>
//                   <td className="border px-4 py-2">{user.ExpiresAt}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="border px-4 py-2 text-center">
//                   No authorized users found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AuthorizedUsers;


// import React, { useState, useEffect, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AuthorizedUsers = () => {
//   const [authorizedUsers, setAuthorizedUsers] = useState([]);
//   const [newUser, setNewUser] = useState({
//     AuthorizedUserID: '',
//     CanManageAccounts: false,
//   });
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   // Retrieve UserID from localStorage
//   const UserID = localStorage.getItem('UserID');

//   // Function to fetch authorized users from the backend
//   const fetchAuthorizedUsers = useCallback(async () => {
//     setLoading(true);
//     try {
//       const response = await fetch('https://backend-login-1-xc0i.onrender.com/authorizedusers', {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('authToken')}`, // Assuming JWT token is stored in localStorage
//         },
//       });
//       const data = await response.json();
//       setAuthorizedUsers(data);
//     } catch (error) {
//       console.error('Error fetching authorized users:', error);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   // Call fetchAuthorizedUsers after adding a new user
//   const handleAddUser = async () => {
//     try {
//       const response = await fetch('https://backend-login-1-xc0i.onrender.com/postauthorizeduser', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ ...newUser, UserID }), // Add UserID in request body
//       });

//       if (response.ok) {
//         setNewUser({ AuthorizedUserID: '', CanManageAccounts: false });
//         await fetchAuthorizedUsers();
//       } else {
//         const data = await response.json();
//         console.error('Error adding authorized user:', data.message);
//       }
//     } catch (error) {
//       console.error('Error during add user request:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAuthorizedUsers();
//   }, [fetchAuthorizedUsers]);

//   return (
//     <div className="max-w-4xl mx-auto py-8">
//       <h2 className="text-2xl font-bold mb-4">Authorized Users</h2>
//       <button
//         onClick={() => navigate('/dashboard')}
//         className="bg-gray-600 text-white px-4 py-2 rounded mb-4"
//       >
//         ← Back to Dashboard
//       </button>

//       {/* New User Form */}
//       <div className="mb-6">
//         <input
//           type="text"
//           placeholder="Authorized User ID"
//           value={newUser.AuthorizedUserID}
//           onChange={(e) => setNewUser({ ...newUser, AuthorizedUserID: e.target.value })}
//           className="border p-2 rounded mb-2 mr-2"
//         />
//         <label className="inline-flex items-center">
//           <input
//             type="checkbox"
//             checked={newUser.CanManageAccounts}
//             onChange={(e) =>
//               setNewUser({ ...newUser, CanManageAccounts: e.target.checked })
//             }
//             className="mr-2"
//           />
//           Can Manage Accounts
//         </label>
//         <button
//           onClick={handleAddUser}
//           className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
//         >
//           Add User
//         </button>
//       </div>

//       {/* Users Table */}
//       {loading ? (
//         <p>Loading users...</p>
//       ) : (
//         <table className="w-full border">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border px-4 py-2">User ID</th>
//               <th className="border px-4 py-2">Authorized User ID</th>
//               <th className="border px-4 py-2">Can Manage Accounts</th>
//               <th className="border px-4 py-2">Created At</th>
//               <th className="border px-4 py-2">Expires At</th>
//             </tr>
//           </thead>
//           <tbody>
//             {authorizedUsers.length > 0 ? (
//               authorizedUsers.map((user, index) => (
//                 <tr key={index}>
//                   <td className="border px-4 py-2">{user.UserID}</td>
//                   <td className="border px-4 py-2">{user.AuthorizedUserID}</td>
//                   <td className="border px-4 py-2">
//                     {user.CanManageAccounts ? 'Yes' : 'No'}
//                   </td>
//                   <td className="border px-4 py-2">{user.CreatedAt}</td>
//                   <td className="border px-4 py-2">{user.ExpiresAt}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="border px-4 py-2 text-center">
//                   No authorized users found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AuthorizedUsers;

//Final

// import React, { useState, useEffect, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AuthorizedUsers = () => {
//   const [authorizedUsers, setAuthorizedUsers] = useState([]);
//   const [newUser, setNewUser] = useState({
//     AuthorizedUserID: '',
//     CanManageAccounts: false,
//   });
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   // Retrieve UserID from localStorage
//   const UserID = localStorage.getItem('UserID');

//   // Function to fetch authorized users from the backend
//   const fetchAuthorizedUsers = useCallback(async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(`https://backend-login-1-xc0i.onrender.com/authorizedusers?UserID=${UserID}`, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       const data = await response.json();
//       setAuthorizedUsers(data);
//     } catch (error) {
//       console.error('Error fetching authorized users:', error);
//     } finally {
//       setLoading(false);
//     }
//   }, [UserID]);

//   // Call fetchAuthorizedUsers after adding a new user
//   const handleAddUser = async () => {
//     try {
//       const response = await fetch('https://backend-login-1-xc0i.onrender.com/postauthorizeduser', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ ...newUser, UserID }), // Add UserID in request body
//       });

//       if (response.ok) {
//         setNewUser({ AuthorizedUserID: '', CanManageAccounts: false });
//         await fetchAuthorizedUsers();
//       } else {
//         const data = await response.json();
//         console.error('Error adding authorized user:', data.message);
//       }
//     } catch (error) {
//       console.error('Error during add user request:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAuthorizedUsers();
//   }, [fetchAuthorizedUsers]);

//   return (
//     <div className="max-w-4xl mx-auto py-8">
//       <h2 className="text-2xl font-bold mb-4">Authorized Users</h2>
//       <button
//         onClick={() => navigate('/dashboard')}
//         className="bg-gray-600 text-white px-4 py-2 rounded mb-4"
//       >
//         ← Back to Dashboard
//       </button>

//       {/* New User Form */}
//       <div className="mb-6">
//         <input
//           type="text"
//           placeholder="Authorized User ID"
//           value={newUser.AuthorizedUserID}
//           onChange={(e) => setNewUser({ ...newUser, AuthorizedUserID: e.target.value })}
//           className="border p-2 rounded mb-2 mr-2"
//         />
//         <label className="inline-flex items-center">
//           <input
//             type="checkbox"
//             checked={newUser.CanManageAccounts}
//             onChange={(e) =>
//               setNewUser({ ...newUser, CanManageAccounts: e.target.checked })
//             }
//             className="mr-2"
//           />
//           Can Manage Accounts
//         </label>
//         <button
//           onClick={handleAddUser}
//           className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
//         >
//           Add User
//         </button>
//       </div>

//       {/* Users Table */}
//       {loading ? (
//         <p>Loading users...</p>
//       ) : (
//         <table className="w-full border">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border px-4 py-2">User ID</th>
//               <th className="border px-4 py-2">Authorized User ID</th>
//               <th className="border px-4 py-2">Can Manage Accounts</th>
//               <th className="border px-4 py-2">Created At</th>
//               <th className="border px-4 py-2">Expires At</th>
//             </tr>
//           </thead>
//           <tbody>
//             {authorizedUsers.length > 0 ? (
//               authorizedUsers.map((user, index) => (
//                 <tr key={index}>
//                   <td className="border px-4 py-2">{user.UserID}</td>
//                   <td className="border px-4 py-2">{user.AuthorizedUserID}</td>
//                   <td className="border px-4 py-2">
//                     {user.CanManageAccounts ? 'Yes' : 'No'}
//                   </td>
//                   <td className="border px-4 py-2">{user.CreatedAt}</td>
//                   <td className="border px-4 py-2">{user.ExpiresAt}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="border px-4 py-2 text-center">
//                   No authorized users found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AuthorizedUsers;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthorizedUsers = () => {
  const [authorizedUsers, setAuthorizedUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    AuthorizedUserID: '',
    CanManageAccounts: false,
  });
  const [loading, setLoading] = useState(true); // Loading state for fetching users
  const navigate = useNavigate();

  // Function to fetch authorized users from the backend
  const fetchAuthorizedUsers = async () => {
    setLoading(true); // Set loading to true when starting to fetch
    try {
      const response = await fetch('https://backend-login-1-xc0i.onrender.com/authorizedusers', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming JWT token is stored in localStorage
        },
      });
      const data = await response.json();
      setAuthorizedUsers(data);
    } catch (error) {
      console.error('Error fetching authorized users:', error);
    } finally {
      setLoading(false); // Set loading to false after fetching is complete
    }
  };

  // Call fetchAuthorizedUsers after adding a new user
  const handleAddUser = async () => {
    try {
      const response = await fetch('https://backend-login-1-xc0i.onrender.com/postauthorizeduser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming JWT token is stored in localStorage
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        setNewUser({ AuthorizedUserID: '', CanManageAccounts: false });
        await fetchAuthorizedUsers(); // Refresh list after adding user
      } else {
        const data = await response.json();
        console.error('Error adding authorized user:', data.message);
      }
    } catch (error) {
      console.error('Error during add user request:', error);
    }
  };

  // Fetch users on initial render
  useEffect(() => {
    fetchAuthorizedUsers();
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Authorized Users</h2>
      <button
        onClick={() => navigate('/dashboard')}
        className="bg-gray-600 text-white px-4 py-2 rounded mb-4"
      >
        ← Back to Dashboard
      </button>

      {/* New User Form */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Authorized User ID"
          value={newUser.AuthorizedUserID}
          onChange={(e) => setNewUser({ ...newUser, AuthorizedUserID: e.target.value })}
          className="border p-2 rounded mb-2 mr-2"
        />
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={newUser.CanManageAccounts}
            onChange={(e) =>
              setNewUser({ ...newUser, CanManageAccounts: e.target.checked })
            }
            className="mr-2"
          />
          Can Manage Accounts
        </label>
        <button
          onClick={handleAddUser}
          className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
        >
          Add User
        </button>
      </div>

      {/* Users Table */}
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">User ID</th>
              <th className="border px-4 py-2">Authorized User ID</th>
              <th className="border px-4 py-2">Can Manage Accounts</th>
              <th className="border px-4 py-2">Created At</th>
              <th className="border px-4 py-2">Expires At</th>
            </tr>
          </thead>
          <tbody>
            {authorizedUsers.length > 0 ? (
              authorizedUsers.map((user, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{user.UserID}</td>
                  <td className="border px-4 py-2">{user.AuthorizedUserID}</td>
                  <td className="border px-4 py-2">
                    {user.CanManageAccounts ? 'Yes' : 'No'}
                  </td>
                  <td className="border px-4 py-2">{user.CreatedAt}</td>
                  <td className="border px-4 py-2">{user.ExpiresAt}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="border px-4 py-2 text-center">
                  No authorized users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AuthorizedUsers;


