// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import AddSensorModal from './AddSensorModal';

// const SensorManagement = () => {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [editingSensor, setEditingSensor] = useState(null);
//   const [sensors, setSensors] = useState([]);
//   const navigate = useNavigate();

//   // Get userID from localStorage (set during login)
//   const userID = localStorage.getItem('userID');

//   // Fetch sensors for the logged-in user
//   useEffect(() => {
//     const fetchSensorDetails = async () => {
//       try {
//         const response = await axios.get(`https://backend-login-1-xc0i.onrender.com/getsensordetails/${userID}`);
//         console.log("Fetched sensor details:", response.data);
//         setSensors(response.data);
//       } catch (error) {
//         console.error("Error fetching sensor details:", error.response?.data || error.message);
//       }
//     };

//     if (userID) {
//       fetchSensorDetails();
//     } else {
//       console.error("User ID not found. Please log in.");
//       navigate('/login');
//     }
//   }, [userID, navigate]);

//   // Function to log actions (Read or Update) for a specific sensor
//   const logSensorAction = async (sensorID, action) => {
//     try {
//       await axios.post('https://backend-login-1-xc0i.onrender.com/sensoraccesslogs', {
//         SensorID: sensorID,
//         UserID: userID,
//         Action: action
//       });
//       console.log(`Logged action: ${action} for SensorID: ${sensorID}`);
//     } catch (error) {
//       console.error("Error logging sensor action:", error.response?.data || error.message);
//     }
//   };

//   // Handle click to open sensor details (Read action)
//   const handleViewSensor = (sensor) => {
//     logSensorAction(sensor.SensorID, "Read");  // Log the Read action
//     setEditingSensor(sensor);
//     setModalOpen(true);
//   };

//   // Handle sensor update (Update action)
//   const handleAddOrUpdateSensor = (sensorDetails) => {
//     if (editingSensor) {
//       setSensors((prevSensors) =>
//         prevSensors.map((sensor) =>
//           sensor.SensorID === editingSensor.SensorID ? { ...sensorDetails, SensorID: sensor.SensorID } : sensor
//         )
//       );
//       logSensorAction(editingSensor.SensorID, "Update");  // Log the Update action
//       setEditingSensor(null);
//     } else {
//       const newSensor = { ...sensorDetails, SensorID: Date.now().toString() };
//       setSensors((prevSensors) => [...prevSensors, newSensor]);
//     }
//     setModalOpen(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <h1 className="text-3xl font-semibold mb-8">Sensor Management</h1>

//       <button
//         onClick={() => navigate('/dashboard')}
//         className="bg-gray-600 text-white px-4 py-2 rounded mb-4"
//       >
//         ← Back to Dashboard
//       </button>

//       <button
//         onClick={() => setModalOpen(true)}
//         className="bg-blue-600 text-white px-4 py-2 rounded mb-4 ml-4"
//       >
//         + Add Sensor
//       </button>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {sensors.length > 0 ? (
//           sensors.map((sensor) => (
//             <div
//               key={sensor.SensorID}
//               className="bg-white p-6 rounded shadow-lg hover:shadow-xl cursor-pointer"
//               onClick={() => handleViewSensor(sensor)}  // Handle Read action on click
//             >
//               <h3 className="font-semibold text-xl mb-4">{sensor.SensorType} (ID: {sensor.SensorID})</h3>
//               <div className="text-sm text-gray-700">
//                 <p><strong>Range:</strong> {sensor.RangeMin} - {sensor.RangeMax}</p>
//                 <p><strong>Absolute Range:</strong> {sensor.AbsoluteMin} - {sensor.AbsoluteMax}</p>
//                 <p><strong>Current Value:</strong> {sensor.CurrentValue}</p>
//                 <p><strong>Status:</strong> {sensor.Status}</p>
//                 <p><strong>Patient ID:</strong> {sensor.PatientID}</p>
//                 <p><strong>Location:</strong> {sensor.Location}</p>
//                 <p><strong>Data Collection Frequency:</strong> {sensor.DataCollectionFrequency} minutes</p>
//                 <p><strong>Sensor Category:</strong> {sensor.SensorCategory}</p>
//                 <p><strong>Created At:</strong> {new Date(sensor.CreatedAt).toLocaleString()}</p>
//                 <p><strong>Updated At:</strong> {new Date(sensor.UpdatedAt).toLocaleString()}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No sensor details available for this patient.</p>
//         )}
//       </div>

//       {isModalOpen && (
//         <AddSensorModal
//           onClose={() => setModalOpen(false)}
//           onSubmit={handleAddOrUpdateSensor}
//           initialData={editingSensor}
//         />
//       )}
//     </div>
//   );
// };

// export default SensorManagement;


