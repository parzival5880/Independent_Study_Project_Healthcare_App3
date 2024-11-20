import React from 'react';
import { Activity, BarChart, FileText, Users, Shield, Settings } from 'lucide-react';
import OverviewCard from './OverviewCard';
import Navigation from './Navigation';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate(); // Use navigate from react-router-dom

  const overviewCards = [
    {
      title: 'Sensor Management',
      icon: Activity,
      description: 'Manage sensors, view status, and monitor readings',
      path: 'sensors',
    },
    {
      title: 'Sensor Logs',
      icon: BarChart,
      description: 'Track sensor data logs and historical readings',
      path: 'sensor-logs',
    },
    {
      title: 'Access Logs',
      icon: FileText,
      description: 'Monitor system access and user activities',
      path: 'access-logs',
    },
    {
      title: 'Authorized Users',
      icon: Users,
      description: 'Manage user permissions and access levels',
      path: 'authorized-users',
    },
    {
      title: 'Account Requests',
      icon: Shield,
      description: 'Handle new account and access requests',
      path: 'account-requests',
    },
    {
      title: 'MakeAccountRequests',
      icon: Settings,
      description: 'Track and manage sensor configuration changes',
      path: 'make-account-requests', // Navigate to modifications
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {overviewCards.map((card) => (
            <OverviewCard
              key={card.path}
              {...card}
              onClick={() => navigate(`/dashboard/${card.path}`)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
