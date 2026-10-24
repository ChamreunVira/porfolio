'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, GripHorizontal } from 'lucide-react';
import type { ProjectImage } from '@/types';

type ProjectGalleryProps = {
  title: string;
  images: ProjectImage[];
};

export function ProjectGallery({ title, images }: ProjectGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ startX: 0, scrollLeft: 0 });

  const move = (direction: 'previous' | 'next') => {
    trackRef.current?.scrollBy({
      left: direction === 'next' ? trackRef.current.clientWidth * 0.8 : -trackRef.current.clientWidth * 0.8,
      behavior: 'smooth',
    });
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    setIsDragging(true);
    dragState.current = { startX: event.clientX, scrollLeft: track.scrollLeft };
    track.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !isDragging) return;
    track.scrollLeft = dragState.current.scrollLeft - (event.clientX - dragState.current.startX) * 1.15;
  };

  const stopDragging = () => setIsDragging(false);

  return (
    <div className="border-t-2 border-[var(--ink)] pt-[23px]">
      <div className="mb-[17px] flex items-center justify-between gap-5 max-[680px]:items-end">
        <div className="flex items-center gap-[7px] font-mono text-[0.67rem] uppercase tracking-[0.07em] text-[var(--muted)] max-[680px]:max-w-[165px] max-[680px]:leading-[1.35]">
          <GripHorizontal aria-hidden="true" size={17} />
          <span>Drag or scroll to explore</span>
        </div>
        <div className="flex gap-2">
          <button
            className="grid size-[42px] h-[38px] place-items-center border-2 border-[var(--ink)] bg-[var(--paper)] text-[var(--ink)] transition-[transform,background,color] duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-[var(--ink)] hover:text-[var(--paper)] active:translate-x-1 active:translate-y-1"
            type="button"
            onClick={() => move('previous')}
            aria-label={`Previous ${title} image`}
          >
            <ArrowLeft aria-hidden="true" size={18} />
          </button>
          <button
            className="grid size-[42px] h-[38px] place-items-center border-2 border-[var(--ink)] bg-[var(--paper)] text-[var(--ink)] transition-[transform,background,color] duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-[var(--ink)] hover:text-[var(--paper)] active:translate-x-1 active:translate-y-1"
            type="button"
            onClick={() => move('next')}
            aria-label={`Next ${title} image`}
          >
            <ArrowRight aria-hidden="true" size={18} />
          </button>
        </div>
      </div>
      <div
        className={`flex gap-5 overflow-x-auto px-0 pb-[18px] pt-[5px] [scrollbar-color:var(--ink)_transparent] [scrollbar-width:thin] [touch-action:pan-x] ${isDragging ? 'cursor-grabbing select-none [scroll-behavior:auto]' : 'cursor-grab'}`}
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        onPointerLeave={stopDragging}
        role="region"
        aria-label={`${title} screenshots`}
        tabIndex={0}
      >
        {images.map((image, index) => (
          <figure className="m-0 min-w-[min(76vw,880px)] shrink-0 max-[680px]:basis-[86vw]" key={image.src}>
            <div className="relative aspect-video overflow-hidden border-2 border-[var(--ink)] bg-[var(--paper-deep)]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
                sizes="(max-width: 680px) 86vw, 70vw"
                draggable={false}
                priority={index === 0}
              />
            </div>
            <figcaption className="pt-2.5 font-mono text-[0.65rem] uppercase leading-[1.4] text-[var(--muted)]">
              <span className="mr-2 text-[var(--ink)]">{String(index + 1).padStart(2, '0')}</span> {image.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
