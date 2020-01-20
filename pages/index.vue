<template>
  <div class="container home">
    <h2>
      Recursos<br>de marca
    </h2>
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

    <h3>Tipografia</h3>
    <div class="home-card">
      <div class="home-card-icon">
        <div class="row">
          <div class="col-md-6 font-weight-bold text-left">
            <div style="font-size: 2rem; margin-bottom: .5rem;">
              Manrope ExtraBold
            </div>
            <div class="">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>
              abcdefghijklmnopqrstuvwxyz<br>
              0123456789
            </div>
          </div>
          <div class="col-md-6 text-muted text-left">
            <div style="font-size: 2rem; margin-bottom: .5rem;">
              Manrope Medium
            </div>
            <div class="">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>
              abcdefghijklmnopqrstuvwxyz<br>
              0123456789
            </div>
          </div>
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
import CompromisLogo from '@/components/logos/CompromisLogo'

export default {
  components: {
    CompromisLogo
  }
}
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  h3 {
    font-size: 4.5rem;
    margin-bottom: -1rem;
    margin-top: 3rem;
    mix-blend-mode: difference;
    opacity: .5;
  }

  h2 {
    color: $gray-900;
    font-size: 9rem;
    margin-top: 8rem;
    line-height: .95;
    letter-spacing: -.4rem;
  }

  .home {
    max-width: 1200px;

    &-card {
      background: $white;
      padding: 3rem;
      margin: 3rem 0;
      box-shadow: $default-shadow;
      border-radius: $border-radius;

      &-icon {
        margin-top: 0;
        border-bottom: 2px $gray-100 solid;
        padding: 1.5rem 3rem 4.5rem 3rem;
        margin: 0 -3rem;
        text-align: center;

        svg {
          max-width: 400px;
        }
      }

      h4 {
        font-size: 1rem;
        color: $gray-700;
        margin-bottom: 1rem;
      }

      &-buttons {
        display: flex;
        margin-top: 2.5rem;
      }

      &--logo {
        grid-template-columns: 1fr;
        grid-template-areas:
          "header"
          "icon"
          "buttons";
      }
    }
  }

  .btn {
    margin-right: 1rem;
  }

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

  .division {
    padding-right: 1rem;
    margin-right: 2rem;
    border-right: 1px $gray-200 solid;
  }
</style>
