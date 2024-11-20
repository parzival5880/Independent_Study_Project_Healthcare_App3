import React from 'react';

const OverviewCard = ({ title, icon: Icon, description, onClick }) => (
  <div
    onClick={onClick}
    className="bg-white rounded-xl shadow-sm p-6 border hover:shadow-lg transition-shadow cursor-pointer"
  >
    <div className="flex items-center justify-between mb-4">
      <div className="p-2 bg-blue-50 rounded-lg">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <span className="text-sm font-medium text-blue-600">View Details</span>
    </div>
    <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default OverviewCard;
