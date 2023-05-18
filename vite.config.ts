import react from '@vitejs/plugin-react';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';

const vitePWA = VitePWA({
	registerType: 'autoUpdate',
	outDir: 'dist',
	manifest: {
		name: 'SmartAce',
		short_name: 'SmartAce',
		description: 'Добро пожаловать в SmartAce!',
		theme_color: '#F3F3F3',
		icons: [
			{
				src: 'icons/android-chrome-192x192.png',
				size: '192x192',
				type: 'image/png',
			},
			{
				src: 'icons/android-chrome-512x512.png',
				size: '512x512',
				type: 'image/png',
			},
		],
	},
	workbox: {
		globDirectory: 'dist/',
		globPatterns: ['**/*/{css,woff2,png,svg,jpg,jpeg}'],
		swDest: 'dist/sw.js',
	},
});

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths(), vitePWA],
	// @ts-ignore
	test: {
		globals: true,
		environment: 'jsdom',
	},
});
