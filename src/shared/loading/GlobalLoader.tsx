import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLoadingStore } from '../../stores/ui/use-loading-store';
import PremiumLoader from './PremiumLoader';

const GlobalLoader: React.FC = () => {
  const { isLoading } = useLoadingStore();

  return (
    <AnimatePresence>
      {isLoading && <PremiumLoader />}
    </AnimatePresence>
  );
};

export default GlobalLoader;
