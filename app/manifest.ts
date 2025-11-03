import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sameer Ansari - Portfolio',
    short_name: 'Sameer Ansari',
    description: 'iOS/Android & Full-Stack Developer Portfolio showcasing projects and skills',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#0ea5e9',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
    categories: ['portfolio', 'technology', 'development'],
  };
}

