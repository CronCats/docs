<template>
  <svg :width="getWidth" :height="getHeight">
    <component width="100%" v-bind:is="cronLogo"></component>
  </svg>
</template>

<script>
import CronLogoDark from './CronLogoDark.vue'
import CronLogoLight from './CronLogoLight.vue'

export default {
  props: {
    width: {
      type: Number,
      default: 40,
    },
    isDarkMode: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    getHeight() {
      return 
    },
    getWidth() {
      return this.width
    },
    cronLogo() {
      return this.isDarkMode ? CronLogoLight : CronLogoDark
    }
  },
}
</script>
