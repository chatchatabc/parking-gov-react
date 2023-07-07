import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://192.168.1.42:5080",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
