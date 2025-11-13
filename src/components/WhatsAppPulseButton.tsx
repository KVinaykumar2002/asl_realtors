"use client";

import Link from "next/link";

const WHATSAPP_NUMBER = "916303822799";
const PREFILLED_MESSAGE = "Hello ASL Realtors, I'd like to chat about your services.";

export default function WhatsAppPulseButton() {
  const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
    PREFILLED_MESSAGE,
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-[1000] flex items-center justify-center">
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with ASL Realtors on WhatsApp"
        className="group relative flex h-16 w-16 items-center justify-center"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366]/20 opacity-70 animate-[wPulse_2.6s_ease-out_infinite]" />
        <span className="absolute inset-1 rounded-full bg-[#25D366]/30 opacity-60 animate-[wPulse_2.6s_ease-out_infinite_0.6s]" />
        <span className="absolute inset-2 rounded-full bg-[#25D366]/40 opacity-50 animate-[wPulse_2.6s_ease-out_infinite_1.2s]" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#FF4E60] text-[10px] font-semibold text-white shadow-[0_0_8px_rgba(255,78,96,0.6)]">
          1
        </span>
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_28px_rgba(37,211,102,0.35)] transition-transform duration-300 group-hover:scale-105">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="h-8 w-8 fill-current"
            aria-hidden="true"
          >
            <path d="M16.001 2.667c-7.364 0-13.333 5.968-13.333 13.332 0 2.35.613 4.64 1.78 6.665l-1.88 6.803 6.957-1.82a13.26 13.26 0 0 0 6.477 1.69h.001c7.364 0 13.333-5.968 13.333-13.332 0-3.558-1.386-6.9-3.905-9.419s-5.867-3.919-9.43-3.919Zm0 24.532h-.001a11.1 11.1 0 0 1-5.633-1.566l-.402-.239-4.13 1.08 1.098-4.018-.262-.412a11.13 11.13 0 0 1-1.72-5.96c0-6.148 4.999-11.147 11.146-11.147 2.978 0 5.776 1.16 7.882 3.267 2.108 2.108 3.27 4.906 3.27 7.884 0 6.148-4.999 11.147-11.148 11.147Zm6.11-8.345c-.335-.168-1.986-.981-2.293-1.093-.307-.113-.53-.168-.753.168-.223.335-.864 1.093-1.059 1.317-.195.223-.391.252-.726.084-.335-.167-1.414-.521-2.694-1.662-.997-.889-1.669-1.988-1.865-2.323-.195-.335-.021-.516.147-.684.151-.151.338-.391.506-.587.17-.195.226-.335.338-.558.112-.223.056-.418-.028-.587-.084-.168-.753-1.812-1.032-2.482-.271-.651-.547-.562-.753-.572l-.642-.01c-.224 0-.587.084-.895.418-.307.335-1.174 1.146-1.174 2.792 0 1.646 1.201 3.232 1.368 3.454.168.223 2.364 3.609 5.733 5.058.801.345 1.427.551 1.917.705.805.256 1.538.22 2.119.134.646-.096 1.986-.81 2.268-1.593.28-.782.28-1.452.195-1.593-.084-.14-.307-.223-.642-.39Z" />
          </svg>
        </span>
      </Link>
      <style jsx global>{`
        @keyframes wPulse {
          0% { transform: scale(0.8); opacity: 0.7; }
          70% { transform: scale(1.35); opacity: 0; }
          100% { transform: scale(1.35); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
