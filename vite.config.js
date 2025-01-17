/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
/// <reference types="vitest" />
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";
import million from "million/compiler";
import { defineConfig, loadEnv } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.REACT_APP_API_BASE_URL": JSON.stringify(
        env.REACT_APP_API_BASE_URL
      ),
    },
    plugins: [million.vite({ auto: true }), react()],
    test: {
      include: ["src/**/*.test.js"],
    },
    server: {
      watch: {
        usePolling: true,
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
