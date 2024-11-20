// import React, { useState } from 'react';

// const Register = ({ onSuccess, onSwitchToLogin }) => {
//   const [formData, setFormData] = useState({
//     FirstName: '',
//     LastName: '',
//     Email: '',
//     Number: '',
//     Role: 'User'
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (!formData.FirstName || !formData.LastName || !formData.Email || !formData.Number) {
//         setError('Please fill in all fields');
//         return;
//       }

//       const response = await fetch('https://backend-login-1-xc0i.onrender.com/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error('Registration failed');
//       }

//       const data = await response.json();
//       setSuccess(data.message);
//       setTimeout(onSwitchToLogin, 2000);
//     } catch (error) {
//       setError(error.message || 'Registration failed');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center p-4">
//       <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Create Account</h2>
//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//             {error}
//           </div>
//         )}
//         {success && (
//           <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
//             {success}
//           </div>
//         )}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
//                 value={formData.FirstName}
//                 onChange={(e) => setFormData({ ...formData, FirstName: e.target.value })}
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
//                 value={formData.LastName}
//                 onChange={(e) => setFormData({ ...formData, LastName: e.target.value })}
//               />
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//             <input
//               type="email"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
//               value={formData.Email}
//               onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
//             <input
//               type="tel"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
//               value={formData.Number}
//               onChange={(e) => setFormData({ ...formData, Number: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
//             <select
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
//               value={formData.Role}
//               onChange={(e) => setFormData({ ...formData, Role: e.target.value })}
//             >
//               <option value="User">User</option>
//               <option value="Patient">Patient</option>
//               <option value="HealthcarePro">Healthcare Provider</option>
//               <option value="HealthcareAss">Healthcare Assistant</option>
//               <option value="CareGiver">Caregiver</option>
//             </select>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-lg font-semibold"
//           >
//             Create Account
//           </button>
//         </form>
//         <div className="mt-6 text-center">
//           <button
//             onClick={onSwitchToLogin}
//             className="text-purple-600 hover:text-purple-800"
//           >
//             Already have an account? Sign in
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;




// import React, { useState } from 'react';

// const Register = ({ onSuccess, onSwitchToLogin }) => {
//   const [formData, setFormData] = useState({
//     FirstName: '',
//     LastName: '',
//     Email: '',
//     Number: '',
//     Role: 'User'
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (!formData.FirstName || !formData.LastName || !formData.Email || !formData.Number) {
//         setError('Please fill in all fields');
//         return;
//       }

//       const response = await fetch('https://backend-login-1-xc0i.onrender.com/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error('Registration failed');
//       }

//       const data = await response.json();
//       setSuccess(data.message);
//       setTimeout(onSwitchToLogin, 2000);
//     } catch (error) {
//       setError(error.message || 'Registration failed');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center p-4">
//       <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Create Account</h2>
//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//             {error}
//           </div>
//         )}
//         {success && (
//           <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
//             {success}
//           </div>
//         )}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2 text-left">First Name</label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
//                 value={formData.FirstName}
//                 onChange={(e) => setFormData({ ...formData, FirstName: e.target.value })}
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Last Name</label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
//                 value={formData.LastName}
//                 onChange={(e) => setFormData({ ...formData, LastName: e.target.value })}
//               />
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Email</label>
//             <input
//               type="email"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
//               value={formData.Email}
//               onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Phone Number</label>
//             <input
//               type="tel"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
//               value={formData.Number}
//               onChange={(e) => setFormData({ ...formData, Number: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Role</label>
//             <select
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
//               value={formData.Role}
//               onChange={(e) => setFormData({ ...formData, Role: e.target.value })}
//             >
//               <option value="User">User</option>
//               <option value="Patient">Patient</option>
//               <option value="HealthcarePro">Healthcare Provider</option>
//               <option value="HealthcareAss">Healthcare Assistant</option>
//               <option value="CareGiver">Caregiver</option>
//             </select>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-lg font-semibold"
//           >
//             Create Account
//           </button>
//         </form>
//         <div className="mt-6 text-center">
//           <button
//             onClick={onSwitchToLogin}
//             className="text-purple-600 hover:text-purple-800"
//           >
//             Already have an account? Sign in
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


//updated 


import React, { useState } from 'react';

const Register = ({ onSuccess, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Number: '',
    Role: 'User'
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      if (!formData.FirstName || !formData.LastName || !formData.Email || !formData.Number) {
        setError('Please fill in all fields');
        return;
      }

      const response = await fetch('https://backend-login-1-xc0i.onrender.com/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      setSuccess(data.message);

      // Redirect to login page immediately upon successful registration
      onSwitchToLogin();
    } catch (error) {
      setError(error.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Create Account</h2>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {success}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-left">First Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                value={formData.FirstName}
                onChange={(e) => setFormData({ ...formData, FirstName: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Last Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                value={formData.LastName}
                onChange={(e) => setFormData({ ...formData, LastName: e.target.value })}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              value={formData.Email}
              onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
            />
          </div>
          <div>
  <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Phone Number</label>
  <input
    type="tel"
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
    value={formData.Number}
    onChange={(e) => setFormData({ ...formData, Number: e.target.value })}
  />
</div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Role</label>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                value={formData.Role}
                onChange={(e) => setFormData({ ...formData, Role: e.target.value })}
              >
                <option value="User">User</option>
                <option value="Patient">Patient</option>
                <option value="HealthcarePro">Healthcare Provider</option>
                <option value="HealthcareAss">Healthcare Assistant</option>
                <option value="CareGiver">Caregiver</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-lg font-semibold"
            >
              Create Account
            </button>
          </form>
          <div className="mt-6 text-center">
            <button
              onClick={onSwitchToLogin}
              className="text-purple-600 hover:text-purple-800"
            >
              Already have an account? Sign in
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Register;