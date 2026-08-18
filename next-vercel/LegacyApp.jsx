import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import posthog, { posthogEnabled } from './lib/client/posthog';
import Home from './src-pages/Home'
import PlanYourVisit from './src-pages/PlanYourVisit';
import Sermons from './src-pages/Sermons';
import HubCentral from './src-pages/HubCentral';
import SocialMedia from './src-pages/SocialMedia';
import Live from './src-pages/Live'
import About from './src-pages/About';
import Events from './src-pages/Events';
import ConnectGroups from './src-pages/ConnectGroups';
import Students from './src-pages/Students';
import Children from './src-pages/Children';
import MDO from './src-pages/MDO';
import Serve from './src-pages/Serve';
import Midweek from './src-pages/Midweek';
import Give from './src-pages/Give';
import Easter from './src-pages/Easter';
import PrivacyPolicy from './src-pages/PrivacyPolicy';
import NotFound from './src-pages/NotFound';
import AdminLogin from './src-pages/AdminLogin';
import AdminDashboard from './src-pages/AdminDashboard';
import ProtectedRoute from './src-components/ProtectedRoute';
import Footer from './src-components/Footer';
import ScrollToTop from './src-components/ScrollToTop';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  useEffect(() => {
    if (posthogEnabled) {
      posthog.capture('$pageview');
    }
  }, [location.pathname, location.search]);

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
