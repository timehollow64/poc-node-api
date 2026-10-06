import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import globals from "globals";
import n from "eslint-plugin-n";

export default defineConfig(
  eslint.configs.recommended,
  n.configs["flat/recommended-module"],
  {
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      eqeqeq: ["error", "smart"],
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],

      // Node / ESM
      "n/file-extension-in-import": ["error", "always"],
      "n/prefer-node-protocol": "error",
      "n/prefer-promises/fs": "error",
      "n/prefer-promises/dns": "error",
      "n/prefer-import/assert-strict": "error",
      "n/handle-callback-err": ["error", "^(err|error)$"],
      "n/no-sync": ["warn", { allowAtRootLevel: true }],
      "no-duplicate-imports": "error",

      // Promesas y async
      "no-promise-executor-return": "error",
      "prefer-promise-reject-errors": "error",
      "no-await-in-loop": "warn",

      // Errores lógicos
      "array-callback-return": "error",
      "consistent-return": "error",
      "default-case-last": "error",
      "no-constructor-return": "error",
      "no-self-compare": "error",
      "no-template-curly-in-string": "error",
      "no-throw-literal": "error",
      "no-unmodified-loop-condition": "error",
      "no-unreachable-loop": "error",
      "no-use-before-define": ["error", { functions: false }],

      // Seguridad
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
    },
  },
);
