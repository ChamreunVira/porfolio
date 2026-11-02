'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { GalleryImage } from '@/data/portfolioData';

interface ImageLightboxProps {
  images: GalleryImage[];
  projectTitle: string;
}

const TRANSITION_DURATION = 180;

export function ImageLightbox({ images, projectTitle }: ImageLightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const isOpen = activeIndex !== null;
  const activeImage = activeIndex === null ? null : images[activeIndex];

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLightbox();
      } else if (event.key === 'ArrowLeft') {
        setActiveIndex((currentIndex) =>
          currentIndex === null ? null : (currentIndex - 1 + images.length) % images.length,
        );
      } else if (event.key === 'ArrowRight') {
        setActiveIndex((currentIndex) => (currentIndex === null ? null : (currentIndex + 1) % images.length));
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [images.length, isOpen]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const openLightbox = (index: number) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setIsClosing(false);
    setActiveIndex(index);
  };

  function closeLightbox() {
    setIsClosing(true);
    closeTimeoutRef.current = setTimeout(() => {
      setActiveIndex(null);
      setIsClosing(false);
    }, TRANSITION_DURATION);
  }

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === null ? null : (currentIndex - 1 + images.length) % images.length,
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex === null ? null : (currentIndex + 1) % images.length));
  };

  return (
    <>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <li key={image.caption}>
            <figure className="border border-ink bg-card p-2 shadow-crisp-sm">
              <button
                type="button"
                aria-label={`Open ${projectTitle}: ${image.caption}`}
                onClick={() => openLightbox(index)}
                className="group block w-full cursor-zoom-in text-left"
              >
                <Image
                  src={image.src}
                  alt={`${projectTitle}: ${image.caption}`}
                  width={1913}
                  height={1078}
                  className="aspect-video h-auto w-full object-contain transition-transform duration-200 group-hover:scale-[1.01]"
                />
              </button>
              <figcaption className="px-1 pb-1 pt-3 font-mono text-mono-tag text-ink-soft">{image.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>

      {activeImage ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${projectTitle} image viewer`}
          className={`fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 transition-opacity duration-200 sm:p-8 ${
            isClosing ? 'pointer-events-none opacity-0' : 'opacity-100'
          }`}
          onClick={closeLightbox}
        >
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close image viewer"
            onClick={(event) => {
              event.stopPropagation();
              closeLightbox();
            }}
            className="absolute right-4 top-4 z-10 border border-paper/50 bg-ink p-2 text-paper transition-colors hover:bg-paper hover:text-ink sm:right-6 sm:top-6"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 border border-paper/50 bg-ink p-2 text-paper transition-colors hover:bg-paper hover:text-ink sm:left-6"
          >
            <ChevronLeft className="h-7 w-7" aria-hidden="true" />
          </button>

          <figure className="relative flex h-[min(82vh,52rem)] w-[min(88vw,90rem)] flex-col items-center justify-center gap-3">
            <div className="relative min-h-0 flex-1 w-full" onClick={(event) => event.stopPropagation()}>
              <Image
                src={activeImage.src}
                alt={`${projectTitle}: ${activeImage.caption}`}
                fill
                sizes="100vw"
                quality={100}
                unoptimized
                className="object-contain"
                priority
              />
            </div>
            <figcaption className="font-mono text-mono-tag text-paper">
              {activeImage.caption} · {(activeIndex ?? 0) + 1} / {images.length}
            </figcaption>
          </figure>

          <button
            type="button"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 border border-paper/50 bg-ink p-2 text-paper transition-colors hover:bg-paper hover:text-ink sm:right-6"
          >
            <ChevronRight className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </>
  );
}
