import React, { useState, useEffect } from 'react';

const AddSensorModal = ({ onClose, onSubmit, initialData }) => {
  const [sensorDetails, setSensorDetails] = useState({
    SensorType: '',
    RangeMin: '',
    RangeMax: '',
    AbsoluteMin: '',
    AbsoluteMax: '',
    CurrentValue: '',
    Status: 'Active',
    Location: '',
    DataCollectionFrequency: '',
    SensorCategory: '',
  });

  // Pre-fill the form if editing existing data
  useEffect(() => {
    if (initialData) {
      setSensorDetails(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSensorDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(sensorDetails); // Submit the form data to parent component
    onClose(); // Close modal after submission
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-2xl font-bold mb-4">
          {initialData ? 'Update Sensor' : 'Add New Sensor'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Sensor Type</label>
            <input
              type="text"
              name="SensorType"
              value={sensorDetails.SensorType}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1 font-medium">Range Min</label>
              <input
                type="number"
                name="RangeMin"
                value={sensorDetails.RangeMin}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Range Max</label>
              <input
                type="number"
                name="RangeMax"
                value={sensorDetails.RangeMax}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1 font-medium">Absolute Min</label>
              <input
                type="number"
                name="AbsoluteMin"
                value={sensorDetails.AbsoluteMin}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Absolute Max</label>
              <input
                type="number"
                name="AbsoluteMax"
                value={sensorDetails.AbsoluteMax}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Current Value</label>
            <input
              type="number"
              name="CurrentValue"
              value={sensorDetails.CurrentValue}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Status</label>
            <select
              name="Status"
              value={sensorDetails.Status}
              onChange={handleChange}
              className="w-full border rounded p-2"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Location</label>
            <input
              type="text"
              name="Location"
              value={sensorDetails.Location}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Data Collection Frequency</label>
            <input
              type="text"
              name="DataCollectionFrequency"
              value={sensorDetails.DataCollectionFrequency}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Sensor Category</label>
            <input
              type="text"
              name="SensorCategory"
              value={sensorDetails.SensorCategory}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-600 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              {initialData ? 'Update Sensor' : 'Add Sensor'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSensorModal;
