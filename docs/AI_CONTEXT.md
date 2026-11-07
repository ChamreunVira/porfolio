# AI Context

## Project gallery lightbox

The project details route at `app/projects/[slug]/page.tsx` renders the reusable `ImageLightbox` component from `components/ui/ImageLightbox.tsx` for each project's screenshot gallery.

`ImageLightbox` owns the gallery image buttons and full-screen viewer state. It opens the selected real image from `Project.gallery`, preserves its aspect ratio with `object-contain`, and uses `next/image` with the original local asset (`unoptimized`, `quality={100}`) in the lightbox. The viewer supports previous/next controls, wrapping navigation, `ArrowLeft`, `ArrowRight`, `Escape`, a close button, backdrop-click closing, body scroll locking, focus on open, and short opacity transitions.

Gallery image sources and captions continue to be defined by the shared `GalleryImage` type in `data/portfolioData.ts`. Add or update gallery entries there; the lightbox does not require per-project changes.
