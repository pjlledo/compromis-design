<template>
  <div :class="{'container': !inPage, 'in-page': inPage}">
    <footer class="cardless-text">
      <p>Si tens qualsevol dubte o suggeriment, pots contactar-nos en <a href="mailto:disseny@compromis.net">disseny@compromis.net</a></p>
      <p>
        <strong>Manual d'Estil de Compromís</strong>.
        Darrera actualització: <span v-if="lastUpdated">{{ lastUpdated.getDate() }} {{ months[lastUpdated.getMonth()] }} {{ lastUpdated.getFullYear() }}.</span>
      </p>
    </footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    inPage: Boolean
  },

  data () {
    return {
      months: ['gener', 'febrer', 'març', 'abril', 'maig', 'juny', 'juliol', 'agost', 'setembre', 'octubre', 'novembre', 'desembre']
    }
  },

  computed: {
    ...mapState([
      'lastUpdated'
    ])
  },

  mounted () {
    this.$store.dispatch('getLastUpdated')
  }
}
</script>

<style lang="scss" scoped>
@import '../sass/variables';
.container {
  max-width: 1200px;
}

footer {
  margin-bottom: 2rem;
  margin-top: 10rem;

  p {
    margin-bottom: .5rem;
  }
}

.in-page {
  max-width: 100%;

  footer {
    position: relative;
    background: $white;
    margin-top: 4rem;
    padding-left: 0;
    padding-right: 0;
    margin-left: 0;
    margin-right: 0;

    p {
      font-size: 1rem;
    }

    &::before {
      content: '';
      position: absolute;
      width: 4rem;
      height: 2px;
      background: $gray-400;
      top: .5rem;
    }
  }
}
</style>
