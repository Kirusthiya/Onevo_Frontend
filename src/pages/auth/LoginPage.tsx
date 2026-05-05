import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-vh-100 bg-gray-100">
      <div className="bg-white p-12 rounded-3xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">Login to Onevo</h1>
        {/* Simple form for now */}
        <div className="space-y-4">
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-4 border rounded-xl"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-4 border rounded-xl"
          />
          <button className="w-full py-4 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
