import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import PlanYourVisit from './pages/PlanYourVisit';
import Sermons from './pages/Sermons';
import HubCentral from './pages/HubCentral';
import HubCentral2 from './pages/HubCentral2';
import HubCentral3 from './pages/HubCentral3';
import Live from './pages/Live'
import About from './pages/About';
import Events from './pages/Events';
import ConnectGroups from './pages/ConnectGroups';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan-your-visit" element={<PlanYourVisit />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/hub" element={<HubCentral />} />
        <Route path="/hub2" element={<HubCentral2 />} />
        <Route path="/hub3" element={<HubCentral3 />} />
        <Route path="/live" element={<Live />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/connect" element={<ConnectGroups />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
