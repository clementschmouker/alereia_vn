import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    // base: '/B5T1/projets/alereia_vn_staging/',
    base: './',
    css: {
        preprocessorOptions: {
        scss: {},
        },
    },
    build: {
        assetsDir: '',
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            output: {
                manualChunks: {
                vendor: ['three'], // example: externalize heavy deps
                },
            },
        },
    }, 
});
