<template>
  <b-navbar :class="{ 'navbar': true, 'navbar--dark': dark }" :toggleable="true" :variant="dark ? 'dark' : 'light'" fixed="top">
    <div class="container-fluid">
      <nuxt-link to="/" class="logo-link">
        <compromis-logo :mono="dark" class="logo" />
      </nuxt-link>
      <div v-if="logoLabel" class="nav-label logo-label">
        {{ logoLabel }}
      </div>
      <div v-if="navLabel" class="nav-label app-label">
        {{ navLabel }}
      </div>
    </div>
  </b-navbar>
</template>

<script>
import CompromisLogo from './logos/CompromisLogo'

export default {
  name: 'AppNav',

  components: {
    CompromisLogo
  },

  props: {
    dark: {
      type: Boolean,
      default: false
    },
    navLabel: {
      type: String,
      default: ''
    },
    logoLabel: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
  @import '../sass/variables';

  .navbar {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: $white !important;
    padding: .75rem 0;
    transition: .25s ease-in-out;

    & > .container-fluid {
      padding: 0 5rem;
    }

    .logo {
      height: 28px;

      &-link {
        color: $white;
      }
    }

    .nav-label {
      display: flex;
      align-items: center;
      font-size: 1.25rem;
      letter-spacing: -.3px;
      line-height: 1;
      white-space: nowrap;
      color: $gray-700;
    }

    .logo-label {
      padding: .3rem .75rem;
      color: $gray-700;
    }

    .app-label {
      margin-left: auto;
    }

    &--dark {
      background-color: $gray-900 !important;

      .app-label, .nav-label {
        color: $white;
      }
     .navbar-toggler-icon::before, .navbar-toggler-icon::after {
       background-color: $white;
     }
    }

    &-toggler {
      border: 0;

      &-icon {
        background-image: none !important;
        position: relative;

        &::before,
        &::after {
          content: '';
          position: absolute;
          background: $body-color;
          height: 2px;
          left: 3px;
          right: 3px;
          top: 25%;
          transition: .4s ease-in-out;
        }

        &::after {
          content: '';
          top: auto;
          bottom: 25%;
        }
      }

      &[aria-expanded="true"] {
        .navbar-toggler-icon {
          &::after {
            transform: rotate(45deg) translateY(-5px) translateX(-3px);
          }
          &::before {
            transform: rotate(-46deg) translateY(5px) translateX(-5px);
          }
        }
      }
    }
  }

  @include media-breakpoint-down(lg) {
    .navbar {
      & > .container-fluid {
        padding: 0 3rem;
      }
    }
  }

  @include media-breakpoint-down(md) {
    .navbar {
      z-index: 100;
      padding: .75rem 0;

      & > .container-fluid {
        padding: 0 1rem;
      }

      .logo-label {
        display: none !important;
      }

      .app-label {
        margin-left: .5rem;
      }

      .logo-link {
        display: inline-block;
        width: 30px;
        overflow: hidden;
      }
    }
  }
</style>
