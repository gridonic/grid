# Interactive documentation

This is our take on creating a documentation for our grid that is supposed to be simple, explorative and fun to use.

## Developing

1. Run `cd docs`
2. Run `npm i`
3. Run `npm run dev`
4. Open http://localhost:4000

⚠️ **Notice**: By default Vue prohibits binding data to `<style>` tags. That’s why we’re using a little hack to work around this issue. Because of that hot reloading will add the styles *every* time it hot reloads. 

This MAY result in memory/performance issues while developing. Just hard-reload the page to circumvent this problem. 👍
