<template>
  <div>
    <h1>Colors</h1>
    <p class="intro">
      El color és l'element identificatiu d'un partit polític, per això és molt important usar-lo de manera adequada. El nostre color identificatiu és el taronja degradat i ha d'estar present
      a tot material que es faça seguint les indicacions d'aquesta secció.
    </p>

    <h2 id="us-color">
      Ús del color
    </h2>
    <p>
      El taronja és el nostre color accent, però pot arribar a agobiar si s'utilitza en excés. Per això, el color predominant als dissenys ha de ser el blanc.
      Per fer-se una idea, la porporció hauria de ser d'un quart de taronja
      sobre el total del blanc. Per a textos cal utilitzar tonalitats de grisos. Excepcionalment, podeu usar text en taronja
      o degradat per a destacar algunes paraules.
    </p>

    <h2 id="mostres-color">
      Mostres de color
    </h2>
    <div class="colors">
      <color-swatch
        :rgb="['210 53 23','243 145 40']"
        :hex="['#d23517','#f39128']"
        :cmyk="['12 93 100 3', '1 51 96 0']"
        name="gradient"
        title="Taronja degradat"
        use-case="És la tonalitat identificativa de Compromís. S'utilitza en la careta, els 'blocs' i com a color accent."
      />
      <color-swatch
        name="orange"
        title="Taronja pla"
        use-case="S'utilitza en aplicacions planes, o en text destacat menut on l'ús del degradat dificultaria la lectura"
        rgb="255 103 32"
        hex="#FF6720"
        cmyk="0 68 96 0"
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
      <color-swatch
        name="gray-dark"
        title="Negre"
        use-case="És el color de text, i és pot usar com a fons en aplicacions fosques."
        rgb="53 57 73"
        hex="#353949"
        cmyk="78 70 49 43"
      />
      <color-swatch
        name="gray-med"
        title="Gris"
        use-case="S'utilitza per al text d'informació secundària."
        rgb="151 154 164"
        hex="#979AA4"
        cmyk="0 68 96 0"
      />
      <color-swatch
        name="gray-light"
        title="Gris Clar"
        use-case="És pot utilitzar com a fons diferenciat del blanc."
        rgb="238 240 246"
        hex="#EEF0F6"
        cmyk="5 3 1 0"
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
  }
}
</script>

<style lang="scss" scoped>
@import '../sass/variables';

.colors {
  display: grid;
  grid-template-columns: repeat(auto-fill, 15rem);
  grid-template-rows: repeat(2, auto auto auto auto);
  grid-gap: 2rem;
  margin-top: 1rem;
}

.color {
  display: grid;
  grid-row: span 4;
  grid-template-rows: 16.5rem 2.5rem minmax(140px, auto) auto; // fallback
  grid-template-rows: subgrid;
  grid-gap: 0;
}
</style>
