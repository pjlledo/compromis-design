<template>
  <div class="input-group generator">
    <input
      id="localName"
      @input="updateName"
      :value="name"
      @keypress="preventTyping"
      @keydown.delete="resetTyping"
      @keypress.enter="download('H')"
      type="text"
      class="form-control form-control-lg"
      placeholder="Alacant"
      list="municipalities"
    >
    <div class="input-group-append">
      <b-dropdown size="lg" text="Descarrega">
        <b-dropdown-item v-if="!canDownload" disabled>
          Has d'escriure un nom vàlid d'un <br>
          col·lectiu local o comarcal de Compromís
        </b-dropdown-item>
        <b-dropdown-divider v-if="!canDownload" />
        <b-dropdown-item @click="download('H', 'svg')" :disabled="!canDownload">
          Horitzontal <span class="text-muted">(.svg)</span>
        </b-dropdown-item>
        <b-dropdown-item @click="download('H', 'png')" :disabled="!canDownload">
          Horitzontal <span class="text-muted">(.png)</span>
        </b-dropdown-item>
        <b-dropdown-item @click="download('V', 'svg')" :disabled="!canDownload">
          Comprimida <span class="text-muted">(.svg)</span>
        </b-dropdown-item>
        <b-dropdown-item @click="download('V', 'png')" :disabled="!canDownload">
          Comprimida <span class="text-muted">(.png)</span>
        </b-dropdown-item>
      </b-dropdown>
    </div>
    <datalist id="municipalities">
      <option v-for="(municipality, i) in municipalities" :key="i">
        {{ municipality }}
      </option>
    </datalist>
  </div>
</template>

<script>
import localHorizontalOneLiner from './custom-local/local-horizontal-oneliner'
import localHorizontalTwoLiner from './custom-local/local-horizontal-twoliner'
import localVerticalOneLiner from './custom-local/local-vertical-oneliner'
import localVerticalTwoLiner from './custom-local/local-vertical-twoliner'
import utf8 from 'utf8'

export default {
  name: 'CustomLocalGenerator',

  props: {
    municipalities: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      name: '',
      canType: true
    }
  },

  computed: {
    canDownload () {
      return this.municipalities.includes(this.name)
    }
  },

  watch: {
    name () {
      if (this.municipalities.includes(this.name)) {
        this.$emit('name-change', this.name)
      } else {
        this.$emit('name-change', '')
      }
    }
  },

  methods: {
    updateName (e) {
      const value = e.target.value

      if (!this.canType) {
        return
      }

      const coincidences = this.municipalities.filter((municipality) => {
        return municipality.toLowerCase().startsWith(value.toLowerCase())
      })

      if (coincidences.length === 1) {
        this.name = coincidences[0]
        this.canType = false
      } else {
        this.name = value
      }
    },

    preventTyping (e) {
      if (!this.canType) { e.preventDefault() }
    },

    resetTyping (e) {
      if (!this.canType) {
        this.name = ''
        this.canType = true
      }
    },

    download (version, format) {
      if (!this.municipalities.includes(this.name)) {
        alert(`Has d'escriure un nom vàlid d'un col·lectiu local o comarcal de Compromís`)
        return
      }

      let svgData
      const name = utf8.encode(this.name)
      const spaces = name.indexOf(' ')

      if (version === 'H') {
        svgData = name.length > 11 && spaces >= 0 ? localHorizontalTwoLiner(name) : localHorizontalOneLiner(name)
      } else {
        svgData = name.length > 11 && spaces >= 0 ? localVerticalTwoLiner(name) : localVerticalOneLiner(name)
      }

      if (format === 'png') {
        return this.downloadPng(svgData)
      }

      return this.downloadSvg(svgData)
    },

    downloadPng (data) {
      const canvas = document.createElement('canvas')
      canvas.setAttribute('width', 2000)
      canvas.setAttribute('height', 400)
      const ctx = canvas.getContext('2d')
      const img = new Image()
      const svg = 'data:image/svg+xml;base64,' + window.btoa(data)

      img.onload = () => {
        ctx.drawImage(img, 0, 0)
        const png = canvas.toDataURL('image/png')
        const link = document.createElement('a')
        link.href = png
        link.download = 'compromis-local.png'
        link.click()
      }
      img.src = svg
    },

    downloadSvg (data) {
      const link = document.createElement('a')
      link.setAttribute('href', 'data:image/svg+xml;base64,' + window.btoa(data))
      link.setAttribute('download', 'compromis-local.svg')
      link.click()
    }
  }
}
</script>

<style lang="scss">

</style>
