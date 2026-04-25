import { useState, useCallback } from 'react';
import { Shield, ChevronRight, Lock, BarChart2 } from 'lucide-react';

// ✅ Mock API — remplace les vrais appels fetch
const mockApi = async (endpoint, options = {}) => {
  await new Promise(r => setTimeout(r, 800)); // simule la latence réseau

  if (endpoint === '/auth/login') {
    const { email, password } = JSON.parse(options.body);
    if (email === 'test@test.com' && password === 'test123') {
      return { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiaWF0IjoxNzAwMDAwMDAwfQ.abc123signature' };
    }
    throw new Error('Email ou mot de passe incorrect');
  }

  if (endpoint === '/stats') {
    return {
      utilisateurs: 1284,
      requetes_today: 4732,
      uptime: '99.98%',
      derniere_maj: new Date().toISOString(),
    };
  }

  throw new Error('Endpoint introuvable');
};

export default function ApiDemo() {
  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('test123');
  const [token, setToken] = useState('');
  const [stats, setStats] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRequest = useCallback(async (fn) => {
    setError('');
    setLoading(true);
    try { await fn(); }
    catch (err) { setError(err.message || 'Erreur réseau'); }
    finally { setLoading(false); }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setStats(null);
    await handleRequest(async () => {
      const data = await mockApi('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      setToken(data.token);
    });
  };

  const handleLogout = () => { setToken(''); setStats(null); setError(''); };

  const fetchStats = async () => {
    await handleRequest(async () => {
      const data = await mockApi('/stats', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStats(data);
    });
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        .api-card { font-family: 'Inter', sans-serif; }
        .api-input { transition: border-color 0.2s, box-shadow 0.2s; }
        .api-input:focus { outline: none; border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37,99,235,0.12); }
        .api-input:disabled { opacity: 0.5; cursor: not-allowed; }
        .api-btn-primary { transition: all 0.2s; }
        .api-btn-primary:hover:not(:disabled) { background-color: #1d4ed8 !important; box-shadow: 0 4px 14px rgba(37,99,235,0.35); transform: translateY(-1px); }
        .api-btn-primary:active:not(:disabled) { transform: translateY(0); }
        .api-btn-secondary { transition: all 0.2s; }
        .api-btn-secondary:hover:not(:disabled) { background-color: #f0f7ff !important; border-color: #2563eb !important; color: #2563eb !important; }
        .api-logout { transition: all 0.2s; }
        .api-logout:hover { border-color: #ef4444 !important; color: #ef4444 !important; }
        .api-card-wrap { transition: box-shadow 0.2s, transform 0.2s; }
        .api-card-wrap:hover { box-shadow: 0 20px 40px rgba(0,0,0,0.1); transform: translateY(-2px); }
        .api-cta { transition: all 0.2s; }
        .api-cta:hover { background-color: #1d4ed8 !important; box-shadow: 0 4px 14px rgba(37,99,235,0.35); transform: translateY(-1px); }
      `}</style>

      <div style={{ maxWidth: 896, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span style={{ color: '#2563eb', fontWeight: 600, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'Inter, sans-serif' }}>
            Authentification JWT
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 700, color: '#111827', margin: '12px 0 8px', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>
            Démo API sécurisée
          </h2>
          <p style={{ color: '#6b7280', fontSize: 16, fontFamily: 'Inter, sans-serif', margin: 0 }}>
            Identifiants de test : <code style={{ background: '#f3f4f6', padding: '2px 6px', borderRadius: 4, fontSize: 13 }}>test@test.com</code> / <code style={{ background: '#f3f4f6', padding: '2px 6px', borderRadius: 4, fontSize: 13 }}>test123</code>
          </p>
        </div>

        <div className="api-card api-card-wrap" style={{ background: 'white', borderRadius: 20, padding: '40px', boxShadow: '0 8px 32px rgba(0,0,0,0.08)', maxWidth: 480, margin: '0 auto' }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#2563eb', fontWeight: 600, fontSize: 14, marginBottom: 24 }}>
            <Shield size={18} />
            {token ? 'SESSION ACTIVE' : 'CONNEXION'}
          </div>

          {!token ? (
            <form onSubmit={handleLogin}>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Email</label>
                <input
                  className="api-input"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="vous@exemple.com"
                  type="email"
                  autoComplete="email"
                  required
                  disabled={loading}
                  style={{ width: '100%', boxSizing: 'border-box', padding: '10px 14px', borderRadius: 10, border: '1.5px solid #e5e7eb', fontSize: 14, color: '#111827', background: '#f9fafb', fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Mot de passe</label>
                <input
                  className="api-input"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  type="password"
                  autoComplete="current-password"
                  required
                  disabled={loading}
                  style={{ width: '100%', boxSizing: 'border-box', padding: '10px 14px', borderRadius: 10, border: '1.5px solid #e5e7eb', fontSize: 14, color: '#111827', background: '#f9fafb', fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="api-btn-primary"
                style={{ width: '100%', padding: '12px', borderRadius: 10, border: 'none', background: '#2563eb', color: 'white', fontWeight: 700, fontSize: 14, cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.6 : 1, fontFamily: 'Inter, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
              >
                <Lock size={15} />
                {loading ? 'Connexion…' : 'Se connecter'}
              </button>
            </form>
          ) : (
            <div>
              <div style={{ background: '#eff6ff', borderRadius: 10, padding: '12px 14px', marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 3 }}>Token JWT</div>
                  <div style={{ fontSize: 12, color: '#1e40af', fontFamily: 'monospace', wordBreak: 'break-all' }}>{token.slice(0, 36)}…</div>
                </div>
                <button onClick={handleLogout} className="api-logout" style={{ background: 'white', border: '1.5px solid #e5e7eb', borderRadius: 8, padding: '5px 12px', fontSize: 12, fontWeight: 600, color: '#6b7280', cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: 'Inter, sans-serif' }}>
                  Déco.
                </button>
              </div>

              <button
                onClick={fetchStats}
                disabled={loading}
                className="api-btn-secondary"
                style={{ width: '100%', padding: '12px', borderRadius: 10, border: '1.5px solid #e5e7eb', background: 'white', color: '#374151', fontWeight: 700, fontSize: 14, cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.6 : 1, fontFamily: 'Inter, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 12 }}
              >
                <BarChart2 size={15} />
                {loading ? 'Chargement…' : 'Charger les stats protégées'}
              </button>
            </div>
          )}

          {error && (
            <div role="alert" style={{ marginTop: 12, background: '#fef2f2', border: '1.5px solid #fecaca', borderRadius: 10, padding: '10px 14px', fontSize: 13, color: '#dc2626', fontFamily: 'Inter, sans-serif', display: 'flex', alignItems: 'center', gap: 8 }}>
              ⚠ {error}
            </div>
          )}

          {stats && (
            <div style={{ marginTop: 16 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Réponse</div>
              <pre style={{ background: '#f9fafb', border: '1.5px solid #e5e7eb', borderRadius: 10, padding: '14px', fontSize: 12, color: '#1e40af', overflowX: 'auto', margin: 0, fontFamily: 'monospace', lineHeight: 1.7 }}>
                {JSON.stringify(stats, null, 2)}
              </pre>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
          <button
            className="api-cta"
            onClick={() => {}}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#2563eb', color: 'white', fontWeight: 600, fontSize: 15, padding: '12px 28px', borderRadius: 50, border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}
          >
            Voir la documentation
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}