module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        //JQuery対応
        jquery: true,
    },
    extends: [
        //JavaScript Standardガイドに沿う
        "standard",
        // `eslint-config-prettier` と `eslint-plugin-prettier` を有効化する
        // ※ extends 配列の一番最後に配置すること
        "plugin:prettier/recommended",
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
        //Google AnalyticsやGoogle Adsenseを除外する
        googletag: true,
        ga: true,
    },
    parserOptions: {
        ecmaVersion: 2018,
        // ecmaVersion を指定してもこの記述を入れておかないと import/export 解析されない
        sourceType: 'module',
    },
    rules: {
        // Prettier の設定を記述していきます
    "prettier/prettier": "error"
    },
};
