import {defineConfig} from 'vitest/config';
import react from '@vitejs/plugin-react';

import pkg from './package.json';
import * as path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'lib/js',
    lib: {
      entry: 'src/index.ts',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.devDependencies),
      ],
    },
  },
  test: {
    environment: 'happy-dom',
    passWithNoTests: true,
  },
});
