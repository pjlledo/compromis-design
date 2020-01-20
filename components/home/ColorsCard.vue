<template>
  <div>
    <h3>Colors</h3>
    <div class="home-card">
      <div class="home-card-icon color-swatches">
        <div class="color-swatch color-swatch-gradient" />
        <div class="color-swatch color-swatch-orange" />
        <div class="color-swatch color-swatch-black" />
        <div class="color-swatch  color-swatch-gray" />
        <div class="color-swatch  color-swatch-light" />
        <div class="color-swatch  color-swatch-white" />
      </div>
      <div class="home-card-buttons">
        <nuxt-link to="/logo" class="btn btn-outline-primary btn-lg">
          <span>Guies d'ús</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import '../../sass/variables';

  .color-swatches {
    display: flex;
    flex-wrap: nowrap;
    overflow-y: scroll;
  }

  .color-swatch {
    height: 10rem;
    width: 10rem;
    border-radius: $border-radius;
    background: $gray-600;
    margin-right: 2rem;
    flex-shrink: 0;

    &-gradient {
      background: $gradient;
    }

    &-orange {
      background: $primary;
    }

    &-black {
      background: $gray-900;
    }

    &-gray {
      background: $gray-500;
    }

    &-light {
      background: $gray-100;
    }

    &-white {
      background: $white;
      border: 2px $gray-100 solid;
    }
  }

</style>
