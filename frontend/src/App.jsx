import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import PlanYourVisit from './pages/PlanYourVisit';
import Sermons from './pages/Sermons';
import HubCentral from './pages/HubCentral';
import Live from './pages/Live'
import About from './pages/About';
import Events from './pages/Events';
import ConnectGroups from './pages/ConnectGroups';
import Serve from './pages/Serve';
import ServeForm from './pages/ServeForm';
import Midweek from './pages/Midweek';
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
        <Route path="/live" element={<Live />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/connect" element={<ConnectGroups />} />
        <Route path="/serve" element={<Serve />} />
        <Route path="/serve/form" element={<ServeForm />} />
        <Route path="/midweek" element={<Midweek />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