// Updated 11/10
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SensorManagement = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isValuesModalOpen, setValuesModalOpen] = useState(false);
    const [editingSensor, setEditingSensor] = useState(null);
    const [sensors, setSensors] = useState([]);
    const [sensorValues, setSensorValues] = useState([]);
    const navigate = useNavigate();

    const userID = localStorage.getItem('UserID');

    useEffect(() => {
        const fetchSensorDetails = async () => {
            try {
                const response = await axios.get(`https://backend-login-1-xc0i.onrender.com/getsensordetails/${userID}`);
                setSensors(response.data);
            } catch (error) {
                console.error("Error fetching sensor details:", error.response?.data || error.message);
            }
        };

        if (userID) {
            fetchSensorDetails();
        } else {
            console.error("User ID not found. Please log in.");
            navigate('/login');
        }
    }, [userID, navigate]);

    const logSensorAction = async (sensorID, action) => {
        try {
            await axios.post('https://backend-login-1-xc0i.onrender.com/sensoraccesslogs', {
                SensorID: sensorID,
                UserID: userID,
                Action: action
            });
            console.log(`Logged action: ${action} for SensorID: ${sensorID}`);
        } catch (error) {
            console.error("Error logging sensor action:", error.response?.data || error.message);
        }
    };

    const handleViewSensorValues = async (sensorID) => {
        try {
            const response = await axios.get(`https://backend-login-1-xc0i.onrender.com/getsensorvalues/${sensorID}`);
            setSensorValues(response.data);
            setValuesModalOpen(true);
        } catch (error) {
            console.error("Error fetching sensor values:", error.response?.data || error.message);
        }
    };

    const handleEditSensor = (sensor) => {
        console.log("Editing sensor:", sensor); // Log to confirm correct sensor is set
        setEditingSensor(sensor);
        setModalOpen(true);
    };

    const handleAddOrUpdateSensor = async (sensorDetails) => {
        if (editingSensor) {
            console.log("Updating sensor with ID:", editingSensor.SensorID); // Log SensorID
            try {
                await axios.put(`https://backend-login-1-xc0i.onrender.com/updatesensordetails/${editingSensor.SensorID}`, sensorDetails);
                
                // Update the sensor in the main grid
                setSensors((prevSensors) =>
                    prevSensors.map((sensor) =>
                        sensor.SensorID === editingSensor.SensorID ? { ...sensorDetails, SensorID: sensor.SensorID } : sensor
                    )
                );
                
                logSensorAction(editingSensor.SensorID, "Update");
                setEditingSensor(null);
            } catch (error) {
                console.error("Error updating sensor details:", error.response?.data || error.message);
            }
        }
        setModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <h1 className="text-3xl font-semibold mb-8">Sensor Management</h1>

            <div className="flex mb-4">
                <button
                    onClick={() => navigate('/dashboard')}
                    className="bg-gray-600 text-white px-4 py-2 rounded mr-4"
                >
                    ← Back to Dashboard
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sensors.length > 0 ? (
                    sensors.map((sensor) => (
                        <div
                            key={sensor.SensorID}
                            className="bg-white p-6 rounded shadow-lg hover:shadow-xl"
                        >
                            <h3 className="font-semibold text-xl mb-4">{sensor.SensorType} (ID: {sensor.SensorID})</h3>
                            <div className="text-sm text-gray-700 mb-4">
                                <p><strong>Range:</strong> {sensor.RangeMin} - {sensor.RangeMax}</p>
                                <p><strong>Absolute Range:</strong> {sensor.AbsoluteMin} - {sensor.AbsoluteMax}</p>
                                <p><strong>Current Value:</strong> {sensor.CurrentValue}</p>
                                <p><strong>Status:</strong> {sensor.Status}</p>
                                <p><strong>Patient ID:</strong> {sensor.PatientID}</p>
                                <p><strong>Location:</strong> {sensor.Location}</p>
                                <p><strong>Data Collection Frequency:</strong> {sensor.DataCollectionFrequency} minutes</p>
                                <p><strong>Sensor Category:</strong> {sensor.SensorCategory}</p>
                            </div>
                            <button
                                onClick={() => handleViewSensorValues(sensor.SensorID)}
                                className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
                            >
                                View Sensor Values
                            </button>
                            <button
                                onClick={() => handleEditSensor(sensor)}
                                className="bg-green-600 text-white px-4 py-2 rounded mt-2 ml-2"
                            >
                                Update
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No sensor details available for this patient.</p>
                )}
            </div>

            {isModalOpen && editingSensor && (
                <EditSensorModal
                    sensor={editingSensor}
                    onSave={handleAddOrUpdateSensor}
                    onClose={() => setModalOpen(false)}
                />
            )}

            {isValuesModalOpen && (
                <SensorValuesModal
                    values={sensorValues}
                    onClose={() => setValuesModalOpen(false)}
                />
            )}
        </div>
    );
};

const EditSensorModal = ({ sensor, onSave, onClose }) => {
    const [formData, setFormData] = useState({ ...sensor });

    useEffect(() => {
        setFormData({ ...sensor }); // Ensure formData updates when `sensor` changes
    }, [sensor]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        console.log("Saving form data:", formData); // Log to confirm data being saved
        onSave(formData);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-lg max-h-[80vh] overflow-y-auto">
                <h2 className="text-xl font-semibold mb-4 text-center">Edit Sensor</h2>
                <form className="grid grid-cols-2 gap-4">
                    {Object.keys(formData).map((key) => (
                        <div key={key} className="flex flex-col">
                            <label className="font-semibold text-gray-700">{key}:</label>
                            <input
                                type="text"
                                name={key}
                                value={formData[key]}
                                onChange={handleChange}
                                className="border border-gray-300 rounded p-2"
                            />
                        </div>
                    ))}
                </form>
                <div className="flex justify-end mt-6 space-x-4">
                    <button onClick={handleSave} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Save Changes</button>
                    <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Cancel</button>
                </div>
            </div>
        </div>
    );
};

const SensorValuesModal = ({ values, onClose }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
            <h2 className="text-xl font-semibold mb-4">Sensor Values (Top 10)</h2>
            <ul className="space-y-2">
                {values.length > 0 ? (
                    values.map((value, index) => (
                        <li key={index} className="text-gray-700">
                            <strong>Value:</strong> {value.SensorValue} | <strong>Updated At:</strong> {new Date(value.UpdatedAt).toLocaleString()}
                        </li>
                    ))
                ) : (
                    <p>No values found.</p>
                )}
            </ul>
            <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Close</button>
        </div>
    </div>
);

export default SensorManagement;