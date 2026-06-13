import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CalendarDays, ShoppingBasket, Link2, Camera, Apple, Sparkles } from 'lucide-react';
import ThreeScene from '../components/landing/ThreeScene';
import RecipeImage from '../components/ui/RecipeImage';
import { RECIPES } from '../data/recipes';
import { AGE_STAGES } from '../data/allergens';
import useStore from '../store/useStore';
import { cloudEnabled } from '../lib/supabase';
import { useAuth } from '../auth/AuthProvider';

gsap.registerPlugin(ScrollTrigger);

const serif = { fontFamily: "'Playfair Display', serif" };

const FEATURES = [
  {
    icon: Link2,
    title: 'Ingredient overlap magic',
    text: 'Plan meals that share ingredients across the week — less waste, less shopping, still plenty of variety for little taste buds.',
    color: '#7C9A7E',
  },
  {
    icon: CalendarDays,
    title: 'Weekly meal planner',
    text: 'Tap a slot, pick a recipe. Smart suggestions rank recipes by how many ingredients they share with meals you\'ve already planned.',
    color: '#C4704F',
  },
  {
    icon: ShoppingBasket,
    title: 'Auto shopping lists',
    text: 'Your week\'s plan becomes a tick-off shopping list, grouped by supermarket aisle, with shared ingredients highlighted.',
    color: '#D4A847',
  },
  {
    icon: Apple,
    title: 'Food diary',
    text: 'Track every food your baby has tried — what they loved, what got the famous scrunched-up face, and any reactions.',
    color: '#F2A5A5',
  },
  {
    icon: Camera,
    title: 'Your own recipes',
    text: 'Add family favourites in under a minute — snap a photo and it slots in beautifully next to the built-in collection.',
    color: '#8FAADC',
  },
  {
    icon: Sparkles,
    title: 'Spoon + fingers, always',
    text: 'Every recipe pairs a smooth spoonable puree with a graspable finger food — combination feeding, by design.',
    color: '#B58FD6',
  },
];

