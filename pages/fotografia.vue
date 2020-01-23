<template>
  <div>
    <h1>Fotografia</h1>
    <p class="intro">
      A l’hora d’escollir una fotografia d’un membre de Compromís, sempre depenent de cada cas concret,
      es tendirà a triar imatges on els persones apareguen sense cap tipus d’element que tape o distorsione
      el seu protagonisme (com taules). A més, sempre serà preferible mostrar a la persona amb moviments que
      reflexen acció i actitud i amb primers planols per transmetre proximitat.
    </p>

    <h2>Alguns exemples</h2>
    <div class="row">
      <div class="col-md-6">
        <figure class="edge">
          <img src="../assets/fotografia/baldovi.jpg" alt="Joan Baldoví">
        </figure>
      </div>
      <div class="col-md-6">
        <figure class="edge">
          <img src="../assets/fotografia/monica.jpg" alt="Joan Baldoví">
        </figure>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <figure class="edge">
          <img src="../assets/fotografia/ribo.jpg" alt="Joan Baldoví">
        </figure>
      </div>
      <div class="col-md-6">
        <figure class="edge">
          <img src="../assets/fotografia/marca.jpg" alt="Joan Baldoví">
        </figure>
      </div>
    </div>

    <h2>Repositori de fotos</h2>
    <p>A aquesta secció trobareu una galeria de fotos amb tots els càrrecs públics.</p>
    <c-button variant="outline-primary" size="lg" href="https://flickr.com/coaliciocompromis" target="_blank">
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
