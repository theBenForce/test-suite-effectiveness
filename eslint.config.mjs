import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint')} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    rules: {
      complexity: ["error", { "max": 2 }]
    }
  },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];