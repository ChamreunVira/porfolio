"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, GripHorizontal } from "lucide-react";
import type { ProjectImage } from "@/types";

type ProjectGalleryProps = {
  title: string;
  images: ProjectImage[];
};

export function ProjectGallery({ title, images }: ProjectGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ startX: 0, scrollLeft: 0 });

  const move = (direction: "previous" | "next") => {
    trackRef.current?.scrollBy({
      left: direction === "next" ? trackRef.current.clientWidth * 0.8 : -trackRef.current.clientWidth * 0.8,
      behavior: "smooth",
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
    <div className="project-gallery">
      <div className="project-gallery__header">
        <div className="project-gallery__hint">
          <GripHorizontal aria-hidden="true" size={17} />
          <span>Drag or scroll to explore</span>
        </div>
        <div className="project-gallery__controls">
          <button type="button" onClick={() => move("previous")} aria-label={`Previous ${title} image`}>
            <ArrowLeft aria-hidden="true" size={18} />
          </button>
          <button type="button" onClick={() => move("next")} aria-label={`Next ${title} image`}>
            <ArrowRight aria-hidden="true" size={18} />
          </button>
        </div>
      </div>
      <div
        className={`project-gallery__track${isDragging ? " is-dragging" : ""}`}
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
          <figure className="project-gallery__slide" key={image.src}>
            <div className="project-gallery__image">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 680px) 86vw, 70vw"
                draggable={false}
                priority={index === 0}
              />
            </div>
            <figcaption><span>{String(index + 1).padStart(2, "0")}</span> {image.alt}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
