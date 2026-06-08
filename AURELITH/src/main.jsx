import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ScrollVideo from './assets/Components/ScrollVideo';
import App from './App.jsx'
import BentoBox from './assets/Components/BentoBox';
import CollectionSection from './assets/Components/CollectionSection';  
import Footer from './assets/Components/Footer.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ScrollVideo />
    <BentoBox />
    <CollectionSection />
    <Footer/>
  </StrictMode>,
)