export default function Landing() {
  const navigate = useNavigate();
  const { session } = useAuth();
  const onboarded = useStore((s) => s.profile.onboarded);
  const heroRef = useRef(null);
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.fromTo(
        '.hero-stagger',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.14, delay: 0.2 }
      );

      // Section reveals
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        );
      });

      // Feature cards stagger
      gsap.fromTo(
        '.feature-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: { trigger: '.feature-grid', start: 'top 80%' },
        }
      );

      // Recipe cards horizontal drift
      gsap.fromTo(
        '.preview-card',
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.12,
          scrollTrigger: { trigger: '.preview-row', start: 'top 82%' },
        }
      );

      // Hero parallax fade on scroll
      gsap.to(heroRef.current, {
        opacity: 0.25,
        y: 120,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: '60% top',
          scrub: true,
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const previewRecipes = [
    RECIPES.find((r) => r.id === 'chicken-sweet-potato-apple'),
    RECIPES.find((r) => r.id === 'salmon-pea-potato'),
    RECIPES.find((r) => r.id === 'berry-yoghurt-oat-swirl'),
    RECIPES.find((r) => r.id === 'red-lentil-carrot-dahl'),
  ].filter(Boolean);

  const start = () => {
    // With accounts enabled, send signed-out visitors to login first.
    if (cloudEnabled && !session) return navigate('/login');
    navigate(onboarded ? '/app/planner' : '/welcome');
  };

  return (
    <div ref={rootRef} className="min-h-screen overflow-x-hidden bg-[#FDF6EC] text-[#1A2B3C]">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative flex min-h-[100svh] flex-col">
        <div ref={heroRef} className="absolute inset-0">
          <ThreeScene />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FDF6EC]/20 to-[#FDF6EC]" />
        </div>

        <header className="relative z-10 flex items-center justify-between px-6 py-5 md:px-12">
          <div className="hero-stagger flex items-center gap-2">
            <img src="/pea.svg" alt="" className="h-9 w-9" />
            <span className="text-xl font-bold" style={serif}>Little Spoons</span>
          </div>
          <button
            onClick={start}
            className="hero-stagger rounded-full border border-[#1A2B3C]/15 bg-white/60 px-5 py-2 text-sm font-semibold backdrop-blur transition hover:bg-white"
          >
            {onboarded ? 'Open the app' : 'Get started'}
          </button>
        </header>

        <div className="relative z-10 mx-auto flex max-w-4xl flex-1 flex-col items-center justify-center px-6 pb-24 text-center">
          <p className="hero-stagger mb-5 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C4704F] backdrop-blur">
            Weaning, beautifully planned
          </p>
          <h1
            className="hero-stagger text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
            style={serif}
          >
            Tiny meals.
            <br />
            <em className="text-[#C4704F]">Big first tastes.</em>
          </h1>
          <p className="hero-stagger mt-6 max-w-xl text-base leading-relaxed text-[#1A2B3C]/65 md:text-lg">
            Plan your baby&apos;s weaning week in minutes — simple spoon-and-finger
            recipes that cleverly share ingredients, with a shopping list built
            for your local UK supermarket.
          </p>
          <div className="hero-stagger mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <button
              onClick={start}
              className="group flex items-center gap-2 rounded-full bg-[#C4704F] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#C4704F]/30 transition hover:bg-[#b06343] hover:shadow-xl"
            >
              Start planning free
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#how"
              className="rounded-full px-6 py-4 text-base font-semibold text-[#1A2B3C]/60 transition hover:text-[#1A2B3C]"
            >
              See how it works ↓
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats strip ──────────────────────────────────── */}
      <section className="relative z-10 mx-auto -mt-10 max-w-4xl px-6">
        <div className="reveal grid grid-cols-3 gap-4 rounded-3xl bg-white p-6 shadow-xl shadow-[#1A2B3C]/5 md:p-8">
          {[
            ['28+', 'paired recipes'],
            ['3', 'weaning stages'],
            ['2-in-1', 'spoon + finger food'],
          ].map(([big, small]) => (
            <div key={small} className="text-center">
              <div className="text-2xl font-bold text-[#C4704F] md:text-4xl" style={serif}>{big}</div>
              <div className="mt-1 text-xs text-[#1A2B3C]/55 md:text-sm">{small}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────── */}
      <section id="how" className="mx-auto max-w-5xl px-6 py-24">
        <div className="reveal mb-14 text-center">
          <h2 className="text-3xl font-semibold md:text-5xl" style={serif}>
            Everything a weaning week needs
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[#1A2B3C]/60">
            Designed around one clever idea: meals that share ingredients save
            money and waste — without ever feeling repetitive.
          </p>
        </div>
        <div className="feature-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, text, color }) => (
            <div key={title} className="feature-card card-hover rounded-3xl bg-white p-7 shadow-sm">
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ backgroundColor: `${color}22`, color }}
              >
                <Icon size={22} />
              </div>
              <h3 className="mb-2 text-lg font-semibold" style={serif}>{title}</h3>
              <p className="text-sm leading-relaxed text-[#1A2B3C]/60">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Stages ───────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="reveal mb-12 text-center">
            <h2 className="text-3xl font-semibold md:text-5xl" style={serif}>
              Grows with your baby
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[#1A2B3C]/60">
              Tell us your baby&apos;s birthday once — the app highlights the right
              recipes at the right time.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {AGE_STAGES.map((stage) => (
              <div
                key={stage.id}
                className="reveal card-hover rounded-3xl p-8"
                style={{ backgroundColor: stage.bgColor }}
              >
                <div className="text-4xl">{stage.emoji}</div>
                <div className="mt-4 text-sm font-bold uppercase tracking-widest" style={{ color: stage.color }}>
                  {stage.label}
                </div>
                <h3 className="mt-1 text-2xl font-semibold" style={serif}>{stage.ageRange}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#1A2B3C]/65">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recipe preview ───────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="reveal mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold md:text-5xl" style={serif}>
                A taste of the collection
              </h2>
              <p className="mt-3 max-w-md text-[#1A2B3C]/60">
                Every recipe pairs a spoonable puree with a finger food — made
                from everyday UK supermarket ingredients.
              </p>
            </div>
            <button onClick={start} className="text-sm font-semibold text-[#C4704F] hover:underline">
              Browse all recipes →
            </button>
          </div>
          <div className="preview-row grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {previewRecipes.map((r) => (
              <div key={r.id} className="preview-card card-hover overflow-hidden rounded-3xl bg-white shadow-sm">
                <RecipeImage recipe={r} className="h-40" />
                <div className="p-5">
                  <h3 className="font-semibold leading-snug" style={serif}>{r.title}</h3>
                  <p className="mt-2 text-xs text-[#1A2B3C]/55">
                    🥄 {r.puree.name.split(' ').slice(0, 4).join(' ')}…
                  </p>
                  <p className="mt-1 text-xs text-[#1A2B3C]/55">✋ {r.finger.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────── */}
      <section className="px-6 pb-24">
        <div className="reveal mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] bg-[#1A2B3C] px-8 py-16 text-center text-white md:px-16">
          <div className="text-4xl">🥄</div>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl" style={serif}>
            Dinner&apos;s sorted, little one.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/60">
            Set up your baby&apos;s profile in under a minute. Free, private, and
            it works beautifully on your phone.
          </p>
          <button
            onClick={start}
            className="mt-8 rounded-full bg-[#C4704F] px-10 py-4 text-base font-semibold shadow-lg transition hover:bg-[#d4805e]"
          >
            {onboarded ? 'Open the app' : 'Get started — it\'s free'}
          </button>
        </div>
        <p className="mt-10 text-center text-xs text-[#1A2B3C]/40">
          Made with 🧡 for tiny humans · Always consult your health visitor about
          allergens and your baby&apos;s readiness for solids.
        </p>
      </section>
    </div>
  );
}
