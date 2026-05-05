import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppRouter } from './router';
import GlobalLoader from './shared/loading/GlobalLoader';

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <GlobalLoader />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
