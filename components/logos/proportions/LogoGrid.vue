<template>
  <figure>
    <div class="controls">
      <c-button @click="showGrid = !showGrid" size="sm" variant="outline-secondary" class="toggle-button">
        <span v-if="showGrid">
          <fa :icon="['far', 'border-none']" /> Amaga les guies
        </span>
        <span v-else>
          <fa :icon="['far', 'border-all']" /> Mostra les guies
        </span>
      </c-button>
    </div>
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
.controls {
  text-align: right;
  margin-top: -1rem;
  margin-bottom: 2rem;
}
</style>
