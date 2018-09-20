const path = require('path');
const pkg = require('./package.json');

// @see https://poi.js.org/options.html
module.exports = ({ env }) => {
    const isDev = env === 'dev';
    const isProd = isDev === false;

    const html = {
        filename: `${isProd ? '../' : ''}index.html`,
        template: `${pkg.config.source}/index.html`
    };

    return {

        // @see https://poi.js.org/options.html#entry
        entry: `${pkg.config.source}/${pkg.main}`,

        // @see https://poi.js.org/options.html#outdir
        outDir: pkg.config.destination,

        // @see https://poi.js.org/options.html#html
        // @see https://github.com/jantimon/html-webpack-plugin
        html,

        // @see https://poi.js.org/options.html#publicpath
        publicPath: isProd && pkg.config.public,

        // @see https://poi.js.org/options.html#cleanoutdir
        cleanOutDir: true,

        // @see https://poi.js.org/options.html#sourcemap
        sourceMap: isProd === false,

        plugins: [

            // @see https://github.com/egoist/poi/tree/master/packages/plugin-eslint
            require('@poi/plugin-eslint')({
                command: '*'
            })

        ],

        configureWebpack(config, context) {
            config.module.rules.push({
                test: /\.txt$/,
                use: 'raw-loader'
            });
        },

        devServer: {
            contentBase: path.join(__dirname, '../')
        }
    }
};
