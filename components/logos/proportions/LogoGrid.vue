<template>
  <figure>
    <button @click="showGrid = !showGrid">
      Toggle grid
    </button>
    <!-- eslint-disable-next-line -->
    <component :is="logo" :grid="showGrid" />
  </figure>
</template>

<script>
export default {
  name: 'LogoGrid',

  props: {
    logo: {
      type: Function,
      default: () => {}
    }
  },

  data () {
    return {
      showGrid: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
