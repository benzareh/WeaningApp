import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import useStore from '../store/useStore';
import { ALLERGENS } from '../data/allergens';
import { ageInMonths, formatAge, stageForAge, getStage } from '../utils/helpers';

const serif = { fontFamily: "'Playfair Display', serif" };

export default function Settings() {
  const navigate = useNavigate();
  const profile = useStore((s) => s.profile);
  const setProfile = useStore((s) => s.setProfile);
  const resetAll = useStore((s) => s.resetAll);

  const [name, setName] = useState(profile.babyName);
  const [dob, setDob] = useState(profile.dob);
  const [saved, setSaved] = useState(false);

  const months = ageInMonths(dob);
  const stage = months != null ? getStage(stageForAge(months)) : null;

  const saveProfile = () => {
    setProfile({ babyName: name.trim() || 'Baby', dob });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const toggleAllergy = (id) => {
    const allergies = profile.allergies.includes(id)
      ? profile.allergies.filter((a) => a !== id)
      : [...profile.allergies, id];
    setProfile({ allergies });
  };

  const handleReset = () => {
    if (window.confirm('This wipes EVERYTHING — profile, plans, food diary and your recipes. Are you sure?')) {
      resetAll();
      navigate('/');
    }
  };

  const inputCls =
    'w-full rounded-2xl border border-[#1A2B3C]/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#C4704F]/60';

  return (
    <div className="mx-auto max-w-xl space-y-6 pb-10">
      <div>
        <h1 className="text-3xl font-semibold" style={serif}>Settings</h1>
        <p className="mt-1 text-sm text-[#1A2B3C]/55">Profile, allergies and app preferences</p>
      </div>

      {/* Profile */}
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <h3 className="mb-4 font-semibold" style={serif}>👶 Baby profile</h3>
        <label className="mb-1.5 block text-xs font-semibold text-[#1A2B3C]/55">Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} className={inputCls} />
        <label className="mb-1.5 mt-4 block text-xs font-semibold text-[#1A2B3C]/55">Date of birth</label>
        <input
          type="date"
          value={dob}
          max={new Date().toISOString().slice(0, 10)}
          onChange={(e) => setDob(e.target.value)}
          className={inputCls}
        />
        {stage && (
          <p className="mt-3 rounded-xl p-3 text-xs" style={{ backgroundColor: stage.bgColor, color: stage.color }}>
            {stage.emoji} {formatAge(months)} old — currently on <strong>{stage.label} ({stage.ageRange})</strong> recipes
          </p>
        )}
        <button
          onClick={saveProfile}
          className="mt-4 flex items-center gap-1.5 rounded-full bg-[#1A2B3C] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2a3f54]"
        >
          {saved ? <><Check size={15} /> Saved</> : 'Save profile'}
        </button>
      </div>

      {/* Allergies */}
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <h3 className="font-semibold" style={serif}>🛡️ Known allergies</h3>
        <p className="mt-1 text-xs text-[#1A2B3C]/50">
          Recipes containing these are flagged everywhere and excluded from Magic fill.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {ALLERGENS.map((a) => {
            const on = profile.allergies.includes(a.id);
            return (
              <button
                key={a.id}
                onClick={() => toggleAllergy(a.id)}
                className={`flex items-center gap-2 rounded-2xl border-2 px-3 py-2.5 text-left text-xs font-medium transition ${
                  on
                    ? 'border-[#C4704F] bg-[#C4704F]/10 text-[#C4704F]'
                    : 'border-[#1A2B3C]/8 bg-white text-[#1A2B3C]/65'
                }`}
              >
                <span>{a.emoji}</span>
                <span className="flex-1">{a.label}</span>
                {on && <Check size={14} />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Preferences */}
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <h3 className="mb-4 font-semibold" style={serif}>🍽️ Planner preferences</h3>
        <button
          onClick={() => setProfile({ breakfastEnabled: !profile.breakfastEnabled })}
          className="flex w-full items-center justify-between rounded-2xl bg-[#FDF6EC] px-4 py-3.5"
        >
          <div className="text-left">
            <div className="text-sm font-semibold">Plan breakfasts</div>
            <div className="text-xs text-[#1A2B3C]/50">Adds a breakfast slot to every day</div>
          </div>
          <div
            className={`relative h-7 w-12 rounded-full transition-colors ${
              profile.breakfastEnabled ? 'bg-[#7C9A7E]' : 'bg-[#1A2B3C]/15'
            }`}
          >
            <div
              className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all ${
                profile.breakfastEnabled ? 'left-6' : 'left-1'
              }`}
            />
          </div>
        </button>
      </div>

      {/* About */}
      <div className="rounded-3xl bg-white p-6 shadow-sm text-sm text-[#1A2B3C]/60">
        <h3 className="mb-2 font-semibold text-[#1A2B3C]" style={serif}>ℹ️ About Little Spoons</h3>
        <p>
          All your data is stored privately on this device. Always follow NHS guidance on
          introducing solids and allergens, and speak to your health visitor with any concerns.
        </p>
      </div>

      {/* Danger zone */}
      <div className="rounded-3xl border-2 border-red-100 bg-red-50/50 p-6">
        <h3 className="font-semibold text-red-600" style={serif}>Danger zone</h3>
        <p className="mt-1 text-xs text-red-500/80">Deletes everything stored in this browser.</p>
        <button
          onClick={handleReset}
          className="mt-3 rounded-full bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600"
        >
          Reset the app
        </button>
      </div>
    </div>
  );
}
