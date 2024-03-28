import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';

const srcFolder = path.resolve(__dirname, './src');
const alias = [
  {
    find: '@',
    replacement: srcFolder,
  },
];

const dirs = fs.readdirSync(srcFolder);

for (const dir of dirs) {
  const dirPath = path.resolve(srcFolder, dir);
  if (fs.statSync(dirPath).isDirectory()) {
    alias.push({
      find: dir,
      replacement: dirPath,
    });
  }
}

// https://vitejs.dev/config/

export default defineConfig({
  // base: '/app',
  plugins: [
    react(),
    svgr({
      svgrOptions: { exportType: 'named', ref: true, svgo: false, titleProp: true },
      include: '**/*.svg',
    }),
    checker({
      eslint: {
        lintCommand: 'eslint "./src/**/*.{js,jsx}"',
      },
    }),
  ],
  resolve: {
    // alias: {
    //   '@assets': path.resolve(__dirname, './src/assets'),
    //   '@config': path.resolve(__dirname, './src/config'),
    //   '@core': path.resolve(__dirname, './src/core'),
    //   '@hooks': path.resolve(__dirname, './src/hooks'),
    //   '@providers': path.resolve(__dirname, './src/providers'),
    //   '@utils': path.resolve(__dirname, './src/utils'),
    //   '@views': path.resolve(__dirname, './src/views'),
    // },
    alias,
  },
});
