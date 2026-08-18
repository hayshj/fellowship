import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EMPTY_FORM = { title: '', date: '', scripture: '', speaker: '', videoLink: '' };

function authHeaders() {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
  };
}

const inputClass =
  'w-full bg-white border border-gray-200 rounded-full px-5 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm';

export default function AdminDashboard() {
  const navigate = useNavigate();

  // ── sermon list ──────────────────────────────────────────────
  const [sermons, setSermons] = useState([]);
  const [loadingSermons, setLoadingSermons] = useState(true);
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 10;

  // ── add form ─────────────────────────────────────────────────
  const [form, setForm] = useState(EMPTY_FORM);
  const [addError, setAddError] = useState('');
  const [addSuccess, setAddSuccess] = useState('');
  const [addLoading, setAddLoading] = useState(false);

  // ── inline edit ───────────────────────────────────────────────
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState(EMPTY_FORM);
  const [editError, setEditError] = useState('');
  const [editLoading, setEditLoading] = useState(false);

  // ─────────────────────────────────────────────────────────────
  async function fetchSermons() {
    setLoadingSermons(true);
    try {
      const res = await fetch('/api/sermon/all');
      const data = await res.json();
      setSermons(data);
    } catch {
      // silently fail
    } finally {
      setLoadingSermons(false);
    }
  }

  useEffect(() => { fetchSermons(); }, []);

  // ── logout ────────────────────────────────────────────────────
  function logout() {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  }

  // ── add sermon ────────────────────────────────────────────────
  async function handleAdd(e) {
    e.preventDefault();
    setAddError('');
    setAddSuccess('');
    setAddLoading(true);

    try {
      const res = await fetch('/api/sermon', {
        method: 'POST',
        headers: authHeaders(),
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setAddError(data.error || 'Failed to add sermon');
        return;
      }

      setAddSuccess(`"${data.title}" added successfully!`);
      setForm(EMPTY_FORM);
      setPage(1);
      fetchSermons();
    } catch {
      setAddError('Network error. Please try again.');
    } finally {
      setAddLoading(false);
    }
  }

  // ── delete sermon ─────────────────────────────────────────────
  async function handleDelete(id, title) {
    if (!window.confirm(`Delete "${title}"? This cannot be undone.`)) return;

    try {
      const res = await fetch(`/api/sermon/${id}`, {
        method: 'DELETE',
        headers: authHeaders(),
      });
      if (res.ok) {
        setSermons((prev) => prev.filter((s) => s._id !== id));
      }
    } catch {
      // silently fail
    }
  }

  // ── edit sermon ───────────────────────────────────────────────
  function startEdit(sermon) {
    setEditingId(sermon._id);
    setEditForm({
      title: sermon.title || '',
      date: sermon.date || '',
      scripture: sermon.scripture || '',
      speaker: sermon.speaker || '',
      videoLink: sermon.videoLink || '',
    });
    setEditError('');
  }

  function cancelEdit() {
    setEditingId(null);
    setEditError('');
  }

  async function saveEdit(id) {
    setEditLoading(true);
    setEditError('');

    try {
      const res = await fetch(`/api/sermon/${id}`, {
        method: 'PUT',
        headers: authHeaders(),
        body: JSON.stringify(editForm),
      });
      const data = await res.json();

      if (!res.ok) {
        setEditError(data.error || 'Failed to save');
        return;
      }

      setSermons((prev) => prev.map((s) => (s._id === id ? data.sermon : s)));
      setEditingId(null);
    } catch {
      setEditError('Network error. Please try again.');
    } finally {
      setEditLoading(false);
    }
  }

  // ─────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-neutral-950 text-white px-8 py-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
            Fellowship Church
          </p>
          <h1 className="text-xl font-black tracking-tighter mt-0.5">
            Admin Dashboard
          </h1>
        </div>
        <button
          onClick={logout}
          className="bg-white/10 hover:bg-white/20 text-white font-medium px-5 py-2 rounded-full transition-colors text-sm"
        >
          Logout
        </button>
      </header>

      <div className="max-w-5xl mx-auto px-6 md:px-12 py-14 space-y-14">

        {/* ── Add Sermon ─────────────────────────────────────── */}
        <section>
          <h2 className="text-3xl font-black tracking-tighter text-gray-900 mb-6">
            Add New Sermon
          </h2>

          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-stone-100">
            <form onSubmit={handleAdd} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Title <span className="text-red-400">*</span>
                  </label>
                  <input
                    required
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    placeholder="Sermon title"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Date <span className="text-red-400">*</span>
                  </label>
                  <input
                    required
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Speaker
                  </label>
                  <input
                    value={form.speaker}
                    onChange={(e) => setForm({ ...form, speaker: e.target.value })}
                    placeholder="Speaker name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Scripture
                  </label>
                  <input
                    value={form.scripture}
                    onChange={(e) => setForm({ ...form, scripture: e.target.value })}
                    placeholder="e.g. John 3:16"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  YouTube Video Link <span className="text-red-400">*</span>
                </label>
                <input
                  required
                  value={form.videoLink}
                  onChange={(e) => setForm({ ...form, videoLink: e.target.value })}
                  placeholder="https://www.youtube.com/watch?v=..."
                  className={inputClass}
                />
              </div>

              {addError && <p className="text-red-500 text-sm px-1">{addError}</p>}
              {addSuccess && <p className="text-green-600 text-sm px-1">{addSuccess}</p>}

              <button
                type="submit"
                disabled={addLoading}
                className="bg-neutral-900 hover:bg-neutral-700 disabled:opacity-50 text-white font-bold uppercase tracking-wider px-8 py-3.5 rounded-full transition-colors"
              >
                {addLoading ? 'Adding...' : 'Add Sermon'}
              </button>
            </form>
          </div>
        </section>

        {/* ── Sermon List ────────────────────────────────────── */}
        <section>
          <h2 className="text-3xl font-black tracking-tighter text-gray-900 mb-6">
            All Sermons{' '}
            <span className="text-gray-400 font-normal text-2xl">({sermons.length})</span>
          </h2>

          {loadingSermons ? (
            <p className="text-gray-400">Loading sermons...</p>
          ) : sermons.length === 0 ? (
            <p className="text-gray-400">No sermons yet.</p>
          ) : (
            <div className="space-y-3">
              {sermons.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE).map((sermon) =>
                editingId === sermon._id ? (
                  /* ── Edit Row ── */
                  <div
                    key={sermon._id}
                    className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Title</label>
                        <input
                          value={editForm.title}
                          onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Date</label>
                        <input
                          type="date"
                          value={editForm.date}
                          onChange={(e) => setEditForm({ ...editForm, date: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Speaker</label>
                        <input
                          value={editForm.speaker}
                          onChange={(e) => setEditForm({ ...editForm, speaker: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Scripture</label>
                        <input
                          value={editForm.scripture}
                          onChange={(e) => setEditForm({ ...editForm, scripture: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Video Link</label>
                      <input
                        value={editForm.videoLink}
                        onChange={(e) => setEditForm({ ...editForm, videoLink: e.target.value })}
                        className={inputClass}
                      />
                    </div>

                    {editError && <p className="text-red-500 text-sm px-1">{editError}</p>}

                    <div className="flex gap-2">
                      <button
                        onClick={() => saveEdit(sermon._id)}
                        disabled={editLoading}
                        className="bg-neutral-900 hover:bg-neutral-700 disabled:opacity-50 text-white font-bold uppercase tracking-wider px-6 py-2.5 rounded-full text-sm transition-colors"
                      >
                        {editLoading ? 'Saving...' : 'Save'}
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="bg-stone-100 hover:bg-stone-200 text-gray-700 font-medium px-6 py-2.5 rounded-full text-sm transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  /* ── Display Row ── */
                  <div
                    key={sermon._id}
                    className="bg-white rounded-2xl px-6 py-5 border border-stone-100 shadow-sm flex flex-col sm:flex-row sm:items-center gap-4 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-gray-900 truncate">{sermon.title}</p>
                      <p className="text-sm text-gray-400 mt-0.5">
                        {sermon.date}
                        {sermon.speaker ? ` · ${sermon.speaker}` : ''}
                        {sermon.scripture ? ` · ${sermon.scripture}` : ''}
                      </p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <button
                        onClick={() => startEdit(sermon)}
                        className="bg-stone-100 hover:bg-stone-200 text-gray-900 font-medium px-4 py-2 rounded-full text-sm transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(sermon._id, sermon.title)}
                        className="bg-red-50 hover:bg-red-100 text-red-600 font-medium px-4 py-2 rounded-full text-sm transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>
          )}

          {/* Pagination */}
          {sermons.length > PAGE_SIZE && (
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={() => { setPage((p) => p - 1); setEditingId(null); }}
                disabled={page === 1}
                className="bg-white border border-stone-200 hover:border-stone-400 disabled:opacity-30 disabled:cursor-not-allowed text-gray-900 font-medium px-5 py-2 rounded-full text-sm transition-colors shadow-sm"
              >
                ← Previous
              </button>

              <p className="text-sm text-gray-400">
                Page <span className="font-semibold text-gray-700">{page}</span> of{' '}
                <span className="font-semibold text-gray-700">{Math.ceil(sermons.length / PAGE_SIZE)}</span>
              </p>

              <button
                onClick={() => { setPage((p) => p + 1); setEditingId(null); }}
                disabled={page === Math.ceil(sermons.length / PAGE_SIZE)}
                className="bg-white border border-stone-200 hover:border-stone-400 disabled:opacity-30 disabled:cursor-not-allowed text-gray-900 font-medium px-5 py-2 rounded-full text-sm transition-colors shadow-sm"
              >
                Next →
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
