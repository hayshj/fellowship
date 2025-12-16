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
import Students from './pages/Students';
import Children from './pages/Children';
import MDO from './pages/MDO';
import Serve from './pages/Serve';
import ServeForm from './pages/ServeForm';
import Midweek from './pages/Midweek';
import Espanol from './pages/Espanol';
import Gathering from './pages/Gathering';
import NotFound from './pages/NotFound';
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
        <Route path="/students" element={<Students />} />
        <Route path="/children" element={<Children />} />
        <Route path="/children/mdo" element={<MDO />} />
        <Route path="/espanol" element={<Espanol />} />
        <Route path="/gathering" element={<Gathering />} />

        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
