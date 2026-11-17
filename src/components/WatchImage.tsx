import { useState } from 'react';
import { Watch } from 'lucide-react';
import { getDriveImageUrl } from '../data/catalogData';

interface WatchImageProps {
  fileId: string;
  alt: string;
  width?: 480 | 800 | 1000;
  priority?: boolean;
  className?: string;
  aspectClassName?: string;
}

export function WatchImage({
  fileId,
  alt,
  width = 480,
  priority = false,
  className = '',
  aspectClassName = 'aspect-[3/4]',
}: WatchImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-zinc-100 ${aspectClassName} ${className}`}
    >
      {!loaded && !failed && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-zinc-100 animate-pulse"
        />
      )}

      {failed ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-zinc-100 to-zinc-200 p-4 text-center text-zinc-400">
          <Watch className="h-7 w-7 stroke-[1.5]" aria-hidden="true" />
          <span className="text-xs font-medium text-zinc-500 line-clamp-2">
            {alt}
          </span>
        </div>
      ) : (
        <img
          src={getDriveImageUrl(fileId, width)}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover transition-opacity duration-200 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
}
