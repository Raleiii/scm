# SCM Lab: GitHub Pages with ESLint and Jest

## Features
- `initializePage()` updates the page status when the DOM is ready.
- ESLint runs first, Jest runs after lint succeeds, and deployment requires both jobs to pass.

## Run locally
Install Node.js 20 or newer, then run in this folder:

```bash
npm install
npm run lint
npm test
```

## Demonstrate a failing test, then a passing test
1. Open `tests/script.test.js`.
2. Temporarily change the expected text to `"This should fail"`.
3. Run `npm test` and capture the failing result.
4. Restore the expected text to `Page loaded successfully. Lint and tests are ready.`
5. Run `npm test` again and capture the passing result.
6. Do not commit the deliberately incorrect expectation.

## GitHub Pages
In GitHub, open Settings → Pages and choose GitHub Actions as the deployment source. Push to `main` and inspect the Actions tab.
