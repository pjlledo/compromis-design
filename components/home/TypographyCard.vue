<template>
  <div>
    <h3>Tipografia</h3>
    <div class="home-card">
      <div class="home-card-icon text-left">
        <h5 class="mb-4 font-weight-bold" style="font-size: 2rem;">
          Manrope
        </h5>
        <div class="font-weight-bold mb-2">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>
          abcdefghijklmnopqrstuvwxyz<br>
          0123456789
        </div>
        <div class="text-muted">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>
          abcdefghijklmnopqrstuvwxyz<br>
          0123456789
        </div>
      </div>
      <div class="home-card-buttons">
        <nuxt-link to="/logo" class="btn btn-outline-primary btn-lg">
          <span>Guies d'ús</span>
        </nuxt-link>
        <a href="#" class="btn btn-no-shadow btn-lg">
          Descarrega
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
