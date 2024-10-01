import React from 'react';
import './index.css';
import App from './App.tsx';
import { createRoot } from 'react-dom/client';

// Import MUI Roboto fonts globally
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const container = document.getElementById('root');

if(container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>,
  );
} else {
  console.error("Root element not found");
}
