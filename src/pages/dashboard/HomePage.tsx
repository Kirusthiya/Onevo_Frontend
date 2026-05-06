import React from 'react';
import MainLayout from '../../shared/layout/MainLayout';

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <div style={{ color: '#0f172a' }}>
        <h1 className="text-4xl font-black tracking-tight mb-4">Welcome back, Admin</h1>
        <p className="text-slate-500">Here's what's happening with your HRMS today.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
            <h3 className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-2">Total Employees</h3>
            <div className="text-4xl font-black text-slate-900">1,284</div>
          </div>
          <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
            <h3 className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-2">Active Projects</h3>
            <div className="text-4xl font-black text-slate-900">42</div>
          </div>
          <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
            <h3 className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-2">Pending Requests</h3>
            <div className="text-4xl font-black text-slate-900">18</div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
