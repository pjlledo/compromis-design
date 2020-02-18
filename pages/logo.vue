<template>
  <div>
    <h1>Logo</h1>

    <p class="intro">
      En aquesta secció s'explica l'ús del que de manera comuna coneguem com a 'logo'. La marca Compromís té diverses disposicions i adaptacions segons el format,
      a més d'estar preparada per a adaptar-se a sectorials i col·lectius.
    </p>

    <section>
      <div class="row">
        <div class="col-lg-8">
          <h2 id="marca">
            La marca
          </h2>
          <p>
            El conjunt format pel logotip i el símbol gràfic que l’acompanya, el denominem marca. El símbol (la 'careta'), en alguns casos, es pot utilitzar per separat,
            però logotip ('compromís') sempre haurà d'anar acompanyat del símbol per a que se'ns identifique millor.
          </p>
          <logo-grid :logo="logos.Logo" />
        </div>
        <div class="col-lg-4 d-flex align-items-end mt-4 mt-xl-0">
          <c-button href="/assets/logo/logo.zip" variant="outline-primary" size="lg">
            <fa :icon="['far', 'arrow-circle-down']" /> Descarrega logo
          </c-button>
        </div>
      </div>
    </section>

    <section>
      <div class="row">
        <div class="col-lg-8">
          <h2 id="proporcions">
            Proporcions
          </h2>
          <p>
            Relacions entre els diferents elements de la marca.
          </p>
          <logo-grid :logo="logos.Careta" />
        </div>
      </div>
    </section>

    <section>
      <h2 id="respecte">
        Àrea de respecte
      </h2>
      <div class="row">
        <div class="col-lg-8">
          <p>
            Al voltant de la marca ha de mantenir-se sempre una zona lliure i buida, per a diferenciar la marca de la resta d’elements que composen el disseny. El marge serà equivalent a l’alçada del cos de les lletres.
          </p>
          <logo-grid :logo="logos.LogoRespecte" />
        </div>
      </div>
    </section>

    <section>
      <h2 id="monocromatiques">
        Versions monocromàtiques
      </h2>
      <div class="row">
        <div class="col-lg-8">
          <p>
            Existeixen diferents versions del logo per a adaptar-se al context. A banda de la versió en color, que és preferible usar, també existeixen les versions monocromàtiques en positiu i negatiu.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-4">
          <figure>
            <compromis-logo />
          </figure>
          <figcaption>Positiu</figcaption>
        </div>
        <div class="col-md-6 col-lg-4">
          <figure>
            <compromis-logo mono />
          </figure>
          <figcaption>Positiu B/N</figcaption>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-4">
          <figure class="figure-dark">
            <compromis-logo inverted />
          </figure>
          <figcaption>Negatiu</figcaption>
        </div>
        <div class="col-md-6 col-lg-4">
          <figure class="figure-dark">
            <compromis-logo mono style="color: white;" />
          </figure>
          <figcaption>Negatiu B/N</figcaption>
        </div>
      </div>
    </section>

    <section>
      <h2 id="inadequats">
        Usos inadequats
      </h2>
      <div class="row">
        <div class="col-lg-8">
          <p>
            És important tindre cura amb la marca, per a mantindre una imatge sòlida i constant. Un bon ús de la marca i el seu color ens aporta valors positius, i ens fa ser més reconeguts. Utilitzeu sempre el logo descarregat
            d'aquesta web. No s'ha de modificar el logo, usar versions antigues, o fer modificacions, com s'indica en els exemples a continuació:
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-4">
          <figure class="figure-error">
            <img src="../assets/logo/antic.png" alt="Logo antic">
          </figure>
          <figcaption>No utitlitzeu versions antigues i/o no oficials</figcaption>
        </div>
        <div class="col-md-6 col-lg-4">
          <figure class="figure-error">
            <img src="../assets/logo/nom.png" alt="Logo antic">
          </figure>
          <figcaption>No altereu el nom del marca</figcaption>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-4">
          <figure class="figure-error">
            <img src="../assets/logo/disposicio.png" alt="Logo antic">
          </figure>
          <figcaption>No altereu la disposicó dels elements</figcaption>
        </div>
        <div class="col-md-6 col-lg-4">
          <figure class="figure-error">
            <img src="../assets/logo/tipografia.png" alt="Logo antic">
          </figure>
          <figcaption>No canvieu la tipografia</figcaption>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-4">
          <figure class="figure-error">
            <img src="../assets/logo/deformat.png" alt="Logo antic">
          </figure>
          <figcaption>No deformeu ni altereu la proporció</figcaption>
        </div>
        <div class="col-md-6 col-lg-4">
          <figure class="figure-error">
            <img src="../assets/logo/color.png" alt="Logo antic">
          </figure>
          <figcaption>No modifiqueu el color del símbol</figcaption>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-4">
          <figure class="figure-error">
            <img src="../assets/logo/color-lletra.png" alt="Logo antic">
          </figure>
          <figcaption>No modifiqueu el color de les lletres</figcaption>
        </div>
        <div class="col-md-6 col-lg-4">
          <figure class="figure-error">
            <img src="../assets/logo/ulls.png" alt="Logo antic">
          </figure>
          <figcaption>Els ulls i boca de la "careta" no estan buits, han d’omplir-se de blanc. Respecteu les versions oficials</figcaption>
        </div>
      </div>
    </section>

    <section>
      <h2 id="adaptacions">
        Adaptacions de la marca
      </h2>
      <div class="row">
        <div class="col-lg-8">
          <p>
            Per a particularitzar la marca, poden afegir-se extensions per a col·lectius local, departaments o entitats.
            Aquesta extensió acompanyarà la marca en proporció horitzontal o comprimida, segons quin s'adeqüe més al context.
            Per a generar i descarregar el vostre logo local utilitzeu la ferramenta que tenim en aquesta mateixa web.
          </p>

          <h3>Versió horitzontal</h3>
          <p>
            La versió horitzontal és la preferible sempre a no ser que l’espai no permeta gastar-la.
            S'ha de tindre en compte els colors, les proporcions i les àrees de respecte de les extensions.
          </p>
          <logo-grid :logo="logos.Local" />

          <h3>Versió horitzontal multilínia</h3>
          <p>
            En cas que l'espai siga més reduit, i/o el nom de l'afegit siga llarg i es puga dividir, també es pot utilitzar la següent versió horitzontal
            que divideix el nom en diverses línies.
          </p>
          <logo-grid :logo="logos.LocalDosLinies" />

          <h3>Versió comprimida</h3>
          <p>
            Aquesta versió s'utilitza únicament quan l'espai és limitat i no és possible utilitzar la versió horitzontal.
            Esta versió no contempla la possibilitat d’incloure un altre logotip de forma paral·lela. Els textos afegits s’alinearan a la dreta.
          </p>
          <logo-grid :logo="logos.LocalAlt" />

          <h3>Versió comprimida multilínia</h3>
          <p>
            Aquesta versió s'utilitza únicament quan l'espai és limitat i no és possible utilitzar la versió horitzontal.
            Esta versió no contempla la possibilitat d’incloure un altre logotip de forma paral·lela. Els textos afegits s’alinearan a la dreta.
          </p>
          <logo-grid :logo="logos.LocalAltDosLinies" />

          <h3>Convivència amb altres marques</h3>
          <p>
            En els casos en què la marca principal siga la d’un partit concret, la imatge de Compromís haurà d’apareixer complementàriament a la dreta de l’altra i respectant els colors i format corporatiu. Aquests són els exemples:
          </p>

          <logo-grid :logo="logos.Marca" />

          <h3>Opció quadrada (excepcionalment)</h3>
          <p>
            L’ús d’aquesta versió es forçarà de manera excepcional quan siga indispensable mostrar tant el símbol
            com el logotip de la marca i el tamany i proporció no permeta que qualsevol de les altres dos opcions
            anteriors siguen possibles. És el cas per exemple de l’espai reduït i quadrat per a la marca en una
            papereta electoral. En cap cas es poden afegir extensions de col·lectiu local o departament a aquesta versió.
          </p>
          <logo-grid :logo="logos.Quadrat" />

          <h3>Sobre fons degradat</h3>
          <p>
            En els casos en que el logotip haja d'anar sobre un format especial amb fons de color (com un cartell A4, una pantalla) en el que haja
            de destacar la "careta" sense text, es col·loca sobre fons degradat.
          </p>

          <figure class="figure-gradient text-center">
            <img src="../assets/logo/ulls-i-boca.svg" alt="">
          </figure>
        </div>
        <div class="col-lg-4 d-lg-flex align-items-stretch">
          <div class="assets-list assets-sticky">
            <div class="assets-sticky-content">
              <label>Genera el logo del teu col·lectiu</label>
              <custom-local-generator class="generator" />

              <label>O descarrega les plantilles en <code>.ai</code> i <code>.svg</code></label>
              <ul>
                <li><fa :icon="['far', 'arrow-circle-down']" /> <a href="/assets/logo/logo-horizontal.zip">Versió horitzontal</a></li>
                <li><fa :icon="['far', 'arrow-circle-down']" /> <a href="/assets/logo/logo-horizontal-multilinia.zip">Versió horitzontal multilínia</a></li>
                <li><fa :icon="['far', 'arrow-circle-down']" /> <a href="/assets/logo/logo-comprimit.zip">Versió comprimida</a></li>
                <li><fa :icon="['far', 'arrow-circle-down']" /> <a href="/assets/logo/logo-compromit-multilinia.zip">Versió comprimida multilínia</a></li>
                <li><fa :icon="['far', 'arrow-circle-down']" /> <a href="#">Logos comarcals</a></li>
                <li><fa :icon="['far', 'arrow-circle-down']" /> <a href="#">Logos institucionals</a></li>
                <li><fa :icon="['far', 'arrow-circle-down']" /> <a href="/assets/logo/logo-quadrat.zip">Logo quadrat</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CompromisLogo from '@/components/logos/CompromisLogo.vue'
