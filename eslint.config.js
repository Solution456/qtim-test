// @ts-check
import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default nuxt(
  antfu({
    formatters: true,
    stylistic: {
      semi: false,
      quotes: 'single',
      indent: 2,

    },
    rules: {
      'vue/no-multiple-template-roots': 'off',
      'vue/max-attributes-per-line': 'error',
    },
  }),
)
