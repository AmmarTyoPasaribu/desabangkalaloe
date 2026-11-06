import type { SVGProps } from "react";

/**
 * Ikon SVG custom — gaya garis 24px, stroke 1.75, selaras dengan lucide-react.
 * Ikon brand (Instagram, WhatsApp, Maps) ditulis sendiri karena lucide tidak lagi menyertakan logo merek.
 */
type P = SVGProps<SVGSVGElement> & { size?: number | string };

function Base({ size = 24, children, ...props }: P & { children: React.ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

/* ---------- Brand ---------- */

export function InstagramIcon(props: P) {
  return (
    <Base {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </Base>
  );
}

export function WhatsAppIcon(props: P) {
  return (
    <Base {...props}>
      <path d="M3.5 20.5l1.3-4.1A8.5 8.5 0 1 1 8 19.6z" />
      <path d="M9 8.6c.2-.5.5-.6.8-.6h.5c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .5-.1.6l-.5.6c-.1.2-.1.4 0 .5.5.9 1.3 1.7 2.3 2.2.2.1.4.1.5-.1l.6-.6c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3-.2.7-.6.9-.6.3-1.4.4-2.4 0-1.9-.7-3.6-2.3-4.4-4.2-.4-1-.4-1.8-.1-2.4z" />
    </Base>
  );
}

export function MapPinIcon(props: P) {
  return (
    <Base {...props}>
      <path d="M12 21s-7-6.1-7-11.5a7 7 0 1 1 14 0C19 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </Base>
  );
}

/* ---------- Sarana desa ---------- */

export function MosqueIcon(props: P) {
  return (
    <Base {...props}>
      <path d="M12 3v1.5" />
      <path d="M7.5 11c0-2.8 2-4.3 4.5-5.5 2.5 1.2 4.5 2.7 4.5 5.5" />
      <path d="M6 11h12v10H6z" />
      <path d="M10 21v-3.5a2 2 0 0 1 4 0V21" />
      <path d="M3 21V10.5m0 0 .8-2 .7 2M3 10.5h1.5V21" />
      <path d="M21 21V10.5m0 0-.8-2-.7 2m1.5 0h-1.5V21" />
      <path d="M2 21h20" />
    </Base>
  );
}

export function MushollaIcon(props: P) {
  return (
    <Base {...props}>
      <path d="M12 3.5 4 9h16z" />
      <path d="M5.5 9v12h13V9" />
      <path d="M10 21v-4a2 2 0 0 1 4 0v4" />
      <path d="M14.2 5.2a1.6 1.6 0 1 0 1.3 2.4 1.9 1.9 0 0 1-1.3-2.4z" />
      <path d="M3 21h18" />
    </Base>
  );
}

export function SoccerIcon(props: P) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m12 7.5 3.2 2.3-1.2 3.7h-4l-1.2-3.7z" />
      <path d="M12 7.5V3.2M15.2 9.8l4-1.4M14 13.5l2.5 3.6M10 13.5l-2.5 3.6M8.8 9.8l-4-1.4" />
    </Base>
  );
}

export function BasketballIcon(props: P) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3v18" />
      <path d="M5.6 5.6a12 12 0 0 1 0 12.8M18.4 5.6a12 12 0 0 0 0 12.8" />
    </Base>
  );
}

export function BadmintonIcon(props: P) {
  return (
    <Base {...props}>
      <path d="M14.5 14.5 20 20" />
      <ellipse cx="9.5" cy="9.5" rx="5.5" ry="5.5" transform="rotate(-45 9.5 9.5)" />
      <path d="M6 7.5 11.5 13M7.5 6 13 11.5M5.5 10.5h8M10.5 5.5v8" opacity=".55" />
    </Base>
  );
}

export function BridgeIcon(props: P) {
  return (
    <Base {...props}>
      <path d="M2 16h20" />
      <path d="M2 10c3 0 6.5 1.5 10 1.5S19 10 22 10" />
      <path d="M5 10.4V16M9 11.2V16M15 11.2V16M19 10.4V16" />
      <path d="M3 20c1.5-1 3-1 4.5 0s3 1 4.5 0 3-1 4.5 0 3 1 4.5 0" />
    </Base>
  );
}

export function WellIcon(props: P) {
  return (
    <Base {...props}>
      <path d="M5 21V12h14v9" />
      <path d="M4 12h16" />
      <path d="M6 12V4M18 12V4M4 4h16" />
      <path d="M12 4v5" />
      <path d="M10.5 9h3v2h-3z" />
      <path d="M5 16h14" />
    </Base>
  );
}

/** Ornamen dekoratif: motif "bangkala" (daun ketapang) bergaya garis */
export function LeafOrnament(props: P) {
  return (
    <svg viewBox="0 0 120 24" fill="none" aria-hidden="true" {...props}>
      <path d="M0 12h44M76 12h44" stroke="currentColor" strokeWidth="1" opacity=".6" />
      <path
        d="M60 3c6 3 9 6 9 9s-3 6-9 9c-6-3-9-6-9-9s3-6 9-9z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path d="M60 4v16" stroke="currentColor" strokeWidth="1" />
      <circle cx="47" cy="12" r="1.5" fill="currentColor" />
      <circle cx="73" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}
