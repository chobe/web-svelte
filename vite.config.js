import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vitest/config';
import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';

export default defineConfig({
	define: {
		'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString())
	},

	assetsInclude: ['**/*.vtt'],

	logLevel: 'info',

	css: {
		transformer: 'lightningcss',
		lightningcss: {
			targets: browserslistToTargets(browserslist())
		}
	},

	build: {
		cssMinify: 'lightningcss'
	},
	plugins: [enhancedImages(), sveltekit()],

	ssr: {
		noExternal: ['@sveltejs/site-kit']
	},

	optimizeDeps: {
		exclude: ['@sveltejs/site-kit']
	},

	server: {
		fs: {
			strict: false
		}
	},

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
