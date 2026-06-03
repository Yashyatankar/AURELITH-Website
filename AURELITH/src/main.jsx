import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ScrollVideo from './assets/Components/ScrollVideo';
import App from './App.jsx'
import BentoBox from './assets/Components/BentoBox';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ScrollVideo />
    <BentoBox />
  </StrictMode>,
)
