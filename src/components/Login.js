// // Luv login code 

// // components/Login.js

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [credentials, setCredentials] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');
//   const [responseMessage, setResponseMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setResponseMessage('');
//     try {
//       console.log('Attempting to login with credentials:', credentials);

//       const response = await fetch('https://backend-login-1-xc0i.onrender.com/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(credentials),
//       });

//       if (!response.ok) {
//         throw new Error('Invalid email or password');
//       }

//       const data = await response.json();
//       console.log('Login successful, received data:', data);
//       
//       localStorage.setItem('authToken', data.token);
//       
//       // Confirm token storage
//       if (localStorage.getItem('authToken')) {
//         console.log('Token successfully stored in localStorage');
//       } else {
//         console.log('Token was not stored in localStorage');
//       }

//       setResponseMessage(`Welcome ${data.user || 'User'}!`);

//       console.log('Redirecting to /dashboard');
//       navigate('/dashboard');
//     } catch (error) {
//       console.error('Login error:', error);
//       setError(error.message || 'Login failed. Please try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-4">
//       <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Welcome Back</h2>
//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//             {error}
//           </div>
//         )}
//         {responseMessage && (
//           <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
//             {responseMessage}
//           </div>
//         )}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Email</label>
//             <input
//               type="email"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your email"
//               value={credentials.email}
//               onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Password</label>
//             <input
//               type="password"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your password"
//               value={credentials.password}
//               onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold"
//           >
//             Sign In
//           </button>
//         </form>
//         <div className="mt-6 text-center">
//           <button
//             onClick={() => navigate('/register')}
//             className="text-blue-600 hover:text-blue-800"
//           >
//             Don't have an account? Sign up
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// components/Login.js

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [credentials, setCredentials] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');
//   const [responseMessage, setResponseMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setResponseMessage('');
//     try {
//       const response = await fetch('https://backend-login-1-xc0i.onrender.com/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(credentials),
//       });

//       if (!response.ok) {
//         throw new Error('Invalid email or password');
//       }

//       const data = await response.json();
//       console.log('Login successful, received data:', data);

//       // Store authToken and patientID in localStorage
//       localStorage.setItem('authToken', data.token);
//       localStorage.setItem('patientID', data.user.PatientID); // Assuming PatientID is part of the user object in response

//       setResponseMessage(`Welcome ${data.user || 'User'}!`);

//       console.log('Redirecting to /dashboard');
//       navigate('/dashboard');
//     } catch (error) {
//       console.error('Login error:', error);
//       setError(error.message || 'Login failed. Please try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-4">
//       <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Welcome Back</h2>
//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//             {error}
//           </div>
//         )}
//         {responseMessage && (
//           <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
//             {responseMessage}
//           </div>
//         )}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Email</label>
//             <input
//               type="email"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your email"
//               value={credentials.email}
//               onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Password</label>
//             <input
//               type="password"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your password"
//               value={credentials.password}
//               onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold"
//           >
//             Sign In
//           </button>
//         </form>
//         <div className="mt-6 text-center">
//           <button
//             onClick={() => navigate('/register')}
//             className="text-blue-600 hover:text-blue-800"
//           >
//             Don't have an account? Sign up
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [credentials, setCredentials] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');
//   const [responseMessage, setResponseMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setResponseMessage('');

//     try {
//       console.log('Attempting to login with credentials:', credentials);

//       const response = await fetch('https://backend-login-1-xc0i.onrender.com/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(credentials),
//       });

//       if (!response.ok) {
//         throw new Error('Invalid email or password');
//       }

//       const data = await response.json();
//       console.log('Login successful, received data:', data);

//       // Check if user is a verified patient before storing token and redirecting
//       if (data.status === 1 && data.role === 'Patient') {
//         localStorage.setItem('authToken', data.access_token);
//         localStorage.setItem('userID', data.user_id); // Save user ID for further use
//         setResponseMessage(`Welcome ${data.user || 'User'}!`);

//         console.log('Redirecting to /dashboard');
//         navigate('/dashboard');
//       } else {
//         setError('Access denied: Only verified patients are allowed.');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       setError(error.message || 'Login failed. Please try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-4">
//       <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Welcome Back</h2>
//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//             {error}
//           </div>
//         )}
//         {responseMessage && (
//           <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
//             {responseMessage}
//           </div>
//         )}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Email</label>
//             <input
//               type="email"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your email"
//               value={credentials.email}
//               onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Password</label>
//             <input
//               type="password"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your password"
//               value={credentials.password}
//               onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold"
//           >
//             Sign In
//           </button>
//         </form>
//         <div className="mt-6 text-center">
//           <button
//             onClick={() => navigate('/register')}
//             className="text-blue-600 hover:text-blue-800"
//           >
//             Don't have an account? Sign up
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResponseMessage('');

    try {
      const response = await fetch('https://backend-login-1-xc0i.onrender.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error('Invalid email or password');
      }

      const data = await response.json();

      if (data.status === 1 && data.role === 'Patient') {
        localStorage.setItem('authToken', data.access_token);
        localStorage.setItem('UserID', data.user_id);
        setResponseMessage(`Welcome ${data.user || 'User'}!`);
        navigate('/dashboard');
      } else {
        setError('Access denied: Only verified patients are allowed.');
      }
    } catch (error) {
      setError(error.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded mb-3">
            {error}
          </div>
        )}
        {responseMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-3 py-2 rounded mb-3">
            {responseMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg font-semibold"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={() => navigate('/register')}
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            Don't have an account? Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;