import LogoGrid from '@/components/logos/proportions/LogoGrid.vue'
import Careta from '@/components/logos/proportions/Careta.vue'
import Quadrat from '@/components/logos/proportions/Quadrat.vue'
import Logo from '@/components/logos/proportions/Logo.vue'
import LogoRespecte from '@/components/logos/proportions/LogoRespecte.vue'
import Local from '@/components/logos/proportions/Local.vue'
import LocalAlt from '@/components/logos/proportions/LocalAlt.vue'
import LocalAltDosLinies from '@/components/logos/proportions/LocalAltDosLinies.vue'
import LocalDosLinies from '@/components/logos/proportions/LocalDosLinies.vue'
import Marca from '@/components/logos/proportions/Marca.vue'
import CustomLocalGenerator from '@/components/logos/CustomLocalGenerator.vue'

export default {
  layout: 'page',

  head () {
    return {
      title: `Logo - Manual d'estil - Compromís`
    }
  },

  scrollToTop: true,
  components: {
    CompromisLogo,
    LogoGrid,
    CustomLocalGenerator
  },

  data () {
    return {
      logos: {
        Logo,
        LogoRespecte,
        Careta,
        Quadrat,
        LocalAlt,
        LocalAltDosLinies,
        Local,
        LocalDosLinies,
        Marca
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../sass/variables";
.figure-error {
  img {
    height: 100px;
    width: auto;
  }
}
</style>
