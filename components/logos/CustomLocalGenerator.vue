<template>
  <div class="input-group">
    <input
      id="localName"
      v-model="name"
      type="text"
      class="form-control form-control-lg"
      placeholder="Alacant"
    >
    <div class="input-group-append">
      <b-dropdown size="lg" text="Descarrega">
        <b-dropdown-item @click="download('H')">
          Horitzontal <span class="text-muted">(.svg)</span>
        </b-dropdown-item>
        <b-dropdown-item @click="download('V')">
          Vertical <span class="text-muted">(.svg)</span>
        </b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
import utf8 from 'utf8'
import localHorizontalOneLiner from './custom-local/local-horizontal-oneliner'
import localHorizontalTwoLiner from './custom-local/local-horizontal-twoliner'
import localVerticalOneLiner from './custom-local/local-vertical-oneliner'
import localVerticalTwoLiner from './custom-local/local-vertical-twoliner'

export default {
  name: 'CustomLocalGenerator',
  data () {
    return {
      name: ''
    }
  },

  watch: {
    name () {
      this.$emit('name-change', this.name)
    }
  },

  methods: {
    download (version) {
      let svgData
      const name = utf8.encode(this.name)
      const spaces = name.indexOf(' ')

      if (version === 'H') {
        svgData = name.length > 11 && spaces >= 0 ? localHorizontalTwoLiner(name) : localHorizontalOneLiner(name)
      } else {
        svgData = name.length > 11 && spaces >= 0 ? localVerticalTwoLiner(name) : localVerticalOneLiner(name)
      }

      const link = document.createElement('a')
      link.setAttribute('href', 'data:image/svg+xml;base64,' + window.btoa(svgData))
      link.setAttribute('download', 'compromis-local.svg')
      link.click()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
