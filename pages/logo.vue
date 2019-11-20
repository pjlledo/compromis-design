<template>
  <div>
    <h1>Logo</h1>
    <p class="intro">
      En aquesta secció s'explica l'ús del que de manera comuna coneguem com a 'logo'. La marca Compromís té diverses disposicions i adaptacions segons el format,
      a més d'estar preparada per a adaptar-se a sectorials i col·lectius.
    </p>
    <h2 id="marca">
      La marca
    </h2>
    <div class="row">
      <div class="col-md-8">
        <p>
          El conjunt format pel logotip i el símbol gràfic que l’acompanya, el denominem marca. Així com el símbol es podrà utilitzar per separat,
          el logotip sempre haurà de presentar-se amb el símbol (la "careta"), per obtindre una correcta identificació de la marca.
        </p>
        <figure>
          <img src="../assets/logotip/logo.svg" alt="logo">
        </figure>
      </div>
      <div class="col-md-4 d-flex align-items-end">
        <div class="assets btn-group">
          <a href="#" class="btn btn-lg btn-outline-primary btn-file"><span><fa :icon="['far', 'file']" /> .svg</span></a>
          <a href="#" class="btn btn-lg btn-outline-primary btn-file"><span><fa :icon="['far', 'file']" /> .ai</span></a>
        </div>
      </div>
    </div>

    <h2 id="composicio">
      Composició del text
    </h2>
    <div class="row">
      <div class="col-md-8">
        <p>
          La marca està formada pel símbol gràfic de la coalició més el text “Compromís”, en Akkurat Bold. A la paraula “Compromís”
          l’hem de reduir l’interlletrat fins aconseguir la composició desitjada (-55 pt.), amb l’objectiu de facilitar la identificació i millorar la seua llegibilitat.
        </p>
        <figure>
          <img src="../assets/logotip/interlletrat.svg" alt="logo">
        </figure>
      </div>
    </div>

    <h2>Proporcions</h2>
    <div class="row">
      <div class="col-md-8">
        <p>
          Relacions entre els diferents elements de la marca per a la seua correcta reproducció.
        </p>
        <figure>
          <img src="../assets/logotip/proporcions.svg" alt="logo">
        </figure>
      </div>
    </div>

    <h2>Àrea de respecte</h2>
    <div class="row">
      <div class="col-md-8">
        <p>
          Zona al voltant de la marca que ha de mantenir-se sempre lliure i buida, per a diferenciar la marca de la resta d’elements que composen el disseny. El marge serà equivalent a l’alçada del cos de les lletres.
        </p>
        <figure>
          <img src="../assets/logotip/area-respecte.svg" alt="logo">
        </figure>
      </div>
    </div>

    <h2>Usos inadequat</h2>
    <div class="row">
      <div class="col-md-8">
        <p>
          Zona al voltant de la marca que ha de mantenir-se sempre lliure i buida, per a diferenciar la marca de la resta d’elements que composen el disseny. El marge serà equivalent a l’alçada del cos de les lletres.
        </p>
        <figure>
          <img src="../assets/logotip/mal-anticlogo.svg" alt="logo">
          <img src="../assets/logotip/mal-buit.svg" alt="logo">
          <img src="../assets/logotip/mal-color.svg" alt="logo">
          <img src="../assets/logotip/mal-deformacio.svg" alt="logo">
          <img src="../assets/logotip/mal-colorlletres.svg" alt="logo">
          <img src="../assets/logotip/mal-disposicio.svg" alt="logo">
          <img src="../assets/logotip/mal-nom.svg" alt="logo">
          <img src="../assets/logotip/mal-tipografia.svg" alt="logo">
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'page',

  scrollToTop: true
}
</script>

<style lang="scss" scoped>

</style>
