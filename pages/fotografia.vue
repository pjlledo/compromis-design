<template>
  <div>
    <h1>Fotografia</h1>
    <p class="intro">
      En aquesta secció trobareu el repositori de gràfic de Joves PV - Compromís.
    </p>

    <h2>Repositori de fotos i vídeo</h2>
    <c-button variant="outline-primary" size="lg" href="https://jovespv.smugmug.com/" target="_blank">
      <fa :icon="['far', 'portrait']" /> Galeria de Fotografia i vídeos
    </c-button>
  </div>
</template>

<script>
export default {
  layout: 'page',

  head () {
    return {
      title: `Fotografia i vídeo - Manual d'Identidad Visual Corportavia - Joves PV - Compromís`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
