// /vite-env.d.ts (в корне проекта)

declare module '*.css' {
  const content: string;
  export default content;
}

declare module 'frontend/src/lib/photoswipe-deep-zoom-plugin.esm.js' {
  export interface DeepZoomOptions {
    tileSize?: number;
    tileOverlap?: number;
    fadeInDuration?: number;
    cacheLimit?: number;
    maxDecodingCount?: number;
    minBatchRequestCount?: number;
    incrementalZoomButtons?: boolean;
    useLowResLayer?: boolean;
    forceWillChange?: boolean;
    maxTilePixelRatio?: number;
    viewportBuffer?: number;
    getTileUrlFn?: (data: any, x: number, y: number, z: number) => string;
    tileType?: 'deepzoom' | 'zoomify';
    tileUrl?: string;
  }

  export default class PhotoSwipeDeepZoom {
    constructor(lightbox: any, options?: DeepZoomOptions);
    destroy(): void;
  }
}

