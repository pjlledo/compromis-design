<template>
  <div>
    <h1>Logo</h1>
    <p class="intro">
      En aquesta secció s'explica l'ús del que de manera comuna coneguem com a 'logo'. La marca Compromís té diverses disposicions i adaptacions segons el format,
      a més d'estar preparada per a adaptar-se a sectorials i col·lectius.
    </p>
    <div v-scroll-spy="{ offset: 50, data: 'section' }" style="position: relative">
      <section>
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
      </section>

      <section>
        <h2 id="composicio">
          Composició del text
        </h2>
        <div class="row">
          <div class="col-md-8">
            <p>
              La marca està formada pel símbol gràfic de la coalició més el text “Compromís”, en Akkurat Bold. A la paraula “Compromís”
              se li ha reduït l’interlletrat (-55 pt.)
            </p>
            <figure>
              <img src="../assets/logotip/interlletrat.svg" alt="Interlletrat del logo">
            </figure>
          </div>
        </div>
      </section>

      <section>
        <h2 id="proporcions">
          Proporcions
        </h2>
        <div class="row">
          <div class="col-md-8">
            <p>
              Relacions entre els diferents elements de la marca per a la seua correcta reproducció.
            </p>
            <figure>
              <img src="../assets/logotip/proporcions.svg" alt="Proporcions del logo">
            </figure>
          </div>
        </div>
      </section>

      <section>
        <h2 id="respecte">
          Àrea de respecte
        </h2>
        <div class="row">
          <div class="col-md-8">
            <p>
              Al voltant de la marca que ha de mantenir-se sempre una zona lliure i buida, per a diferenciar la marca de la resta d’elements que composen el disseny. El marge serà equivalent a l’alçada del cos de les lletres.
            </p>
            <figure>
              <img src="../assets/logotip/area-respecte.svg" alt="àrea de respecte">
            </figure>
          </div>
        </div>
      </section>

      <section>
        <h2 id="monocromatiques">
          Versions monocromàtiques, positiva i negativa
        </h2>
        <div class="row">
          <div class="col-md-8">
            <p>
              Existeixen diferents versions del logo per tal d’adaptar-se al context. A banda de la versió en color, que és preferible usar, també existeixen les versions monocromàtiques en positiu i negatiu.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <figure>
              <logo />
            </figure>
            <figcaption>Positiu</figcaption>
          </div>
          <div class="col-md-4">
            <figure>
              <logo mono class="" />
            </figure>
            <figcaption>Positiu B/N</figcaption>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <figure class="figure-dark">
              <logo inverted />
            </figure>
            <figcaption>Negatiu</figcaption>
          </div>
          <div class="col-md-4">
            <figure class="figure-dark">
              <logo mono style="color: white;" />
            </figure>
            <figcaption>Negatiu B/N</figcaption>
          </div>
          <div class="col-md-4 d-flex align-items-end">
            <div class="assets btn-group">
              <a href="#" class="btn btn-lg btn-outline-primary btn-file"><span><fa :icon="['far', 'file']" /> .svg</span></a>
              <a href="#" class="btn btn-lg btn-outline-primary btn-file"><span><fa :icon="['far', 'file']" /> .ai</span></a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 id="inadequats">
          Usos Inadequats
        </h2>
        <div class="row">
          <div class="col-md-8">
            <p>
              És important tindre cura amb la marca, per a mantindre una imatge sòlida i constant. Un bon ús de la marca i el seu color ens aporta valors positius, i ens fa ser més reconeguts.
              No s'ha de modificar el logo, usar versions antigues, o fer modificacions, com s'indica en els exemples a continuació:
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <figure class="figure-error">
              <img src="../assets/logotip/mal-antic.png" alt="Logo Antic">
            </figure>
            <figcaption>No utitlitzeu versions antigues i/o no oficials</figcaption>
          </div>
          <div class="col-md-4">
            <figure class="figure-error">
              <img src="../assets/logotip/mal-nom.png" alt="Nom canviat">
            </figure>
            <figcaption>No altereu el nom del marca</figcaption>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <figure class="figure-error">
              <img src="../assets/logotip/mal-disposicio.png" alt="Disposicio mal">
            </figure>
            <figcaption>No altereu la disposicó dels elements</figcaption>
          </div>
          <div class="col-md-4">
            <figure class="figure-error">
              <img src="../assets/logotip/mal-font.png" alt="Tipografia canviada">
            </figure>
            <figcaption>No canvieu la tipografia</figcaption>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <figure class="figure-error">
              <img src="../assets/logotip/mal-deformat.png" alt="Deformació">
            </figure>
            <figcaption>No deformeu ni altereu la proporció</figcaption>
          </div>
          <div class="col-md-4">
            <figure class="figure-error">
              <img src="../assets/logotip/mal-color.png" alt="Color alterat">
            </figure>
            <figcaption>No modifiqueu el color del símbol</figcaption>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <figure class="figure-error">
              <img src="../assets/logotip/mal-color-2.png" alt="Color de lletra alterat">
            </figure>
            <figcaption>No modifiqueu el color de les lletres</figcaption>
          </div>
          <div class="col-md-4">
            <figure class="figure-error">
              <img src="../assets/logotip/mal-foto.png" alt="Ulls i boca buits">
            </figure>
            <figcaption>Els ulls i boca de la "careta" no són buits, han d’omplir-se de blanc. Respecteu les versions oficials</figcaption>
          </div>
        </div>
        <h2 id="adaptacions">
          Adaptacions de la marca
        </h2>
        <div class="row">
          <div class="col-md-8">
            <p>
              Per a particularitzar la marca, poden afegir-se extensions per a col·lectius local, departaments o entitats.
              Aquest afegitó acompanyarà la marca en proporció horitzontal o comprimida, segons quin s'adeqüe més al context.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8">
            <figure>
              <img src="../assets/logotip/local.svg" alt="Logo local horitzontal">
            </figure>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8">
            <figure>
              <img src="../assets/logotip/corts.svg" alt="Logo corts horitzontal" style="height: 52px;">
            </figure>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <figure>
              <img src="../assets/logotip/local-alt.svg" alt="Logo local comprimit">
            </figure>
          </div>
          <div class="col-md-4">
            <figure>
              <img src="../assets/logotip/comarcal.svg" alt="Logo comarcal comrpimit">
            </figure>
          </div>
        </div>
        <h3>Opció horitzontal</h3>
        <div class="row">
          <div class="col-md-8">
            <p>
              L'opció horitzontal és la preferible sempre a no ser que l’espai ho permeta.
              S'ha de tindre en compte els colors, les proporcions i les àrees de respecte dels afegitons.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8">
            <figure>
              <img src="../assets/logotip/local-proporcions.svg" alt="Logo local horitzontal">
            </figure>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8">
            <p>
              En cas que l’extensió dispose d’un logotip propi, s’afegirà en paral·lel respectant les mesures i proporcions.
              El color haurà d’adaptar-se al gris oficial perquè no lleve força a la marca de Compromís.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8">
            <figure>
              <img src="../assets/logotip/corts-proporcions.svg" alt="Logo local horitzontal">
            </figure>
          </div>
        </div>
        <h3>Opció comprimida</h3>
        <div class="row">
          <div class="col-md-8">
            <p>
              Aquesta opció s'utilitza únicament quan l'espai és limitat de forma que és impossible utilitzar la versió horitzontal.
              S’hauran de tindre en compte els colors, les proporcions i les àrees de respecte dels afegitons.
              Esta opció no contempla la possibilitat d’incloure un altre logotip de forma paral·lela. Els textos afegits s’alinearan a la dreta.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8">
            <figure>
              <img src="../assets/logotip/local-alt-proporcions.svg" alt="Logo local horitzontal">
            </figure>
          </div>
        </div>
        <h3>Convivència amb altres marques</h3>
        <div class="row">
          <div class="col-md-8">
            <p>
              En els casos en què la marca principal siga la d’un partit concret, la imatge de Compromís haurà d’apareixer complementàriament a la dreta de l’altra i respectant els colors i format corporatiu. Aquests són els exemples:
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8">
            <figure>
              <img src="../assets/logotip/bloc.svg" alt="Logo bloc horitzontal" style="height: 60px;">
            </figure>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8">
            <figure>
              <img src="../assets/logotip/verdsequo.svg" alt="Logo verds horitzontal" style="height: 60px;">
            </figure>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8">
            <figure>
              <img src="../assets/logotip/iniciativa.jpg" alt="Logo iniciativa horitzontal" style="height: 60px; width: auto;">
            </figure>
          </div>
        </div>
        <h3>Opció quadrada (excepcionalment)</h3>
        <div class="row">
          <div class="col-md-8">
            <p>
              L’ús d’aquesta versió es forçarà de manera excepcional quan siga indispensable mostrar tant el símbol
              com el logotip de la marca i el tamany i proporció no permeta que qualsevol de les altres dos opcions
              anteriors siguen possibles. És el cas per exemple de l’espai reduït i quadrat per a la marca en una
              papereta electoral. En cap cas es poden afegir extensions de col·lectiu local o departament a aquesta versió.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <figure>
              <img src="../assets/logotip/quadrat.svg" alt="Logo quadrat">
            </figure>
          </div>
          <div class="col-md-4">
            <figure>
              <img src="../assets/logotip/quadrat-proporcions.svg" alt="Proporcions del logo quadrat">
            </figure>
          </div>
        </div>
        <h3>Sobre fons degradat</h3>
        <div class="row">
          <div class="col-md-8">
            <p>
              En els casos en que el logotip haja d'anar sobre un format especial amb fons de color (com un cartell A4, una pantalla) en el que haja
              de destacar la "careta" sense text, es col·loca sobre fons degradat.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8">
            <figure class="figure-gradient">
              <img src="../assets/logotip/careta-ulls.svg" alt="Logo quadrat">
            </figure>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Logo from '../components/logos/CompromisLogo'
export default {
  layout: 'page',

  scrollToTop: true,
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
.figure-error {
  display: flex;
  justify-content: center;
  img {
    height: 65px;
    width: auto;
  }
}
</style>
