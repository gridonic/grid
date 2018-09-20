import Sass from 'sass.js/dist/sass';

// eslint-disable-next-line import/no-webpack-loader-syntax
import * as SassWorker from '!raw-loader!sass.js/dist/sass.worker';

export default class {
    constructor(options = {}) {
        const URL = window.URL || window.webkitURL;

        let blob;

        try {
            blob = new window.Blob([SassWorker], { type: 'application/javascript' });

            // Backwards-compatibility
        } catch (e) {
            const BlobBuilder = window.BlobBuilder
                || window.WebKitBlobBuilder
                || window.MozBlobBuilder;

            blob = new BlobBuilder();
            blob.append(SassWorker);
            blob = blob.getBlob();
        }

        this.renderer = new Sass(URL.createObjectURL(blob));
        this.renderer.options(options);
    }

    async preloadFile(path) {
        const text = await window
            .fetch(path)
            .then(response => response.text());

        this.renderer.writeFile(path, text);
    }

    preloadFiles(paths) {
        paths.forEach(async path => this.preloadFile(path));
    }

    render(text) {
        return new Promise(success => this.renderer.compile(text, success));
    }
}
