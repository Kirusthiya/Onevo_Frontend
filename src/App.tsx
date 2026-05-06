import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppRouter } from './router';
import GlobalLoader from './shared/loading/GlobalLoader';
import RouteChangeHandler from './shared/loading/RouteChangeHandler';

function App() {
  return (
    <BrowserRouter>
      <RouteChangeHandler />
      <Toaster position="top-right" />
      <GlobalLoader />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
