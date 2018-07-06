const pkg = require('./package.json');

module.exports = (ctx) => ({
    plugins: {
        'autoprefixer': {},
        'cssnano': {}
    }
});
