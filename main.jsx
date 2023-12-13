import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css'; // Make sure to import your custom styles here

const Main = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
