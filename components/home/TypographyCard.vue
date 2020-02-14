<template>
  <div>
    <h3>Tipografia</h3>
    <div class="home-card">
      <div class="home-card-icon text-left">
        <h5 class="font-weight-bold mb-2" style="font-size: 2rem;">
          Manrope ExtraBold
        </h5>
        <h5 class="font-weight-normal text-muted mb-4" style="font-size: 2rem;">
          Manrope Medium
        </h5>
        <div class="font-weight-bold mb-2">
          Setze jutges d'un jutjat mengen fetge d'un penjat.
        </div>
        <div class="text-muted">
          Setze jutges d'un jutjat mengen fetge d'un penjat. Si el penjat es despenja, es menja els setze fetges dels jutges del jutjat que l'han penjat.
        </div>
      </div>
      <div class="home-card-buttons">
        <nuxt-link to="/tipografia" class="btn btn-outline-primary btn-lg">
          <span>Guies d'ús</span>
        </nuxt-link>
        <a href="/assets/fonts/Manrope.zip" class="btn btn-no-shadow btn-lg">
          <fa :icon="['far', 'arrow-circle-down']" /> Manrope
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  h4 {
    font-size: 2rem;
  }
</style>
