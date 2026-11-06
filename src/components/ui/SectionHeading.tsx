import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  action,
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  action?: ReactNode;
  id?: string;
}) {
  const center = align === "center";
  return (
    <Reveal
      className={`mb-10 flex flex-col gap-6 sm:mb-14 ${
        center ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className={center ? "max-w-2xl" : "max-w-3xl"}>
        {eyebrow && (
          <p className={`eyebrow mb-4 ${tone === "dark" ? "text-gold-300" : ""}`}>{eyebrow}</p>
        )}
        <h2
          id={id}
          className={`text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-5xl ${
            tone === "dark" ? "text-white" : "text-forest-900"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-4 text-base leading-relaxed sm:text-lg ${
              tone === "dark" ? "text-white/70" : "text-muted"
            }`}
          >
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>
  );
}
