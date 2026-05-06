import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoadingStore } from '../../stores/ui/use-loading-store';

const RouteChangeHandler = () => {
  const location = useLocation();
  const { setLoading } = useLoadingStore();

  useEffect(() => {
    // Show loader on route change
    setLoading(true);

    // Hide loader after 0.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname, setLoading]);

  return null;
};

export default RouteChangeHandler;
