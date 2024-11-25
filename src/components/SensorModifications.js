import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SensorModifications = () => {
  const [modifications, setModifications] = useState([
    {
      ModificationID: 'M001',
      SensorID: 'S001',
      UserID: 'U001',
      ModificationDetails: 'Changed sensor location',
      Status: 'Pending',
    },
    {
      ModificationID: 'M002',
      SensorID: 'S002',
      UserID: 'U002',
      ModificationDetails: 'Updated range max value',
      Status: 'Pending',
    },
  ]);

  const [newModification, setNewModification] = useState({
    SensorID: '',
    UserID: '',
    ModificationDetails: '',
  });

  const navigate = useNavigate(); // Initialize navigate function

  const handleCreateModification = () => {
    const newMod = {
      ...newModification,
      ModificationID: `M00${modifications.length + 1}`,
      Status: 'Pending',
    };
    setModifications([...modifications, newMod]);
    setNewModification({ SensorID: '', UserID: '', ModificationDetails: '' });
  };

  const handleUpdateStatus = (modificationID, status) => {
    const updatedMods = modifications.map((mod) =>
      mod.ModificationID === modificationID ? { ...mod, Status: status } : mod
    );
    setModifications(updatedMods);
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Sensor Modifications</h2>

      {/* Back to Dashboard Button */}
      <button
        onClick={() => navigate('/dashboard')}
        className="bg-gray-600 text-white px-4 py-2 rounded mb-4"
      >
        ← Back to Dashboard
      </button>

      {/* New Modification Form */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Sensor ID"
          value={newModification.SensorID}
          onChange={(e) =>
            setNewModification({ ...newModification, SensorID: e.target.value })
          }
          className="border p-2 rounded mb-2 mr-2"
        />
        <input
          type="text"
          placeholder="User ID"
          value={newModification.UserID}
          onChange={(e) =>
            setNewModification({ ...newModification, UserID: e.target.value })
          }
          className="border p-2 rounded mb-2 mr-2"
        />
        <input
          type="text"
          placeholder="Modification Details"
          value={newModification.ModificationDetails}
          onChange={(e) =>
            setNewModification({
              ...newModification,
              ModificationDetails: e.target.value,
            })
          }
          className="border p-2 rounded mb-2 mr-2"
        />
        <button
          onClick={handleCreateModification}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Modification
        </button>
      </div>

      {/* Sensor Modifications Table */}
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Modification ID</th>
            <th className="border px-4 py-2">Sensor ID</th>
            <th className="border px-4 py-2">User ID</th>
            <th className="border px-4 py-2">Details</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {modifications.map((mod) => (
            <tr key={mod.ModificationID}>
              <td className="border px-4 py-2">{mod.ModificationID}</td>
              <td className="border px-4 py-2">{mod.SensorID}</td>
              <td className="border px-4 py-2">{mod.UserID}</td>
              <td className="border px-4 py-2">{mod.ModificationDetails}</td>
              <td className="border px-4 py-2">{mod.Status}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleUpdateStatus(mod.ModificationID, 'Approved')}
                  className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleUpdateStatus(mod.ModificationID, 'Rejected')}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SensorModifications;
