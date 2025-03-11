// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import node from '@astrojs/node';
import {LikeC4VitePlugin} from "likec4/vite-plugin";

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Olingo Docs',
        social: {
            github: 'https://github.com/Olingo-dev/docs',
        },
        customCss: [
            // Relative path to your custom CSS file
            './src/styles/custom.css',
        ],
        sidebar: [
            {
                label: 'Guides',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Example Guide', slug: 'guides/example' },
                ],
            },
            {
                label: 'Reference',
                autogenerate: { directory: 'reference' },
            },
            {
                label: 'Architecture',
                autogenerate: { directory: 'architecture' },
            },
        ],
        
		}), react({
			experimentalReactChildren: true,
		})],
    vite: {
        plugins: [
            LikeC4VitePlugin({})
        ]
    },
    output: "server",
    adapter: node({ mode: 'standalone' }),
});