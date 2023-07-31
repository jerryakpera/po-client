import './index.css';
import App from './App.jsx';
import ReactDOM from 'react-dom/client';

import { AuthProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
