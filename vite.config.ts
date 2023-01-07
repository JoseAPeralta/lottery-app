import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import removeConsole from 'vite-plugin-remove-console';
import { qrcode } from 'vite-plugin-qrcode';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    removeConsole(),
    qrcode(),
  ],
});
