<template>
  <div>
    <h1>Material imprès</h1>

    <section>
      <h2 id="carta">
        Carta
      </h2>
      <p>
        Exemples de carta o escrit oficial,en color i en una tinta.
      </p>
      <div class="row">
        <div class="col-xl-9">
          <div class="row">
            <div class="col-lg-6">
              <figure class="no-margin edge text-center mb-4 mb-xl-0">
                <img src="../assets/aplicacions/carta-color.png" alt="Carta a color" style="max-width: 500px;">
              </figure>
            </div>
            <div class="col-lg-6">
              <figure class="edge no-margin text-center mb-4 mb-xl-0">
                <img src="../assets/aplicacions/carta-mono.png" alt="Carta monocolor" style="max-width: 500px;">
              </figure>
            </div>
          </div>
        </div>
        <div class="col-xl-3">
          <dl>
            <dt>Format</dt>
            <dd>DIN A4, 287 x 210 mm.</dd>

            <dt>Suport</dt>
            <dd>
              Paper allisat blanc<br>
              100% reciclat i lliure de clor<br>
              100 g/m²
            </dd>

            <dt>Composició tipogràfica</dt>
            <dd>
              Manrope, 10/12<br>
              o en el seu defecte: Arial o Helvetica, 10/12
            </dd>

            <dt>Tintes d’impressió</dt>
            <dd>Quatricomia</dd>
          </dl>

          <c-button variant="outline-primary">
            Plantilla de carta
          </c-button>
        </div>
      </div>
    </section>

    <section>
      <h2 id="carta">
        Sobre
      </h2>
      <p>
        Exemples de sobres, en color i en una tinta.
      </p>
      <div class="row mb-4">
        <div class="col-xl-9">
          <div class="row">
            <div class="col-lg-6">
              <figure class="no-margin text-center mb-4 mb-xl-0">
                <img src="../assets/aplicacions/sobre-1-color.png" alt="Carta a color" style="max-width: 500px;">
              </figure>
            </div>
            <div class="col-lg-6">
              <figure class="no-margin text-center mb-4 mb-xl-0">
                <img src="../assets/aplicacions/sobre-1-mono.png" alt="Carta monocolor" style="max-width: 500px;">
              </figure>
            </div>
          </div>
        </div>
        <div class="col-xl-3">
          <dl>
            <dt>Format</dt>
            <dd>220 x 110 mm.</dd>

            <dt>Suport</dt>
            <dd>
              Paper allisat blanc<br>
              100% reciclat i lliure de clor
            </dd>

            <dt>Tintes d’impressió</dt>
            <dd>Quatricomia</dd>
          </dl>

          <c-button variant="outline-primary">
            Plantilla de sobre
          </c-button>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-9">
          <div class="row">
            <div class="col-lg-6">
              <figure class="no-margin text-center mb-4 mb-xl-0">
                <img src="../assets/aplicacions/sobre-2-color.png" alt="Carta a color" style="max-width: 500px;">
              </figure>
            </div>
            <div class="col-lg-6">
              <figure class="no-margin text-center mb-4 mb-xl-0">
                <img src="../assets/aplicacions/sobre-2-mono.png" alt="Carta monocolor" style="max-width: 500px;">
              </figure>
            </div>
          </div>
        </div>
        <div class="col-xl-3">
          <dl>
            <dt>Format</dt>
            <dd>229 x 324 mm.</dd>

            <dt>Suport</dt>
            <dd>
              Paper allisat blanc<br>
              100% reciclat i lliure de clor
            </dd>

            <dt>Tintes d’impressió</dt>
            <dd>Quatricomia</dd>
          </dl>

          <c-button variant="outline-primary">
            Plantilla de sobre
          </c-button>
        </div>
      </div>
    </section>

    <section>
      <h2 id="carta">
        Targetes de visita
      </h2>
      <p>
        Exemples de targeta d’acreditació per a visitants i de targeta de visita.
      </p>
      <div class="row mb-4">
        <div class="col-xl-9">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <figure class="edge no-margin text-center mb-4 mb-md-0">
                <img src="../assets/aplicacions/visita-1-front.png" alt="Carta a color" style="max-width: 500px;">
              </figure>
              <figcaption>Targeta de visita: frontal</figcaption>
            </div>
            <div class="col-lg-4 col-md-6">
              <figure class="edge no-margin text-center">
                <img src="../assets/aplicacions/visita-2-front.png" alt="Carta monocolor" style="max-width: 500px;">
              </figure>
              <figcaption>Negatiu</figcaption>
            </div>
            <div class="col-lg-4 col-md-6">
              <figure class="edge no-margin text-center">
                <img src="../assets/aplicacions/visita-back.png" alt="Carta monocolor" style="max-width: 500px;">
              </figure>
              <figcaption>Negatiu</figcaption>
            </div>
          </div>
        </div>
        <div class="col-xl-3">
          <dl>
            <dt>Format</dt>
            <dd>220 x 110 mm.</dd>

            <dt>Suport</dt>
            <dd>
              Paper allisat blanc<br>
              100% reciclat i lliure de clor
            </dd>

            <dt>Tintes d’impressió</dt>
            <dd>Quatricomia</dd>
          </dl>

          <c-button variant="outline-primary">
            Plantilla de sobre
          </c-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  layout: 'page',

  head () {
    return {
      title: ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
