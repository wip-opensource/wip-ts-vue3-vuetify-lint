import pluginVue from 'eslint-plugin-vue'
import vuetify from 'eslint-plugin-vuetify'
import stylistic from '@stylistic/eslint-plugin'

import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
  ...pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommended,
  ...vuetify.configs['flat/recommended'],
  stylistic.configs.customize({
    flat: true, // required for flat config
  }),
  {
    rules: {
      'vue/no-template-shadow': ['error', { allow: ['props'] }],
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
)
