module.exports = {
    extends: [
        'plugin:vue/strongly-recommended',
        'airbnb-base'
    ],
    rules: {
        'vue/html-indent': ['error', 4],
        'vue/max-attributes-per-line': ['error', { 'singleline': 3 }],

        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'comma-dangle': ['error', 'never'],
        'no-param-reassign': ['error', {
            'props': true,
            'ignorePropertyModificationsFor': [
                'acc',
                'accumulator',
                'e',
                'state'
            ]
        }],
        'padded-blocks': 0,

        // temporarily disable import resolving :(
        // @see https://twitter.com/_mzdr/status/1036564364462043136
        'import/no-unresolved': 'off'
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                'indent': 'off',
                'vue/script-indent': ['warn', 4, { 'baseIndent': 1 }]
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 9,
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    // settings: {
    //     'import/resolver': {
    //         webpack: {
    //             config: webpackConfig
    //         }
    //     }
    // }
};
