import { defineConfig } from "vite";
import dotenv from "dotenv";

dotenv.config()

export default defineConfig({
    base: "",
    root: "src",
    build: {
        outDir: "../dist",
    },
    server: {
        open: "src/index.html"
    },
});