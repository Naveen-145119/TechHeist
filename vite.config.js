import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.REACT_APP_APPWRITE_API_ENDPOINT': JSON.stringify(process.env.REACT_APP_APPWRITE_API_ENDPOINT),
    'process.env.REACT_APP_APPWRITE_PROJECT_ID': JSON.stringify(process.env.REACT_APP_APPWRITE_PROJECT_ID),
    'process.env.REACT_APP_APPWRITE_DATABASE_ID': JSON.stringify(process.env.REACT_APP_APPWRITE_DATABASE_ID),
    'process.env.REACT_APP_EVENTS_TABLE_ID': JSON.stringify(process.env.REACT_APP_EVENTS_TABLE_ID),
    'process.env.REACT_APP_REGISTRATIONS_TABLE_ID': JSON.stringify(process.env.REACT_APP_REGISTRATIONS_TABLE_ID),
    'process.env.REACT_APP_PROFILES_TABLE_ID': JSON.stringify(process.env.REACT_APP_PROFILES_TABLE_ID),
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.[jt]sx?$/,
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      }
    }
  },
  build: {
    outDir: 'build',
    emptyOutDir: true
  }
});
