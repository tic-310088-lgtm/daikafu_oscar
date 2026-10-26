import { useState } from 'react';
import { ArrowUpRight, Check, Leaf } from 'lucide-react';

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  function handleSubmit(event) {
    event.preventDefault();
    const value = email.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setStatus('error');
      return;
    }

    setStatus('success');
    setEmail('');
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="mt-5 flex items-start gap-3 rounded-2xl border border-cream/15 bg-cream/10 px-4 py-4 text-sm leading-relaxed text-cream/85"
      >
        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#e6c9a9] text-olive-dark">
          <Check className="h-3.5 w-3.5" strokeWidth={2.4} />
        </span>
        <span>
          Bienvenido a la mesa. Tu primera receta llegará muy pronto.
        </span>
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="mt-5 flex flex-col gap-2.5 sm:flex-row"
      >
        <div className="flex-1">
          <label htmlFor="newsletter-email" className="sr-only">
            Correo electrónico
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="tu@correo.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (status === 'error') setStatus('idle');
            }}
            aria-invalid={status === 'error'}
            aria-describedby={status === 'error' ? 'newsletter-error' : undefined}
            className={`h-12 w-full rounded-full border bg-cream/[0.08] px-5 text-sm text-cream outline-none transition-colors placeholder:text-cream/35 focus:border-[#e6c9a9]/70 ${
              status === 'error' ? 'border-[#e8a58e]' : 'border-cream/15'
            }`}
          />
        </div>
        <button
          type="submit"
          className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#f1e8da] px-5 text-[13px] font-bold text-olive-dark transition-colors duration-300 hover:bg-white"
        >
          Suscribirme
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={2}
          />
        </button>
      </form>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[10.5px] text-cream/40">
        <p>Sin spam. Puedes darte de baja cuando quieras.</p>
        {status === 'error' && (
          <p id="newsletter-error" role="alert" className="text-[#f0b8a3]">
            Escribe un correo válido.
          </p>
        )}
      </div>
    </>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="paper-grain relative overflow-hidden bg-olive-dark text-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 -top-24 h-80 w-80 rounded-full border border-cream/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-terracotta/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 sm:pt-20 lg:px-10">
        <div className="grid gap-12 border-b border-cream/10 pb-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          <div>
            <a
              href="#/"
              aria-label="Oliva & Sal, volver al inicio"
              className="inline-flex items-center gap-3 text-cream"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-cream text-olive-dark">
                <Leaf className="h-[17px] w-[17px]" strokeWidth={1.8} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-[22px] font-semibold tracking-[-0.025em]">
                  Oliva <span className="italic text-[#e6c9a9]">&</span> Sal
                </span>
                <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.24em] text-cream/45">
                  Recetario de autor
                </span>
              </span>
            </a>

            <p className="mt-7 max-w-md font-display text-[2rem] font-light leading-[1.15] tracking-[-0.02em] text-cream sm:text-[2.5rem]">
              Cocinar bien es una forma de{' '}
              <span className="italic text-[#e6c9a9]">cuidar.</span>
            </p>
            <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-cream/55 sm:text-sm">
              Un recetario pequeño para volver a la mesa, bajar el ritmo y
              disfrutar de lo que de verdad importa: el sabor y la compañía.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-cream/10 bg-cream/[0.055] p-6 sm:p-8">
            <p className="eyebrow text-cream/45">Carta de la casa</p>
            <h2 className="mt-3 font-display text-2xl font-medium leading-tight text-cream sm:text-[27px]">
              Una receta al mes, sin ruido.
            </h2>
            <p className="mt-2.5 text-[12.5px] leading-relaxed text-cream/55 sm:text-[13px]">
              Recetas de temporada, notas de cocina y algún que otro secreto de
              mesa. Directo a tu correo.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 text-[11px] text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Oliva & Sal. Hecho con calma en una cocina cualquiera.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href="#/recetas"
              className="transition-colors hover:text-cream"
            >
              Recetas
            </a>
            <a
              href="#/filosofia"
              className="transition-colors hover:text-cream"
            >
              Nuestra mesa
            </a>
            <a
              href="https://unsplash.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-cream"
            >
              Fotografías: Unsplash
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
