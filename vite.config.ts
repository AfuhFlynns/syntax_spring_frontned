import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost", // Restrict access to localhost only
    port: 5000, // Specify your desired port (default: 5173)
    strictPort: true, // Ensures the port won't automatically change
  },
});
