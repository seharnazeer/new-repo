import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Auto-updates the service worker when available
      manifest: {
        name: 'Solar EV Charging - Admin Panel',
        short_name: 'Admin Panel',
        description: 'Solar EV Charging - Admin Panel',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/images/logo.webp', // Add your icon images here
            sizes: '192x192',
            type: 'image/webp'
          },
          {
            src: '/images/logo.webp',
            sizes: '512x512',
            type: 'image/webp'
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/example.com\/.*$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'my-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
              }
            }
          }
        ]
      }
    })
  ],
});
