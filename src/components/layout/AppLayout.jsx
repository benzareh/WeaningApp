import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { CalendarDays, BookOpen, ShoppingBasket, Apple, Settings } from 'lucide-react';
import useStore from '../../store/useStore';
import { ageInMonths, formatAge } from '../../utils/helpers';

const NAV = [
  { to: '/app/planner', label: 'Planner', icon: CalendarDays },
  { to: '/app/recipes', label: 'Recipes', icon: BookOpen },
  { to: '/app/shopping', label: 'Shopping', icon: ShoppingBasket },
  { to: '/app/foods', label: 'Foods', icon: Apple },
  { to: '/app/settings', label: 'Settings', icon: Settings },
];

export default function AppLayout() {
  const profile = useStore((s) => s.profile);
  const navigate = useNavigate();
  const months = ageInMonths(profile.dob);

  return (
    <div className="min-h-screen bg-[#FDF6EC] pb-24 md:pb-0">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-[#1A2B3C]/8 bg-[#FDF6EC]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <button onClick={() => navigate('/')} className="flex items-center gap-2">
            <img src="/pea.svg" alt="" className="h-8 w-8" />
            <span className="text-lg font-bold text-[#1A2B3C]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Little Spoons
            </span>
          </button>
          <div className="flex items-center gap-4">
            {profile.babyName && (
              <span className="hidden text-sm text-[#1A2B3C]/60 sm:block">
                👶 {profile.babyName}{months != null && ` · ${formatAge(months)}`}
              </span>
            )}
            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 md:flex">
              {NAV.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition ${
                      isActive
                        ? 'bg-[#C4704F] text-white'
                        : 'text-[#1A2B3C]/60 hover:bg-[#C4704F]/10 hover:text-[#C4704F]'
                    }`
                  }
                >
                  <Icon size={16} />
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6">
        <Outlet />
      </main>

      {/* Mobile bottom tab bar */}
      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-[#1A2B3C]/8 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
        <div className="flex justify-around">
          {NAV.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex flex-1 flex-col items-center gap-0.5 py-2.5 text-[10px] font-medium transition ${
                  isActive ? 'text-[#C4704F]' : 'text-[#1A2B3C]/40'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className={`rounded-full px-3 py-1 transition ${isActive ? 'bg-[#C4704F]/12' : ''}`}>
                    <Icon size={20} />
                  </span>
                  {label}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
