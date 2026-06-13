import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import useStore from '../store/useStore';
import { ALLERGENS } from '../data/allergens';
import { ageInMonths, stageForAge, getStage, formatAge } from '../utils/helpers';

const serif = { fontFamily: "'Playfair Display', serif" };

const STEPS = ['name', 'dob', 'allergies', 'meals', 'done'];

export default function Onboarding() {
  const navigate = useNavigate();
  const completeOnboarding = useStore((s) => s.completeOnboarding);
  const [step, setStep] = useState(0);
  const [babyName, setBabyName] = useState('');
  const [dob, setDob] = useState('');
  const [allergies, setAllergies] = useState([]);
  const [breakfastEnabled, setBreakfastEnabled] = useState(false);

  const months = ageInMonths(dob);
  const stage = months != null ? getStage(stageForAge(months)) : null;

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const toggleAllergy = (id) =>
    setAllergies((a) => (a.includes(id) ? a.filter((x) => x !== id) : [...a, id]));

  const finish = () => {
    completeOnboarding({ babyName: babyName.trim() || 'Baby', dob, allergies, breakfastEnabled });
    navigate('/app/planner');
  };

  const canContinue =
    (STEPS[step] === 'name' && babyName.trim().length > 0) ||
    (STEPS[step] === 'dob' && dob) ||
    ['allergies', 'meals', 'done'].includes(STEPS[step]);

  return (
    <div className="flex min-h-screen flex-col bg-[#FDF6EC] px-6 py-8">
      {/* Progress */}
      <div className="mx-auto w-full max-w-md">
        <div className="mb-10 flex items-center gap-2">
          {STEPS.slice(0, -1).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors duration-500 ${
                i <= step ? 'bg-[#C4704F]' : 'bg-[#1A2B3C]/10'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {STEPS[step] === 'name' && (
              <>
                <div className="text-5xl">👋</div>
                <h1 className="mt-5 text-3xl font-semibold" style={serif}>
                  Hello! Who are we feeding?
                </h1>
                <p className="mt-3 text-[#1A2B3C]/60">
                  We&apos;ll use their name to make the app feel like home.
                </p>
                <input
                  autoFocus
                  value={babyName}
                  onChange={(e) => setBabyName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && canContinue && next()}
                  placeholder="Baby's name"
                  className="mt-8 w-full rounded-2xl border-2 border-[#1A2B3C]/10 bg-white px-5 py-4 text-lg outline-none transition focus:border-[#C4704F]"
                />
              </>
            )}

            {STEPS[step] === 'dob' && (
              <>
                <div className="text-5xl">🎂</div>
                <h1 className="mt-5 text-3xl font-semibold" style={serif}>
                  When was {babyName || 'baby'} born?
                </h1>
                <p className="mt-3 text-[#1A2B3C]/60">
                  We&apos;ll automatically highlight age-appropriate recipes as they grow.
                </p>
                <input
                  type="date"
                  value={dob}
                  max={new Date().toISOString().slice(0, 10)}
                  onChange={(e) => setDob(e.target.value)}
                  className="mt-8 w-full rounded-2xl border-2 border-[#1A2B3C]/10 bg-white px-5 py-4 text-lg outline-none transition focus:border-[#C4704F]"
                />
                {stage && (
                  <div
                    className="mt-5 rounded-2xl p-4 text-sm"
                    style={{ backgroundColor: stage.bgColor, color: stage.color }}
                  >
                    {stage.emoji} <strong>{formatAge(months)} old</strong> — we&apos;ll start with{' '}
                    <strong>{stage.label} ({stage.ageRange})</strong> recipes.
                  </div>
                )}
              </>
            )}

            {STEPS[step] === 'allergies' && (
              <>
                <div className="text-5xl">🛡️</div>
                <h1 className="mt-5 text-3xl font-semibold" style={serif}>
                  Any known allergies?
                </h1>
                <p className="mt-3 text-[#1A2B3C]/60">
                  We&apos;ll flag any recipe containing these. Skip if none — you can
                  update this anytime in Settings.
                </p>
                <div className="mt-7 grid grid-cols-2 gap-2.5">
                  {ALLERGENS.map((a) => {
                    const on = allergies.includes(a.id);
                    return (
                      <button
                        key={a.id}
                        onClick={() => toggleAllergy(a.id)}
                        className={`flex items-center gap-2 rounded-2xl border-2 px-3.5 py-3 text-left text-sm font-medium transition ${
                          on
                            ? 'border-[#C4704F] bg-[#C4704F]/10 text-[#C4704F]'
                            : 'border-[#1A2B3C]/8 bg-white text-[#1A2B3C]/70 hover:border-[#1A2B3C]/20'
                        }`}
                      >
                        <span>{a.emoji}</span>
                        <span className="flex-1">{a.label}</span>
                        {on && <Check size={16} />}
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            {STEPS[step] === 'meals' && (
              <>
                <div className="text-5xl">🥣</div>
                <h1 className="mt-5 text-3xl font-semibold" style={serif}>
                  Plan breakfasts too?
                </h1>
                <p className="mt-3 text-[#1A2B3C]/60">
                  Some families plan all three meals; others keep breakfast simple.
                  You can change this anytime.
                </p>
                <div className="mt-7 space-y-3">
                  <button
                    onClick={() => setBreakfastEnabled(false)}
                    className={`w-full rounded-2xl border-2 p-5 text-left transition ${
                      !breakfastEnabled ? 'border-[#C4704F] bg-[#C4704F]/10' : 'border-[#1A2B3C]/8 bg-white'
                    }`}
                  >
                    <div className="font-semibold">Lunch & dinner only</div>
                    <div className="mt-1 text-sm text-[#1A2B3C]/55">Keep breakfast simple and unplanned</div>
                  </button>
                  <button
                    onClick={() => setBreakfastEnabled(true)}
                    className={`w-full rounded-2xl border-2 p-5 text-left transition ${
                      breakfastEnabled ? 'border-[#C4704F] bg-[#C4704F]/10' : 'border-[#1A2B3C]/8 bg-white'
                    }`}
                  >
                    <div className="font-semibold">All three meals</div>
                    <div className="mt-1 text-sm text-[#1A2B3C]/55">Breakfast, lunch and dinner slots</div>
                  </button>
                </div>
              </>
            )}

            {STEPS[step] === 'done' && (
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.15 }}
                  className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#7C9A7E]/15 text-5xl"
                >
                  🎉
                </motion.div>
                <h1 className="mt-6 text-3xl font-semibold" style={serif}>
                  All set for {babyName || 'baby'}!
                </h1>
                <p className="mx-auto mt-3 max-w-xs text-[#1A2B3C]/60">
                  {stage
                    ? `We've lined up ${stage.label} (${stage.ageRange}) recipes to start.`
                    : 'Your recipe collection is ready.'}{' '}
                  Let&apos;s plan the first week.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Nav buttons */}
      <div className="mx-auto flex w-full max-w-md items-center justify-between pb-4">
        {step > 0 ? (
          <button
            onClick={back}
            className="flex items-center gap-1.5 rounded-full px-5 py-3 text-sm font-semibold text-[#1A2B3C]/50 transition hover:text-[#1A2B3C]"
          >
            <ArrowLeft size={16} /> Back
          </button>
        ) : (
          <button
            onClick={() => navigate('/')}
            className="rounded-full px-5 py-3 text-sm font-semibold text-[#1A2B3C]/50"
          >
            Cancel
          </button>
        )}
        {STEPS[step] === 'done' ? (
          <button
            onClick={finish}
            className="flex items-center gap-2 rounded-full bg-[#C4704F] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#C4704F]/30 transition hover:bg-[#b06343]"
          >
            Start planning <ArrowRight size={16} />
          </button>
        ) : (
          <button
            onClick={next}
            disabled={!canContinue}
            className="flex items-center gap-2 rounded-full bg-[#C4704F] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#C4704F]/30 transition enabled:hover:bg-[#b06343] disabled:opacity-40"
          >
            {STEPS[step] === 'allergies' && allergies.length === 0 ? 'None — continue' : 'Continue'}
            <ArrowRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
