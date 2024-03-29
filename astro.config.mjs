import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    solidJs(),
    svelte(),
    // tailwind()
  ]
});