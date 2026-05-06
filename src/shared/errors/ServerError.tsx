import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';
import monsterImg from '../../assets/500-error.png';

const ServerError: React.FC = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="error-page-container server-error">
      <div className="error-card">
        <div className="error-header">
          <div className="logo-placeholder">✦ ONEVO</div>
          <Link to="/login" className="login-btn">Log In</Link>
        </div>

        <div className="error-content">
          <motion.div 
            className="error-bg-text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            500
          </motion.div>
          
          <motion.img 
            src={monsterImg} 
            alt="500 Monster" 
            className="monster-img"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />

          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Houston, we have a problem
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Our servers are having a bit of a tantrum. We're on it!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="btn-group"
          >
            <button onClick={handleRefresh} className="back-home-btn refresh-btn">
              <RefreshCw size={18} />
              Try again
            </button>
            <Link to="/" className="back-home-btn secondary">
              Back to home
            </Link>
          </motion.div>
        </div>
      </div>

      <style>{`
        .error-page-container.server-error {
          background-color: #fff5f5;
        }

        .error-page-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          font-family: 'Inter', sans-serif;
        }

        .error-card {
          width: 100%;
          max-width: 900px;
          background: white;
          border-radius: 24px;
          padding: 2rem;
          position: relative;
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
          overflow: hidden;
          aspect-ratio: 16/10;
          display: flex;
          flex-direction: column;
        }

        .error-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 10;
        }

        .logo-placeholder {
          font-weight: 700;
          color: #1a2b4b;
          font-size: 1.2rem;
        }

        .login-btn {
          padding: 0.5rem 1.2rem;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          text-decoration: none;
          color: #1a2b4b;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .error-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          text-align: center;
        }

        .error-bg-text {
          position: absolute;
          font-size: 25rem;
          font-weight: 900;
          color: #ef4444;
          pointer-events: none;
          z-index: 1;
          letter-spacing: -1rem;
        }

        .monster-img {
          width: 300px;
          z-index: 2;
          margin-bottom: -2rem;
          filter: drop-shadow(0 10px 20px rgba(239,68,68,0.1));
        }

        .error-content h1 {
          font-size: 2.5rem;
          color: #1a2b4b;
          margin: 0;
          z-index: 2;
          font-weight: 700;
        }

        .error-content p {
          color: #64748b;
          margin: 0.5rem 0 2rem;
          z-index: 2;
        }

        .btn-group {
          display: flex;
          gap: 1rem;
          z-index: 2;
        }

        .back-home-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          background: #ef4444;
          border: none;
          border-radius: 12px;
          text-decoration: none;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 4px 12px rgba(239,68,68,0.2);
        }

        .back-home-btn:hover {
          background: #dc2626;
          transform: translateY(-2px);
        }

        .back-home-btn.secondary {
          background: white;
          border: 1px solid #e2e8f0;
          color: #1a2b4b;
          box-shadow: none;
        }

        .back-home-btn.secondary:hover {
          background: #f8fafc;
        }
      `}</style>
    </div>
  );
};

export default ServerError;
