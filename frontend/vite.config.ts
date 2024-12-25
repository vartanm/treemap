import { sentrySvelteKit } from '@sentry/sveltekit';
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [
		sentrySvelteKit({
			sourceMapsUploadOptions: {
				org: 'trees-of-yerevan',
				project: 'treemap-v2'
			}
		}),
		sveltekit()
	],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
