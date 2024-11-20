// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const AccessLogs = () => {
//   const [logs, setLogs] = useState([
//     {
//       AccessLogID: 'ACC001',
//       SensorID: 'S001',
//       UserID: 'U001',
//       AccessTimeStamp: '2024-10-25T12:30:00',
//       Action: 'Read',
//     },
//     {
//       AccessLogID: 'ACC002',
//       SensorID: 'S002',
//       UserID: 'U002',
//       AccessTimeStamp: '2024-10-25T14:45:00',
//       Action: 'Update',
//     },
//   ]);

//   const [newLog, setNewLog] = useState({
//     SensorID: '',
//     UserID: '',
//     Action: '',
//   });

//   const navigate = useNavigate(); // Initialize navigate function

//   // Handle creating a new access log (static simulation)
//   const handleCreateLog = () => {
//     const newLogEntry = {
//       AccessLogID: `ACC${String(logs.length + 1).padStart(3, '0')}`,
//       ...newLog,
//       AccessTimeStamp: new Date().toISOString(),
//     };
//     setLogs([...logs, newLogEntry]);
//     setNewLog({ SensorID: '', UserID: '', Action: '' });
//   };

//   return (
//     <div className="max-w-4xl mx-auto py-8">
//       <h2 className="text-2xl font-bold mb-4">Access Logs</h2>

//       {/* Back to Dashboard Button */}
//       <button
//         onClick={() => navigate('/dashboard')}
//         className="bg-gray-600 text-white px-4 py-2 rounded mb-4"
//       >
//         ← Back to Dashboard
//       </button>

//       {/* New Log Entry Form */}
//       <div className="mb-6">
//         <input
//           type="text"
//           placeholder="Sensor ID"
//           value={newLog.SensorID}
//           onChange={(e) =>
//             setNewLog({ ...newLog, SensorID: e.target.value })
//           }
//           className="border p-2 rounded mb-2 mr-2"
//         />
//         <input
//           type="text"
//           placeholder="User ID"
//           value={newLog.UserID}
//           onChange={(e) =>
//             setNewLog({ ...newLog, UserID: e.target.value })
//           }
//           className="border p-2 rounded mb-2 mr-2"
//         />
//         <input
//           type="text"
//           placeholder="Action"
//           value={newLog.Action}
//           onChange={(e) =>
//             setNewLog({ ...newLog, Action: e.target.value })
//           }
//           className="border p-2 rounded mb-2 mr-2"
//         />
//         <button
//           onClick={handleCreateLog}
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Add Log
//         </button>
//       </div>

//       {/* Logs Table */}
//       <table className="w-full border">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border px-4 py-2">Access Log ID</th>
//             <th className="border px-4 py-2">Sensor ID</th>
//             <th className="border px-4 py-2">User ID</th>
//             <th className="border px-4 py-2">Timestamp</th>
//             <th className="border px-4 py-2">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {logs.map((log) => (
//             <tr key={log.AccessLogID}>
//               <td className="border px-4 py-2">{log.AccessLogID}</td>
//               <td className="border px-4 py-2">{log.SensorID}</td>
//               <td className="border px-4 py-2">{log.UserID}</td>
//               <td className="border px-4 py-2">{new Date(log.AccessTimeStamp).toLocaleString()}</td>
//               <td className="border px-4 py-2">{log.Action}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AccessLogs;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AccessLogs = () => {
  const [logs, setLogs] = useState([]);
  const navigate = useNavigate();

  // Fetch logs from the backend API on component mount
  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get('https://backend-login-1-xc0i.onrender.com/sensoraccesslogs');
        setLogs(response.data);
      } catch (error) {
        console.error('Error fetching access logs:', error.response?.data || error.message);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Access Logs</h2>

      {/* Back to Dashboard Button */}
      <button
        onClick={() => navigate('/dashboard')}
        className="bg-gray-600 text-white px-4 py-2 rounded mb-4"
      >
        ← Back to Dashboard
      </button>

      {/* Logs Table */}
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Access Log ID</th>
            <th className="border px-4 py-2">Sensor ID</th>
            <th className="border px-4 py-2">User ID</th>
            <th className="border px-4 py-2">Timestamp</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {logs.length > 0 ? (
            logs.map((log) => (
              <tr key={log.AccessLogID}>
                <td className="border px-4 py-2">{log.AccessLogID}</td>
                <td className="border px-4 py-2">{log.SensorID}</td>
                <td className="border px-4 py-2">{log.UserID}</td>
                <td className="border px-4 py-2">{new Date(log.AccessTimestamp).toLocaleString()}</td>
                <td className="border px-4 py-2">{log.Action}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="border px-4 py-2 text-center" colSpan="5">
                No logs available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AccessLogs;