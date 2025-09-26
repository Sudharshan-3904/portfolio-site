import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Allow external connections
    port: 5173,
    watch: {
      usePolling: true, // Enable polling for file changes in Docker
    },
    hmr: {
      port: 5173, // Ensure HMR works in Docker
    },
  },
  preview: {
    host: "0.0.0.0",
    port: 5173,
  },
});
