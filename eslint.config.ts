import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
	globalIgnores(['node_modules', 'package.json', 'package-lock.json', 'dist']),
	{
		files: ['**/*.ts'],
		plugins: { js },
		extends: ['js/recommended'],
		languageOptions: {
			parser: tsParser,
			globals: globals.browser,
		},
		rules: {
			eqeqeq: ['error', 'always'],
			'no-empty-function': 'error',
			'no-implicit-coercion': 'warn',
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-duplicate-enum-values': 'warn',
		},
	},
	tseslint.configs.recommended,
	eslintPluginPrettierRecommended,
	eslintConfigPrettier,
]);
