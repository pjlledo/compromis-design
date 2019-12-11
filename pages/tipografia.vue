<template>
  <div>
    <h1>Tipografia</h1>
    <p class="intro">
      La tipografia que emprem al material de Compromís és Manrope. És important no usar cap altra tipografia
      (excepte en casos excepcionals) i usar els dos pesos (Medium i Extra Bold) com s'explica a continuació.
    </p>
    <p>
      <c-button variant="outline-primary" size="lg">
        <fa :icon="['far', 'arrow-circle-down']" /> Descarrega Manrope
      </c-button>
    </p>
    <div class="row mt-8">
      <div class="col-md-8">
        <div class="typography-sample bold">
          <span class="typography-sample-icon">Aa</span>
          <span class="typography-sample-letters d-none d-md-block">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>
            abcdefghijklmnopqrstuvwxyz<br>
            0123456789
          </span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <h3>
          Manrope ExtraBold
        </h3>
        <p>
          Utilitzada per a textos a tamany gran, títols, titulars, encapçalaments i per a destacar alguna cosa.
          No s'ha d'utilitzar mai en textos llargs.
        </p>
      </div>
    </div>
    <div class="row mt-8">
      <div class="col-md-8">
        <div class="typography-sample">
          <span class="typography-sample-icon">Aa</span>
          <span class="typography-sample-letters d-none d-md-block">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>
            abcdefghijklmnopqrstuvwxyz<br>
            0123456789
          </span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <h3>
          Manrope Medium
        </h3>
        <p>
          Utilitzada per a cos de text, documents, i textos en general. S'ha d'evitar usar-la en tamanys de lletra grans.
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'page'
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
