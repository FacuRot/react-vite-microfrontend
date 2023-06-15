import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  esbuild: {
    supported: {
      "top-level-await": true, //browsers can handle top-level-await features
    },
  },
  plugins: [
    react(),
    federation({
      name: "remotecomponent1",
      remotes: {
        sharedComp: "http://localhost:4173/assets/remotecomponent1.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
