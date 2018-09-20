<template>
    <div class="app-container">
        <aside class="side">
            <section>
                <p>{{ settings.columns.description }}</p>
                <p>$grid-columns: <input type="text" v-model="settings.columns.value"></p>
            </section>

            <section>
                <p>{{ settings.gutterWidth.description }}</p>
                <p>$grid-gutter-width: <input type="text" v-model="settings.gutterWidth.value"></p>
            </section>

            <section>
                <p>{{ settings.outerMargin.description }}</p>
                $grid-outer-margin: <input type="text" v-model="settings.outerMargin.value">
            </section>

            <section>
                <p>{{ settings.breakpoints.description }}</p>
                $grid-breakpoints: <br><textarea v-model="settings.breakpoints.value" />
            </section>

            <section>
                <p>{{ settings.maxWidth.description }}</p>
                $grid-max-width: <input type="text" v-model="settings.maxWidth.value">
            </section>

        </aside>
        <main class="main">
            <div class="grid-container" v-if="isLoading === false">
                <div class="grid-row">
                    <div class="column -xs-12 -md-6">
                        <p>Hello Raphi!</p>
                    </div>
                    <div class="column -xs-12 -md-6">
                        <p>💋</p>
                    </div>
                </div>
            </div>
            <div v-else>Loading Grid…</div>
        </main>

        <app-footer class="footer" />
    </div>
</template>

<style lang="scss">
    @import "assets/styles/styles";

    .app-container {
        display: flex;
        flex-wrap: wrap;

        > .side,
        > .main {
            flex: 1 1 0%;
        }

        > .main {
            padding: 1rem 1lh;
        }

        > .side {
            background-color: $color-silver;
            padding: 1rem 1lh;
        }

        > .footer {
            flex-basis: 100%;
            margin: 4lh 0 2lh;
            text-align: center;
        }
    }

    .grid-container {
        box-shadow: inset 0 0 0 1px $color-red;
    }

    .grid-row {
        box-shadow: inset 0 0 0 1px $color-blue;

        > .column {
            box-shadow: inset 0 0 0 1px $color-yellow;

            > * {
                background-color: $color-lime;
            }
        }
    }
</style>

<script>
    import Sass from '@/sass';
    import AppFooter from '@/components/app-footer.vue';

    const sass = new Sass();

    sass.preloadFiles([
        'grid.scss',
        '_functions.scss',
        'functions/_grid-column-width.scss',
        'functions/_grid-configuration-at.scss',
        'functions/_grid-gutter-width.scss',
        'functions/_grid-outer-margin.scss',
        '_mixins.scss',
        'mixins/_grid-breakpoint.scss',
        'mixins/_grid-gutter-width.scss',
        'mixins/_grid-outer-margin.scss',
        '_variables.scss'
    ]);

    export default {
        components: {
            AppFooter
        },
        data() {
            return {
                isLoading: true,
                settings: {
                    columns: {
                        description: 'Set the number of columns you want to use in your layout.',
                        value: 12
                    },
                    gutterWidth: {
                        description: 'Set the gutter size between columns. You may provide a list of values for each breakpoint. If there are more breakpoints than values in your list, the last value will be used for all remaining breakpoints.',
                        value: '30px'
                    },
                    outerMargin: {
                        description: 'Set a margin for the container sides. This may also be a list of values. See gutter width for explanation.',
                        value: '15px'
                    },
                    breakpoints: {
                        description: 'Set the breakpoints for the grid. You should always provide at least one breakpoint without a resolution. This one will be used for naming of the initial classes.',
                        value: 'xs: null,\nsm: 576px,\nmd: 768px,\nlg: 992px,\nxl: 1200px'
                    },
                    maxWidth: {
                        description: 'Set the maximum width for the container. There is a class modifier available to disable the maximum width in case you don’t need it. See the official documentation for details.',
                        value: '1440px'
                    }
                },
                gridCSS: null,
                styleNode: null,
                styleText: null
            };
        },
        watch: {
            settings: {
                handler() {
                    this.compileGridStyles();
                },
                deep: true
            },
            gridCSS(value) {
                this.styleText.textContent = value;
            }
        },
        created() {
            this.compileGridStyles();
        },
        mounted() {
            this.createStyleNodes();
        },
        methods: {
            createStyleNodes() {
                this.styleNode = document.createElement('style');
                this.styleText = document.createTextNode('');

                this.styleNode.type = 'text/css';
                this.styleNode.appendChild(this.styleText);

                document.head.appendChild(this.styleNode);
            },
            async compileGridStyles() {
                const {
                    columns,
                    gutterWidth,
                    outerMargin,
                    breakpoints,
                    maxWidth
                } = this.settings;

                const styles = `
                    $grid-columns: ${columns.value};
                    $grid-gutter-width: ${gutterWidth.value};
                    $grid-outer-margin: ${outerMargin.value};
                    $grid-breakpoints: (${breakpoints.value});
                    $grid-max-width: ${maxWidth.value};

                    @import "grid.scss";
                `;

                const { text } = await sass.render(styles);

                this.gridCSS = text;
                this.isLoading = false;
            }
        }
    };
</script>
