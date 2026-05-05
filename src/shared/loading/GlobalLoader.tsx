import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoadingStore } from '../../stores/ui/use-loading-store';

const GlobalLoader: React.FC = () => {
  const { isLoading, message } = useLoadingStore();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm z-[9999]"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-4 border-white border-t-transparent rounded-full mb-4"
          />
          {message && (
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-white font-medium"
            >
              {message}
            </motion.p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GlobalLoader;
