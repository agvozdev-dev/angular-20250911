// @ts-check
import {defineConfig} from 'eslint/config';
import js from '@eslint/js';
import babelParser from '@babel/eslint-parser';

// TS/Angular
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';

// Плагины
import fileProgress from 'eslint-plugin-file-progress';
import unicorn from 'eslint-plugin-unicorn';
import regexp from 'eslint-plugin-regexp';
import rxjs from '@smarttools/eslint-plugin-rxjs';
import importPlugin from 'eslint-plugin-import';
import stylistic from '@stylistic/eslint-plugin';

// HTML + JSON
import htmlPlugin from '@html-eslint/eslint-plugin';
import jsoncParser from 'jsonc-eslint-parser';

// (опционально) отключить конфликтующие с Prettier правила в ESLint
// см. раздел зависимостей ниже
import prettierConfig from 'eslint-config-prettier/flat';

export default defineConfig([
    // Базовые рекомендации ESLint для JS
    js.configs.recommended,

    // Отключаем стиль, конфликтующий с Prettier (если используешь Prettier)
    prettierConfig,

    // Общие правила для JS/TS файлов (кроме *.html, *.json*)
    {
        plugins: {
            'file-progress': fileProgress,
            unicorn,
            regexp,
            // @ts-ignore
            rxjs,
            import: importPlugin,
            '@stylistic': stylistic,
        },
        languageOptions: {
            parser: babelParser,
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: {
                requireConfigFile: false,
                ecmaFeatures: {legacyDecorators: true},
            },
            globals: {
                window: 'readonly',
                document: 'readonly',
                NodeJS: 'readonly',
            },
        },
        rules: {
            'no-unused-expressions': ['error', {allowShortCircuit: true, allowTernary: true}],
            'no-use-before-define': ['error', {functions: false, classes: false, variables: true}],
            'func-name-matching': 'off',
            'global-require': 'off',
            'class-methods-use-this': 'off',
            'no-continue': 'off',
            'no-restricted-syntax': 'off',
            'guard-for-in': 'off',
            'default-case': 'off',
            'no-plusplus': 'off',
            'func-names': 'off',
            'consistent-return': 'warn',
            'vars-on-top': 'warn',
            'no-var': 'warn',
            camelcase: [
                'warn',
                {allow: ['^UNSAFE_'], ignoreDestructuring: false, properties: 'never'},
            ],
            'func-style': ['error', 'declaration', {allowArrowFunctions: true}],
            'max-depth': 'off',
            'max-params': 'off',
            'max-classes-per-file': ['error', 4],
            complexity: ['error', 25],
            'max-statements': ['error', 25],
            'no-underscore-dangle': 'off',
            'no-return-assign': ['error', 'except-parens'],
            'lines-between-class-members': ['error', 'always', {exceptAfterSingleLine: true}],
            'spaced-comment': ['error', 'always', {exceptions: ['*']}],
            'max-nested-callbacks': ['error', 4],
            'no-bitwise': 'warn',
            'no-useless-escape': 'warn',
            'file-progress/activate': 1,
        },
        settings: {
            progress: {hide: false, successMessage: 'Lint done...'},
        },
    },

    // TypeScript + Angular
    // @ts-ignore
    ...tseslint.configs.recommended, // базовые правила typescript-eslint
    // @ts-ignore
    ...angular.configs.tsRecommended, // @angular-eslint/recommended
    // @ts-ignore
    ...angular.configs.templateAll,

    // @ts-ignore
    {
        files: ['**/*.ts'],
        plugins: {
            unicorn,
            regexp,
            rxjs,
            import: importPlugin,
            '@stylistic': stylistic,
        },
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: 'tsconfig.json',
                sourceType: 'module',
                ecmaVersion: 2022,
            },
        },
        settings: {
            // резолвер для import правил
            'import/parsers': {'@typescript-eslint/parser': ['.ts']},
            'import/resolver': {
                // позволяет резолвить пути из tsconfig
                typescript: {alwaysTryTypes: true},
            },
        },
        rules: {
            // import/*
            'import/no-commonjs': 'off',
            'import/unambiguous': 'off',
            'import/no-deprecated': 'warn',
            'import/prefer-default-export': 'off',
            'import/default': 'error',
            'import/extensions': [
                'error',
                'always',
                {js: 'never', jsx: 'never', ts: 'never', tsx: 'never'},
            ],
            'import/order': ['warn', {groups: [['builtin', 'external', 'internal']]}],
            'import/no-extraneous-dependencies': 'off',
            'import/no-cycle': 'error',
            'import/first': 'error',
            'import/exports-last': 'off',
            'import/no-default-export': 'off',
            'import/newline-after-import': ['error', {count: 1}],
            'import/no-duplicates': 'error',

            // TS-правила
            '@typescript-eslint/no-duplicate-imports': 'off',
            '@typescript-eslint/consistent-type-imports': 'off',
            'no-param-reassign': 'off',
            'no-case-declarations': 'error',
            'no-console': ['error', {allow: ['info', 'assert', 'warn', 'error']}],
            'no-implicit-coercion': ['error', {allow: ['!!']}],
            'no-return-assign': ['error', 'always'],
            'no-useless-rename': [
                'error',
                {ignoreDestructuring: true, ignoreImport: false, ignoreExport: false},
            ],
            eqeqeq: ['error', 'always'],
            'no-useless-concat': 'error',
            'prefer-template': 'error',
            curly: ['error', 'all'],
            'prefer-destructuring': 'off',
            'no-useless-constructor': 'off',
            '@typescript-eslint/no-useless-constructor': ['error'],
            '@typescript-eslint/no-inferrable-types': ['error', {ignoreParameters: true}],
            '@typescript-eslint/prefer-readonly': ['error'],
            '@typescript-eslint/explicit-member-accessibility': [
                'error',
                {accessibility: 'no-public'},
            ],
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
            '@typescript-eslint/array-type': [
                'error',
                {default: 'array-simple', readonly: 'array-simple'},
            ],

            // Angular селекторы
            '@angular-eslint/directive-selector': [
                'error',
                {type: 'attribute', prefix: 'app', style: 'camelCase'},
            ],
            '@angular-eslint/component-selector': [
                'error',
                {type: 'element', prefix: 'app', style: 'kebab-case'},
            ],

            // stylistic
            '@stylistic/padding-line-between-statements': [
                'error',
                {blankLine: 'always', prev: '*', next: 'block'},
                {blankLine: 'always', prev: 'block', next: '*'},
                {blankLine: 'always', prev: '*', next: 'block-like'},
                {blankLine: 'always', prev: 'block-like', next: '*'},
                {blankLine: 'always', prev: '*', next: 'return'},
                {blankLine: 'always', prev: 'directive', next: '*'},
                {blankLine: 'always', prev: '*', next: ['interface', 'type']},
                {blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
                {
                    blankLine: 'any',
                    prev: ['const', 'let', 'var', 'export'],
                    next: ['const', 'let', 'var', 'export'],
                },
                {blankLine: 'any', prev: '*', next: ['case', 'default']},
                {blankLine: 'any', prev: ['case', 'default'], next: '*'},
                {blankLine: 'any', prev: '*', next: 'class'},
                {blankLine: 'any', prev: 'class', next: '*'},
                {blankLine: 'any', prev: 'directive', next: 'directive'},
            ],

            // rxjs
            'rxjs/no-compat': 'error',
            'rxjs/no-connectable': 'error',
            'rxjs/no-ignored-observable': 'error',
            'rxjs/no-topromise': 'error',

            // unicorn
            'unicorn/prefer-string-slice': 'error',
            'unicorn/no-array-push-push': 'error',
            'unicorn/require-number-to-fixed-digits-argument': 'error',
            'unicorn/no-empty-file': 'error',
            'unicorn/new-for-builtins': 'error',
            'unicorn/filename-case': ['error', {case: 'kebabCase'}],

            'regexp/no-super-linear-backtracking': 'error',
            'regexp/no-dupe-characters-character-class': 'error',
            'regexp/optimal-quantifier-concatenation': 'warn',

            // Именования
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: 'default',
                    format: ['camelCase', 'PascalCase'],
                    leadingUnderscore: 'allow',
                    trailingUnderscore: 'allow',
                },
                {
                    selector: 'variable',
                    format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
                    leadingUnderscore: 'allow',
                    trailingUnderscore: 'allow',
                },
                {selector: 'typeLike', format: ['PascalCase', 'UPPER_CASE']},
                {selector: 'property', format: ['camelCase', 'PascalCase']},
                {
                    selector: [
                        'classProperty',
                        'objectLiteralProperty',
                        'typeProperty',
                        'classMethod',
                        'objectLiteralMethod',
                        'typeMethod',
                        'accessor',
                        'enumMember',
                    ],
                    format: null,
                    modifiers: ['requiresQuotes'],
                },
            ],
            '@typescript-eslint/ban-ts-comment': 'warn',
            '@typescript-eslint/no-empty-function': 'warn',
            '@typescript-eslint/no-use-before-define': [
                'error',
                {functions: false, classes: false, variables: true, enums: true, typedefs: true},
            ],
            'no-shadow': 'off',
            '@typescript-eslint/no-shadow': ['warn'],

            // Порядок членов класса
            '@typescript-eslint/member-ordering': [
                'error',
                {
                    default: [
                        'signature',
                        'public-static-field',
                        'protected-static-field',
                        'private-static-field',
                        'public-abstract-field',
                        'protected-abstract-field',
                        'private-decorated-field',
                        'private-instance-field',
                        'protected-decorated-field',
                        'protected-instance-field',
                        'public-decorated-field',
                        'public-instance-field',
                        'public-constructor',
                        'protected-constructor',
                        'private-constructor',
                        'public-static-method',
                        'protected-static-method',
                        'private-static-method',
                        'public-abstract-get',
                        'public-abstract-set',
                        'protected-abstract-get',
                        'protected-abstract-set',
                        'public-abstract-method',
                        'protected-abstract-method',
                        'public-decorated-method',
                        'public-instance-method',
                        'protected-decorated-method',
                        'protected-instance-method',
                        'private-decorated-method',
                        'private-instance-method',
                    ],
                },
            ],
        },
    },

    // Оверрайд для тестов
    // @ts-ignore
    {
        files: ['**/*.spec.ts'],
        rules: {
            'unicorn/no-empty-file': 'off',
        },
    },

    // HTML файлы
    // @ts-ignore
    {
        ...angular.configs.templateRecommended,
        files: ['**/*.html'],
        plugins: {'@html-eslint': htmlPlugin},
        rules: {
            'spaced-comment': 'off',
            '@html-eslint/no-duplicate-attrs': 'error',
            '@html-eslint/no-duplicate-id': 'error',
            '@html-eslint/no-inline-styles': 'error',
            '@html-eslint/no-obsolete-tags': 'error',
            '@html-eslint/no-target-blank': 'error',
            '@html-eslint/require-button-type': 'off',
            '@html-eslint/require-closing-tags': ['error', {selfClosing: 'always'}],
            '@html-eslint/require-li-container': 'error',
            '@html-eslint/no-multiple-h1': 'error',
            '@html-eslint/require-lang': 'error',
            '@html-eslint/require-title': 'error',
            '@html-eslint/no-abstract-roles': 'error',
            '@html-eslint/no-accesskey-attrs': 'error',
            '@html-eslint/no-aria-hidden-body': 'error',
            '@html-eslint/no-non-scalable-viewport': 'error',
            '@html-eslint/no-positive-tabindex': 'error',
            '@html-eslint/require-frame-title': 'error',
            '@html-eslint/require-img-alt': ['error', {substitute: ['[alt]', '[attr.alt]']}],
            '@html-eslint/require-meta-viewport': 'error',
            '@html-eslint/id-naming-convention': ['error', 'kebab-case'],
            '@html-eslint/element-newline': 'error',
            '@html-eslint/no-extra-spacing-attrs': ['error', {enforceBeforeSelfClose: true}],
            '@html-eslint/no-multiple-empty-lines': 'error',
            '@html-eslint/no-trailing-spaces': 'error',
            '@html-eslint/quotes': 'error',
        },
    },

    // JSON/JSON5/JSONC
    // @ts-ignore
    {
        files: ['**/*.json', '**/*.json5', '**/*.jsonc'],
        languageOptions: {parser: jsoncParser},
    },
]);
