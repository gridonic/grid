const pkg = require('./package.json');

module.exports = (ctx) => ({
    plugins: {
        'autoprefixer': {},
        'postcss-replace': { data: pkg },
        'cssnano': {}
    }
});
