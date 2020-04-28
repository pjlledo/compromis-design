<template>
  <div>
    <h1>Fotografia</h1>
    <p class="intro">
      A aquesta secció trobareu el repositori de fotos de Joves PV - Compromís.
    </p>

    <h2>Repositori de fotos</h2>
    <c-button variant="outline-primary" size="lg" href="https://jovespvcomunicacio.smugmug.com/" target="_blank">
      <fa :icon="['far', 'portrait']" /> Galeria de fotos
    </c-button>
  </div>
</template>

<script>
export default {
  layout: 'page',

  head () {
    return {
      title: `Fotografia - Manual d'estil - Compromís`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
