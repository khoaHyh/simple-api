import { defineConfig, globalIgnores } from "eslint/config";
import vitest from "@vitest/eslint-plugin";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default defineConfig([
  globalIgnores(["**/node_modules", "**/package.json", "pnpm-lock.yaml"]),
  {
    plugins: { vitest, "@typescript-eslint": tseslint },
    rules: {
      ...vitest.configs.recommended.rules,
    },
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },
]);
