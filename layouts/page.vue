<template>
  <div class="page">
    <app-nav dark nav-label="Manual d'estil" logo-label="Disseny" />
    <div :class="{ 'sidebar-open': sidebarOpen }" class="container-fluid">
      <div class="row">
        <div class="col-lg-4 col-xl-3">
          <aside class="sidebar">
            <div class="sidebar-scroll">
              <app-sidebar />
            </div>
            <button
              @click="toggleSidebar"
              :aria-expanded="sidebarOpen"
              type="button"
              aria-label="Obrir menú"
              aria-controls="sidebar"
              class="navbar-toggler sidebar-toggler d-block d-lg-none"
            >
              <span class="navbar-toggler-icon" />
            </button>
          </aside>
        </div>
        <div class="col-lg-8 col-xl-9">
          <main class="content">
            <nuxt />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav'
import AppSidebar from '@/components/AppSidebar'

export default {
  components: {
    AppNav,
    AppSidebar
  },

  data () {
    return {
      sidebarOpen: false
    }
  },

  head () {
    return {
      bodyAttrs: {
        class: 'background-white'
      }
    }
  },

  watch: {
    '$route' () {
      this.sidebarOpen = false
    }
  },

  methods: {
    toggleSidebar () {
      this.sidebarOpen = !this.sidebarOpen
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../sass/variables";

  .sidebar {
    position: sticky;
    top: $navbar-height;
    left: 0;
    right: 0;
    height: calc(100vh - 3.375rem);
    overflow: visible;
    transition: left .6s cubic-bezier(.56,0,.4,1.2), width .6s cubic-bezier(.56,0,.4,1.2);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 999em;
      height: 100%;
      background: $gray-lightest;
      z-index: -1;
      box-shadow: $inset-shadow;
    }

    &-scroll {
      height: calc(100vh - 3.375rem);
      overflow-y: scroll;
      padding-top: 4rem;
      padding-left: 2rem;
      margin-left: -2rem;
      margin-right: 2rem;
      @include scrollbar;
    }

    &-toggler {
      position: absolute;
      bottom: 2rem;
      right: .5rem;
    }
  }

  .content {
    padding: 4rem 2rem;
    transition: .6s cubic-bezier(.56,0,.4,1.2);
  }

  @include media-breakpoint-down(md) {
    .sidebar {
      position: fixed;
      width: 16rem;
      left: -12rem;
      z-index: 20;
      padding: 2rem;

      &::before {
        box-shadow: $inset-shadow-xs;
      }

      &-open {
        .sidebar {
          left: 0;
          width: 70vw;
        }

        .content {
          padding-left: calc(70vw + 1rem);
        }
      }
    }

    .content {
      padding-left: 5rem;
      padding-right: 0;
    }

    .container-fluid {
      overflow: hidden;
    }
  }
</style>
