"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Minus, Plus, RotateCcw, X } from "lucide-react";
import type { CertificateAsset } from "@/types";

type CertificateViewerProps = {
  certificates: CertificateAsset[];
};

export function CertificateViewer({ certificates }: CertificateViewerProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const activeCertificate = activeIndex === null ? null : certificates[activeIndex];

  useEffect(() => {
    if (activeCertificate === null) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
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
    <div className="certificate-viewer">
      <div className="certificate-viewer__grid">
        {certificates.map((certificate, index) => (
          <button
            type="button"
            className="certificate-card"
            key={certificate.src}
            onClick={() => openCertificate(index)}
            aria-label={`Open ${certificate.title} certificate`}
          >
            <span className="certificate-card__preview">
              {certificate.type === "image" ? (
                <Image
                  src={certificate.src}
                  alt=""
                  fill
                  sizes="(max-width: 680px) 80vw, 30vw"
                />
              ) : (
                <span className="certificate-card__pdf">PDF<span>Click to open</span></span>
              )}
              <span className="certificate-card__zoom-label">Click to zoom</span>
            </span>
            <span className="certificate-card__info">
              <strong>{certificate.title}</strong>
              <small>{certificate.issuer} · {certificate.year}</small>
            </span>
          </button>
        ))}
      </div>

      {activeCertificate ? (
        <div className="certificate-modal" role="dialog" aria-modal="true" aria-label={`${activeCertificate.title} certificate`} onClick={() => setActiveIndex(null)}>
          <div className="certificate-modal__panel" onClick={(event) => event.stopPropagation()}>
            <div className="certificate-modal__toolbar">
              <div>
                <span className="eyebrow">{activeCertificate.issuer}</span>
                <p>{activeCertificate.title} · {activeCertificate.year}</p>
              </div>
              <div className="certificate-modal__actions">
                <button type="button" onClick={() => changeZoom(-0.1)} aria-label="Zoom out certificate"><Minus aria-hidden="true" size={16} /></button>
                <button type="button" onClick={() => setZoom(1)} aria-label="Reset certificate zoom"><RotateCcw aria-hidden="true" size={15} /><span>{Math.round(zoom * 100)}%</span></button>
                <button type="button" onClick={() => changeZoom(0.1)} aria-label="Zoom in certificate"><Plus aria-hidden="true" size={16} /></button>
                <button type="button" onClick={() => setActiveIndex(null)} aria-label="Close certificate viewer"><X aria-hidden="true" size={18} /></button>
              </div>
            </div>
            <div className="certificate-modal__stage">
              <div className="certificate-modal__document" style={{ transform: `scale(${zoom})` }}>
                {activeCertificate.type === "image" ? (
                  <Image
                    src={activeCertificate.src}
                    alt={`${activeCertificate.issuer} ${activeCertificate.title} certificate`}
                    width={2480}
                    height={3507}
                    sizes="(max-width: 680px) 84vw, 560px"
                    priority
                  />
                ) : (
                  <iframe
                    src={`${activeCertificate.src}#view=FitH&toolbar=0&navpanes=0`}
                    title={`${activeCertificate.issuer} ${activeCertificate.title} certificate`}
                  />
                )}
              </div>
            </div>
            <p className="certificate-modal__hint">Click outside the certificate or press Esc to close.</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
