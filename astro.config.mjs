import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";
import alpinejs from "@astrojs/alpinejs";
import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    mdx(), 
    sitemap(), 
    tailwind(), 
    icon(), 
    react(), 
    alpinejs(),
    partytown({
			config: {
			  forward: ["dataLayer.push"],
			},
		}),
  ]
});