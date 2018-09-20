const pkg = require('./package.json');

module.exports = (ctx) => ({
    plugins: {
        'postcss-normalize': {},
        'postcss-lh': {},
        'autoprefixer': {
            grid: true
        },
        'postcss-replace': { data: pkg },
        'cssnano': ctx.env === 'prod' ? {} : false
    }
});
