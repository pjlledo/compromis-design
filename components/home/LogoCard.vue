<template>
  <div>
    <h3>Logo</h3>
    <div class="home-card home-card--logo">
      <div class="home-card-icon">
        <div class="compromis-logo-preview">
          <compromis-logo />
          <div v-if="!twoLiner" class="local-logo-preview">
            {{ localName }}
          </div>
          <div v-else class="local-logo-preview two-liner">
            <span>{{ twoLines.line1 }}</span>
            <span>{{ twoLines.line2 }}</span>
          </div>
        </div>
      </div>
      <div class="home-card-buttons">
        <div class="division">
          <label>Logo de Compromís</label>
          <div>
            <nuxt-link to="/logo" class="btn btn-outline-primary btn-lg">
              <span>Guies d'ús</span>
            </nuxt-link>
            <a href="/assets/logo/logo.zip" class="btn btn-no-shadow btn-lg">
              <fa :icon="['far', 'arrow-circle-down']" /> Logo
            </a>
          </div>
        </div>
        <div>
          <label for="localName">Genera el logo del teu col·lectiu</label>
          <custom-local-generator @name-change="(name) => localName = name" :municipalities="municipalities" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import splitIntoTwoLines from '@/components/logos/custom-local/twolines'
import CompromisLogo from '@/components/logos/CompromisLogo'
import CustomLocalGenerator from '@/components/logos/CustomLocalGenerator'

export default {
  components: {
    CompromisLogo,
    CustomLocalGenerator
  },

  props: {
    municipalities: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      localName: '',
      twoLines: {}
    }
  },

  computed: {
    twoLiner () {
      const name = this.localName
      const spaces = name.indexOf(' ')
      return name.length > 11 && spaces >= 0
    }
  },

  watch: {
    localName () {
      this.twoLines = splitIntoTwoLines(this.localName)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../sass/variables';

.compromis-logo-preview {
  display: flex;
  justify-content: center;
  align-items: center;

  .local-logo-preview {
    font-size: 3rem;
    color: $gray-600;
    letter-spacing: -.03em;
    margin-left: 20px;

    &.two-liner {
      font-size: 2rem;
      text-align: left;
      line-height: 1;

      span {
        display: block;
      }
    }
  }

  svg {
    max-width: 400px;
    width: 100%;
  }
}

@include media-breakpoint-down(md) {
  .compromis-logo-preview {
    position: relative;
    width: fit-content;
    margin: 0 auto;

    .local-logo-preview {
      position: absolute;
      top: 83%;
      left: 54%;
      font-size: 1.15rem;
      line-height: 1;

      &.two-liner {
        font-size: 1.15rem;
      }
    }
  }
}
</style>
