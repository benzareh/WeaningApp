import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import useStore from './store/useStore';
import { cloudEnabled } from './lib/supabase';
import { AuthProvider, useAuth } from './auth/AuthProvider';
import Onboarding from './pages/Onboarding';
import Auth from './pages/Auth';

// The landing page carries three.js + GSAP — keep it out of the main bundle
// so the everyday app stays fast on mobile.
const Landing = lazy(() => import('./pages/Landing'));
import AppLayout from './components/layout/AppLayout';
import Planner from './pages/Planner';
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';
import AddRecipe from './pages/AddRecipe';
import Shopping from './pages/Shopping';
import Foods from './pages/Foods';
import Settings from './pages/Settings';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

const Spinner = () => (
  <div className="flex min-h-screen items-center justify-center bg-[#FDF6EC] text-4xl">🥄</div>
);

// Requires a signed-in session (when cloud accounts are enabled).
function RequireAuth({ children }) {
  const { session, loading } = useAuth();
  if (!cloudEnabled) return children; // local-only mode: no login needed
  if (loading) return <Spinner />;
  if (!session) return <Navigate to="/login" replace />;
  return children;
}

function RequireOnboarding({ children }) {
  const onboarded = useStore((s) => s.profile.onboarded);
  if (!onboarded) return <Navigate to="/welcome" replace />;
  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Spinner />}>
                <Landing />
              </Suspense>
            }
          />
          <Route path="/login" element={<Auth />} />
          <Route
            path="/welcome"
            element={
              <RequireAuth>
                <Onboarding />
              </RequireAuth>
            }
          />
          <Route
            path="/app"
            element={
              <RequireAuth>
                <RequireOnboarding>
                  <AppLayout />
                </RequireOnboarding>
              </RequireAuth>
            }
          >
            <Route index element={<Navigate to="/app/planner" replace />} />
            <Route path="planner" element={<Planner />} />
            <Route path="recipes" element={<Recipes />} />
            <Route path="recipes/new" element={<AddRecipe />} />
            <Route path="recipes/:id" element={<RecipeDetail />} />
            <Route path="shopping" element={<Shopping />} />
            <Route path="foods" element={<Foods />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
