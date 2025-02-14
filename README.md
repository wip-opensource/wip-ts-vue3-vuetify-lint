# wip-ts-vue3-vuetify-lint
Basic shared lint config for TS, Vue 3 and vuetify

### How to use:

1. Install the package:
  ```bash
  npm install wip-ts-vue3-vuetify-lint --save-dev
  ```

2. Update your `.eslintrc.config.js` file to include the configuration:
  ```javascript
import wipLint from 'wip-vue3-ts-lint'

export default [
  ...wipLint,
  //...Other Rules in flat esconfig
]
  ```