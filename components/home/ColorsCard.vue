<template>
  <div>
    <h3>Colors</h3>
    <div class="home-card">
      <div class="home-card-icon color-swatches">
        <color-swatch :hex="['#d23517','#f39128']" name="gradient" mini />
        <color-swatch name="orange" hex="#FF6720" mini />
        <color-swatch name="gray-dark" hex="#353949" mini />
        <color-swatch name="gray-med" hex="#979AA4" mini />
        <color-swatch name="gray-light" hex="#EEF0F6" dark mini />
        <color-swatch name="white" hex="#FFFFFF" dark mini />
      </div>
      <div class="home-card-buttons">
        <nuxt-link to="/colors" class="btn btn-outline-primary btn-lg">
          <span>Guies d'ús</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import ColorSwatch from '../colors/ColorSwatch'

export default {
  components: {
    ColorSwatch
  }
}
</script>

<style lang="scss" scoped>
  @import '../../sass/variables';

  .color-swatches {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 1rem;
    justify-content: center;
  }

</style>
