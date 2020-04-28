<template>
  <div>
    <h1>Material imprés</h1>

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
            <dd>Quatricromia</dd>
          </dl>

          <c-button variant="outline-primary" href="/assets/material-impres/carta.zip">
            <fa :icon="['far', 'arrow-circle-down']" /> Plantilla de carta
          </c-button>
        </div>
      </div>
    </section>

    <section>
      <h2 id="carpeta">
        Carpeta
      </h2>
      <p>
        Models de portada i contraportada de carpetes.
      </p>
      <div class="row mb-4">
        <div class="col-xl-9">
          <div class="row">
            <div class="col-12">
              <figure class="no-margin text-center">
                <img src="../assets/aplicacions/carpeta-1.png" alt="Contraportada de carpeta" style="max-width: 500px; border: 1px #CCC solid;">
              </figure>
              <figcaption>Carpeta assumpte</figcaption>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-12">
              <figure class="no-margin text-center">
                <img src="../assets/aplicacions/carpeta-2.png" alt="Contraportada de carpeta" style="max-width: 500px; border: 1px #CCC solid;">
              </figure>
              <figcaption>Carpeta careta</figcaption>
            </div>
          </div>
        </div>
        <div class="col-xl-3 mt-4 mt-xl-0">
          <dl>
            <dt>Format</dt>
            <dd>228 x 317 mm.</dd>

            <dt>Tintes d’impressió</dt>
            <dd>Quatricromia</dd>
          </dl>
          <c-button variant="outline-primary" href="/assets/material-impres/carpeta.zip">
            <fa :icon="['far', 'arrow-circle-down']" /> Plantilles de carpeta
          </c-button>
        </div>
      </div>
    </section>

    <section>
      <h2 id="roll-up">
        Roll-up
      </h2>
      <p>
        Exemple de roll-up genèric per a actes i altres esdeveniments.
      </p>
      <div class="row mb-4">
        <div class="col-xl-9">
          <div class="row">
            <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
              <figure class="edge no-margin text-center">
                <img src="../assets/aplicacions/rollup-3.png" alt="Roll up careta amb logos" style="max-width: 500px;">
              </figure>
              <figcaption>Roll-up per a col·lectius</figcaption>
            </div>
            <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
              <figure class="edge no-margin text-center">
                <img src="../assets/aplicacions/rollup-2.png" alt="Roll up degradat taronja amb logos" style="max-width: 500px;">
              </figure>
              <figcaption>Roll-up alternatiu per a col·lectius</figcaption>
            </div>
            <div class="col-lg-4 col-md-6">
              <figure class="edge no-margin text-center">
                <img src="../assets/aplicacions/rollup-1.png" alt="Roll up degradat taronja" style="max-width: 500px;">
              </figure>
              <figcaption>Roll-up mut decoratiu quan la marca de Compromís està present en altres elements (per exemple, una trasera, taula, un altre roll-up, etc.)</figcaption>
            </div>
          </div>
        </div>
        <div class="col-xl-3 mt-4 mt-lg-0">
          <dl>
            <dt>Format</dt>
            <dd>100 x 200 cm</dd>

            <dt>Tintes d’impressió</dt>
            <dd>Quatricromia</dd>
          </dl>
          <c-button variant="outline-primary" href="/assets/material-impres/roll-up.zip">
            <fa :icon="['far', 'arrow-circle-down']" /> Plantilles de roll-up
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
      title: `Material imprès - Manual d'estil - Compromís`
    }
  }
}
</script>
