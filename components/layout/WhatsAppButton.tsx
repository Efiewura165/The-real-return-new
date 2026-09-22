const WHATSAPP_NUMBER = "233249559249";
const WHATSAPP_MESSAGE = "Hi! I'd like to learn more about The Real Return™.";

export function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center gap-2 rounded-full bg-[#25D366] text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-transform hover:scale-105 min-[768px]:w-auto min-[768px]:justify-start min-[768px]:rounded-sm min-[768px]:py-2 min-[768px]:pl-3 min-[768px]:pr-4"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 fill-white" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.36a9.9 9.9 0 0 0 4.62 1.17h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.86 14.03c-.25.7-1.24 1.28-1.99 1.44-.53.11-1.22.2-3.55-.76-2.98-1.23-4.9-4.24-5.05-4.44-.15-.2-1.21-1.61-1.21-3.07 0-1.46.76-2.17 1.03-2.47.27-.3.59-.37.79-.37.2 0 .39 0 .56.01.18.01.42-.07.66.5.25.6.84 2.06.91 2.21.07.15.12.33.02.53-.1.2-.15.32-.3.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.66-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.35.07.13.07.75-.18 1.45z" />
      </svg>
      <span className="hidden min-[768px]:inline">WhatsApp Us</span>
    </a>
  );
}
