<template>
  <div>
    <b-form-input v-model="name" placeholder="Alacant" />
    <button @click="download('H')">
      Download H
    </button>
    <button @click="download('V')">
      Download V
    </button>
  </div>
</template>

<script>
import utf8 from 'utf8'
import localHorizontalOneLiner from './custom-local/local-horizontal-oneliner'
import localHorizontalTwoLiner from './custom-local/local-horizontal-twoliner'
import localVerticalOneLiner from './custom-local/local-vertical-oneliner'
import localVerticalTwoLiner from './custom-local/local-vertical-twoliner'

export default {
  name: 'CustomLocal',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    download (version) {
      const name = utf8.encode(this.name)
      let svgData
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
