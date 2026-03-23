import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home'
import PlanYourVisit from './pages/PlanYourVisit';
import Sermons from './pages/Sermons';
import HubCentral from './pages/HubCentral';
import SocialMedia from './pages/SocialMedia';
import Live from './pages/Live'
import About from './pages/About';
import Events from './pages/Events';
import ConnectGroups from './pages/ConnectGroups';
import Students from './pages/Students';
import Children from './pages/Children';
import MDO from './pages/MDO';
import Serve from './pages/Serve';
import Midweek from './pages/Midweek';
import Espanol from './pages/Espanol';
import Give from './pages/Give';
import Easter from './pages/Easter';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan-your-visit" element={<PlanYourVisit />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/hub" element={<HubCentral />} />
        <Route path="/social" element={<SocialMedia />} />
        <Route path="/live" element={<Live />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/connect" element={<ConnectGroups />} />
        <Route path="/serve" element={<Serve />} />
        <Route path="/midweek" element={<Midweek />} />
        <Route path="/students" element={<Students />} />
        <Route path="/children" element={<Children />} />
        <Route path="/children/mdo" element={<MDO />} />
        <Route path="/espanol" element={<Espanol />} />
        <Route path="/give" element={<Give />} />
        <Route path="/easter" element={<Easter />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

        {/* Admin routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />

        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  )
}

export default App
