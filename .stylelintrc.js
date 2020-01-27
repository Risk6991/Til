module.exports = {
    syntax: ["scss"],
    plugins: ["stylelint-scss"], // stylelint-scss を使う
    extends: [
        "stylelint-config-recommended-scss",
        "stylelint-config-recess-order",
        "stylelint-config-prettier",
        "stylelint-prettier/recommended"
    ],
    rules: {
        "at-rule-no-unknown": null,
        "scss/at-rule-no-unknown": true,
        "string": "double",
        "no-duplicate-selectors": true,
        "color-hex-length": "short",
        "selector-attribute-quotes": "always",
        "selector-attribute-operator-space-before": "always",
        "selector-attribute-operator-space-after": "always",
        "property-no-vendor-prefix": true,
        "value-no-vendor-prefix": true,
        "function-url-quotes": "always",
        "function-url-data-uris": "always",
        "font-family-name-quotes": "always-where-recommended",
        "comment-whitespace-inside": "always",
        "comment-empty-line-before": "never",
        "selector-pseudo-element-colon-notation": "double",
        "selector-no-vendor-prefix": true,
        "media-feature-range-operator-space-before": "always",
        "media-feature-range-operator-space-after": "always",
        "media-feature-name-no-vendor-prefix": true,
        "media-feature-colon-space-after": "always"
    },
};
