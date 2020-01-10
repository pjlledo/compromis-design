<template>
  <div>
    <b-form-input v-model="name" placeholder="Alacant" />
    <b-form-group label="Versió">
      <b-form-radio v-model="version" name="version" value="H">
        Versió horitzontal
      </b-form-radio>
      <b-form-radio v-model="version" name="version" value="V">
        Versió vertical
      </b-form-radio>
    </b-form-group>
    <button @click="download">
      Download
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
      name: '',
      version: 'H'
    }
  },
  methods: {
    download () {
      const name = utf8.encode(this.name)
      let svgData
      const spaces = name.indexOf(' ')
      if (this.version === 'H') {
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
