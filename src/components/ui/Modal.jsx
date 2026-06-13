import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Modal({ open, onClose, title, children, wide = false }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <div className="absolute inset-0 bg-[#1A2B3C]/50 backdrop-blur-sm" onClick={onClose} />
      <div
        className={`relative z-10 flex max-h-[88vh] w-full flex-col overflow-hidden rounded-t-3xl bg-[#FDF6EC] shadow-2xl sm:rounded-3xl ${wide ? 'sm:max-w-2xl' : 'sm:max-w-lg'}`}
      >
        <div className="flex items-center justify-between border-b border-[#1A2B3C]/8 px-5 py-4">
          <h3 className="font-display text-lg font-semibold text-[#1A2B3C]" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-[#1A2B3C]/50 transition hover:bg-[#1A2B3C]/5 hover:text-[#1A2B3C]"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
        <div className="overflow-y-auto px-5 py-4">{children}</div>
      </div>
    </div>
  );
}
