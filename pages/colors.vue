<template>
  <div>
    <h1>Colors</h1>
    <p class="intro">
      La paleta de colors corporatius de Joves PV està conformada pel taronja,
      color principal de la marca, i per a les tipografies el gris blavenc i el
      degradat com a opció per si funciona amb altres marques.
    </p>

    <h2 id="us-color">
      Ús del color
    </h2>
    <div class="row">
      <div class="col-md-8">
        <figure class="edge no-margin text-center">
          <img
            src="../assets/colors/colorsjovespv.png"
            alt="Colors"
          >
        </figure>
        <figcaption>Paleta de colors de Joves PV</figcaption>
        <p>
          En este apartat trobarem els valors dels colors usats per a la marca.
          Estan diferenciats en quatre parts: per a projectes impresos, per a
          projectes digitals, expressats mitjançant codi, i Pantone.
        </p>
      </div>
    </div>

    <h2 id="mostres-color">
      Mostres de color
    </h2>
    <div class="colors">
      <color-swatch
        name="orange"
        title="Taronja pla"
        use-case="És la tonalitat identificativa de Joves PV - Compromís. S'utilitza als logos i la major part de apliacions."
        rgb="232 93 15"
        hex="#E85D0F"
        cmyk="75 100 0 0"
        pantone="166C"
      />
      <color-swatch
        :rgb="['210 52 23', '243 145 40']"
        :hex="['#D13416', '#F29128']"
        :cmyk="['11 90 100 2', '0 51 89 0']"
        :pantone="['485C','715C']"
        name="gradient"
        title="Taronja degradat"
        use-case="És la tonalitat identificativa de Compromís. L'ús és secundari."
      />
      <color-swatch
        name="gray-dark"
        title="Negre"
        use-case="És el color de text, i és pot usar com a fons en aplicacions fosques."
        rgb="53 57 73"
        hex="#353949"
        cmyk="78 70 49 43"
      />
      <color-swatch
        name="white"
        title="Blanc"
        use-case="És en la majoria dels casos el color de fons i el predominant."
        rgb="255 255 255"
        hex="#FFFFFF"
        cmyk="0 0 0 0"
        dark
      />
    </div>
  </div>
</template>
<script>
import ColorSwatch from '@/components/colors/ColorSwatch'

export default {
  layout: 'page',

  components: {
    ColorSwatch
  },

  head () {
    return {
      title: `Colors - Manual d'Identidad Visual Corportavia - Joves PV - Compromís`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../sass/variables';

.colors {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  grid-gap: 2rem;
  margin-top: 2rem;
}

@include media-breakpoint-down(md) {
  .colors {
    grid-template-columns: 1fr;
  }
}
</style>
