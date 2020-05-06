<template>
  <div>
    <h1>Tipografia</h1>
    <p class="intro">
      En aquest apartat es mostren les tres tipografies emprades a Joves PV - Compromís.
    </p>

    <div class="col-xl-8">
      <h2>Títols</h2>
      <p>
        Està conformada per la família Manrope, per a tots els títols i aplicacions escrites breus.
      </p>
      <figure class="edge no-margin text-center">
        <img
          src="../assets/fonts/Font-Manrope.png"
          alt="Títols"
        >
      </figure>
      <figcaption>Títols</figcaption>
      <p>
        <c-button variant="outline-primary" size="lg" href="/assets/fonts/Manrope.zip">
          <fa :icon="['far', 'arrow-circle-down']" /> Descarrega Manrope
        </c-button>
      </p>
    </div>

    <div class="col-xl-8">
      <h2>
        Frases, eslògans i aplicacions gràfiques
      </h2>
      <p>
        S’utilitzarà com a tipografia de suport la família Fixture, amb la seua ampla varietat que pot aportar moltes versions.
      </p>
      <figure class="edge no-margin text-center">
        <img
          src="../assets/fonts/Font-Fixture.png"
          alt="Eslogans"
        >
      </figure>
      <figcaption>Frases, eslògans i aplicacions gràfiques </figcaption>
      <p>
        <c-button variant="outline-primary" size="lg" href="/assets/fonts/Fixture.zip">
          <fa :icon="['far', 'arrow-circle-down']" /> Descarrega Fixture
        </c-button>
      </p>
    </div>
    <div class="col-xl-8">
      <h2>
        Paràgrafs
      </h2>
      <p>
        Està conformada per la família Helvética neue. Ús per a textos llargs i de xicotet tamany.
      </p>
      <figure class="edge no-margin text-center">
        <img
          src="../assets/fonts/Font-Helvetica.png"
          alt="Eslogans"
        >
      </figure>
      <figcaption>Paràgrafs</figcaption>
      <p>
        <c-button variant="outline-primary" size="lg" href="/assets/fonts/HelveticaNeue.zip">
          <fa :icon="['far', 'arrow-circle-down']" /> Descarrega Helvetica Neue
        </c-button>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'page',

  head () {
    return {
      title: `Tipografia - Manual d'Identidad Visual Corportavia - Joves PV - Compromís`
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../sass/variables";

  .mt-8 {
    margin-top: 5rem;
  }

  .typography-sample {
    display: flex;
    padding: 1rem 3rem;
    border: 1px $gray-200 solid;
    border-radius: $border-radius;
    align-items: center;

    &.bold {
      font-weight: bold;
    }

    &-icon {
      font-size: 8.5rem;
      margin-right: 1rem;
    }

    &-letters {
      font-size: 1.25rem;
      position: relative;
      top: .6rem;
      color: $gray-600;
    }
  }
</style>
