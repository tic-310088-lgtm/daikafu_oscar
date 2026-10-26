import { useState } from 'react';
import { ImageOff } from 'lucide-react';

export default function SmartImage({
  image,
  alt,
  className = '',
  imgClassName = '',
  sizes = '(min-width: 1024px) 50vw, 100vw',
  priority = false,
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-sand ${className}`}>
      {!loaded && !failed && (
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-pulse bg-gradient-to-br from-sand via-[#eadccb] to-sand-deep"
        />
      )}

      {failed ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-sand p-4 text-center text-muted">
          <ImageOff className="h-6 w-6" strokeWidth={1.5} />
          <span className="text-xs">Imagen no disponible</span>
        </div>
      ) : (
        <img
          src={image.src}
          srcSet={image.srcSet}
          sizes={sizes}
          alt={alt ?? image.alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          style={
            image.objectPosition
              ? { objectPosition: image.objectPosition }
              : undefined
          }
          className={`h-full w-full object-cover transition-opacity duration-700 ease-out ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
        />
      )}
    </div>
  );
}
