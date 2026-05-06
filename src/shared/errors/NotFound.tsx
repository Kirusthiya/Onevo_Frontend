import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import monsterImg from '../../assets/404-monster.png';

const NotFound: React.FC = () => {
  return (
    <div className="error-page-container">
      <div className="error-card">
        <div className="error-header">
       
        </div>

        <div className="error-content">
          <motion.div 
            className="error-bg-text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            404
          </motion.div>
          
          <motion.img 
            src={monsterImg} 
            alt="404 Monster" 
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
            Oops, i think we're lost
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Let's get you back somewhere familiar...
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Link to="/" className="back-home-btn">
              <ArrowLeft size={18} />
              Back to home
            </Link>
          </motion.div>
        </div>
      </div>

      <style>{`
        .error-page-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f0f7ff;
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
          transition: all 0.2s;
        }

        .login-btn:hover {
          background: #f8fafc;
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
          color: #1a2b4b;
          pointer-events: none;
          z-index: 1;
          letter-spacing: -1rem;
        }

        .monster-img {
          width: 300px;
          z-index: 2;
          margin-bottom: -2rem;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.1));
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

        .back-home-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          text-decoration: none;
          color: #1a2b4b;
          font-weight: 600;
          transition: all 0.2s;
          box-shadow: 0 4px 6px rgba(0,0,0,0.02);
          z-index: 2;
        }

        .back-home-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0,0,0,0.05);
        }
      `}</style>
    </div>
  );
};

export default NotFound;
