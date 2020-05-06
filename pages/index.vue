<template>
  <div>
    <h1>Manual d’Identitat Visual Corporativa</h1>

    <p class="intro">
      Aquesta web està destinada a oferir als nostres col·lectius els diferents recursos
      visuals necessaris per a implementar la marca de Joves PV - Compromís.
    </p>
  </div>
</template>

<script>
import Careta from '@/components/logos/proportions/Careta.vue'

export default {
  layout: 'page',

  head () {
    return {
      title: `Manual d’Identitat Visual Corporativa de Joves PV - Compromís`
    }
  },

  scrollToTop: true,
  components: {
  },

  data () {
    return {
      logos: {
        Careta
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../sass/variables';
.figure-error {
  img {
    height: 100px;
    width: auto;
  }
}
</style>
