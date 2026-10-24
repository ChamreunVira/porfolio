'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Minus, Plus, RotateCcw, X } from 'lucide-react';
import type { CertificateAsset } from '@/types';

type CertificateViewerProps = {
  certificates: CertificateAsset[];
};

const controlClass =
  'inline-flex h-[34px] min-w-[36px] items-center justify-center gap-1 border-2 border-[var(--ink)] bg-[var(--paper)] px-2 font-mono text-[0.61rem] text-[var(--ink)] transition-[transform,background] duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-[var(--yellow)] active:translate-x-1 active:translate-y-1';

export function CertificateViewer({ certificates }: CertificateViewerProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const activeCertificate = activeIndex === null ? null : certificates[activeIndex];

  useEffect(() => {
    if (activeCertificate === null) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [activeCertificate]);

  const openCertificate = (index: number) => {
    setActiveIndex(index);
    setZoom(1);
  };

  const changeZoom = (amount: number) => {
    setZoom((currentZoom) => Math.min(1.35, Math.max(0.55, Number((currentZoom + amount).toFixed(2)))));
  };

  return (
    <div className="text-[var(--ink)]">
      <div className="grid grid-cols-3 gap-5 max-[680px]:grid-cols-1 max-[680px]:gap-6">
        {certificates.map((certificate, index) => (
          <button
            type="button"
            className="block w-full border-2 border-[var(--ink)] bg-[var(--paper)] p-0 text-left text-[inherit] shadow-[5px_5px_0_var(--ink)] transition-[transform,box-shadow] duration-150 ease-out hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_var(--ink)]"
            key={certificate.src}
            onClick={() => openCertificate(index)}
            aria-label={`Open ${certificate.title} certificate`}
          >
            <span className="relative grid aspect-[4/5] place-items-center overflow-hidden border-b-2 border-[var(--ink)] bg-[var(--paper-deep)] max-[680px]:aspect-[4/4.8]">
              {certificate.type === 'image' ? (
                <Image
                  src={certificate.src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 680px) 80vw, 30vw"
                />
              ) : (
                <span className="grid h-[135px] w-[110px] rotate-[-4deg] place-items-center gap-[9px] border-2 border-[var(--ink)] bg-[var(--white)] font-mono text-[1.4rem] font-extrabold">
                  PDF<span className="text-[0.58rem] font-normal uppercase">Click to open</span>
                </span>
              )}
              <span className="absolute bottom-3 right-3 border-2 border-[var(--ink)] bg-[var(--yellow)] px-2 py-[7px] font-mono text-[0.61rem] uppercase">
                Click to zoom
              </span>
            </span>
            <span className="block p-4">
              <strong className="block text-[0.9rem] leading-[1.2]">{certificate.title}</strong>
              <small className="mt-[7px] block text-[0.72rem] text-[var(--muted)]">
                {certificate.issuer} · {certificate.year}
              </small>
            </span>
          </button>
        ))}
      </div>

      {activeCertificate ? (
        <div
          className="fixed inset-0 z-40 grid place-items-center bg-[rgb(23_23_23_/_78%)] p-5 max-[680px]:p-2.5"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeCertificate.title} certificate`}
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="flex max-h-[min(94vh,900px)] w-[min(100%,860px)] flex-col border-2 border-[var(--ink)] bg-[var(--paper)] p-5 shadow-[8px_8px_0_#0b0b0b] max-[680px]:p-[13px]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-5 pb-4 max-[680px]:flex-col max-[680px]:items-start">
              <div>
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.08em]">{activeCertificate.issuer}</span>
                <p className="mb-0 mt-[7px] text-[0.78rem] text-[var(--muted)]">
                  {activeCertificate.title} · {activeCertificate.year}
                </p>
              </div>
              <div className="flex gap-[7px] max-[680px]:self-stretch max-[680px]:justify-end">
                <button
                  className={controlClass}
                  type="button"
                  onClick={() => changeZoom(-0.1)}
                  aria-label="Zoom out certificate"
                >
                  <Minus aria-hidden="true" size={16} />
                </button>
                <button
                  className={controlClass}
                  type="button"
                  onClick={() => setZoom(1)}
                  aria-label="Reset certificate zoom"
                >
                  <RotateCcw aria-hidden="true" size={15} />
                  <span>{Math.round(zoom * 100)}%</span>
                </button>
                <button
                  className={controlClass}
                  type="button"
                  onClick={() => changeZoom(0.1)}
                  aria-label="Zoom in certificate"
                >
                  <Plus aria-hidden="true" size={16} />
                </button>
                <button
                  className={controlClass}
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  aria-label="Close certificate viewer"
                >
                  <X aria-hidden="true" size={18} />
                </button>
              </div>
            </div>
            <div className="grid min-h-[420px] place-items-center overflow-auto border border-[#777264] bg-[#37362f] max-[680px]:min-h-[430px]">
              <div
                className="w-[min(100%,560px)] origin-center shadow-[5px_5px_0_#121212] transition-transform duration-150 ease-out"
                style={{ transform: `scale(${zoom})` }}
              >
                {activeCertificate.type === 'image' ? (
                  <Image
                    src={activeCertificate.src}
                    alt={`${activeCertificate.issuer} ${activeCertificate.title} certificate`}
                    width={2480}
                    height={3507}
                    sizes="(max-width: 680px) 84vw, 560px"
                    priority
                    className="block h-auto w-full"
                  />
                ) : (
                  <iframe
                    className="block h-[680px] w-full border-0 bg-[var(--white)] max-[680px]:h-[520px]"
                    src={`${activeCertificate.src}#view=FitH&toolbar=0&navpanes=0`}
                    title={`${activeCertificate.issuer} ${activeCertificate.title} certificate`}
                  />
                )}
              </div>
            </div>
            <p className="mb-0 mt-[13px] text-center font-mono text-[0.62rem] uppercase text-[var(--muted)]">
              Click outside the certificate or press Esc to close.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
