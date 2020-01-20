<template>
  <div>
    <h3>Logo</h3>
    <div class="home-card home-card--logo">
      <div class="home-card-icon">
        <compromis-logo />
      </div>
      <div class="home-card-buttons">
        <div class="division">
          <h4>Logo de Compromís</h4>
          <div>
            <nuxt-link to="/logo" class="btn btn-outline-primary btn-lg">
              <span>Guies d'ús</span>
            </nuxt-link>
            <a href="#" class="btn btn-no-shadow btn-lg">
              Descarrega
            </a>
          </div>
        </div>
        <div>
          <h4>Genera el logo del teu col·lectiu</h4>
          <div class="input-group">
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Alacant"
            >
            <div class="input-group-append">
              <b-dropdown size="lg" text="Descarrega">
                <b-dropdown-item>Horitzontal <span class="text-muted">(.svg)</span></b-dropdown-item>
                <b-dropdown-item>Vertical <span class="text-muted">(.svg)</span></b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CompromisLogo from '@/components/logos/CompromisLogo'

export default {
  components: {
    CompromisLogo
  }
}
</script>

<style lang="scss" scoped>

</style>
