import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // Ensures correct relative paths for assets
  build: {
    outDir: "dist", // Ensures your build output goes to the `dist` folder
    rollupOptions: {
      external: [
        // Uncomment these if you want to exclude them from the bundle
        // "framer-motion",
        // "react-icons/fa",
        // "react-icons/ri",
        // "react",
        // "react-dom",
      ],
      output: {
        assetFileNames: "assets/[name]-[hash][extname]", // Organizes assets into the `assets` folder
        entryFileNames: "assets/[name]-[hash].js", // Bundles main files with unique names
        chunkFileNames: "assets/[name]-[hash].js", // Names for chunk files
      },
    },
  },
  server: {
    open: true, // Opens the browser when you run `npm run dev`
    port: 3000, // Default port for the dev server
  },
});
