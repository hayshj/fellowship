import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const [status, setStatus] = useState('checking'); // 'checking' | 'ok' | 'denied'

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      setStatus('denied');
      return;
    }

    fetch('/api/admin/verify', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) {
          console.error(`[ProtectedRoute] /api/admin/verify returned ${res.status}`);
          localStorage.removeItem('adminToken');
        }
        setStatus(res.ok ? 'ok' : 'denied');
      })
      .catch((err) => {
        console.error('[ProtectedRoute] verify fetch failed:', err);
        setStatus('denied');
      });
  }, []);

  if (status === 'checking') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  if (status === 'denied') {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
