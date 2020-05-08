<template>
  <div>
    <h1>Xarxes socials</h1>
    <div class="row">
      <div class="col-md-8">
        <h2 id="foto-perfil">
          Foto de perfil
        </h2>
        <p>La foto de perfil per a xarxes socials està composada d'una fotografia que represente el col·lectiu, un filtre taronja i l’estrela de Joves PV.</p>
        <p>Empreu l'eina oficial per generar la foto de perfil del vostre col·lectiu.</p>
        <figure class="text-center">
          <img src="../assets/xarxes/icona.png" alt="Icona per a xarxes" style="max-width: 200px; border-radius: 50%;">
        </figure>
      </div>
      <div class="col-md-4 d-flex align-items-end mt-4 mt-xl-0">
        <p class="mb-0">
          <c-button href="https://targes.jovespv.org/#/social" variant="outline-primary" size="lg" target="_blank">
            <fa :icon="['far', 'user-circle']" /> Crea una foto de perfil
          </c-button>
        </p>
      </div>
    </div>

    <h2 id="capcalera">
      Capçalera
    </h2>
    <div class="row">
      <div class="col-md-8">
        <p>
          Com a capçalera, és recomanable emprar una foto representativa del col·lectiu, filtre taronja i el logotip amb el nom del col·lectiu.
          Disposem de dos tipus de capçaleres diferents, un per a Facebook i altre per a Twitter:
        </p>
        <ul>
          <li> Facebook: Logo de Joves PV amb el nom del col·lectiu. </li>
          <li> Twitter: Adaptació del logo per a que la foto de perfil de la xarxa quede emmarcat dins de les quatre gotes.</li>
        </ul>
        <figure class="edge">
          <img src="../assets/xarxes/header.jpg" alt="">
        </figure>
      </div>
      <div class="col-md-4 d-flex align-items-end mt-4 mt-xl-0">
        <p class="mb-0">
          <c-button href="https://targes.jovespv.org/#/cover" variant="outline-primary" size="lg" target="_blank">
            <fa :icon="['far', 'user-circle']" /> Crea les capçaleres
          </c-button>
        </p>
      </div>
    </div>

    <h2 id="nom-usuari">
      Nom d'usuari
    </h2>
    <div class="row">
      <div class="col-md-8">
        <p>Si creem una nova pàgina o perfil d'un col·lectiu de Joves PV és important triar un nom d'usuari que seguisca el mateix patró que la resta de col·lectius.</p>
        <ul>
          <li>
            <strong>En xarxes amb un límit de caràcters estrictre, recomanem:</strong>
            <ul>
              <li>Nom d’usuari d’Instagram o Twitter: @jovespv+nom del col·lectiu (per exemple @jovespvxeraco).</li>
              <li>Quan no cap el nom sencer del col·lectiu, per limitació de caràcters, es pot abreviar (per exemple: @jovespvalc).</li>
            </ul>
          </li>
          <li class="mt-2">
            <strong>En xarxes sense límit de caràcters (com Facebook o Instagram), recomanem:</strong>
            <ul>
              <li>Per a noms de pàgina: "Joves PV - Compromís + Nom del col·lectiu”.</li>
              <li>Quan el nom del col·lectiu siga massa llarg: “Joves PV + Nom del col·lectiu”.</li>
            </ul>
          </li>
          <li class="mt-2">
            <strong>Usos incorrectes</strong>
            <ul class="incorrect-list">
              <li><fa :icon="['far', 'times-circle']" /> No usar únicament la paraula Joves o Joves Compromís.</li>
              <li><fa :icon="['far', 'times-circle']" /> No posar ni Joves ni Compromís en majúscules: <em>*JOVES *COMPROMÍS.</em></li>
              <li><fa :icon="['far', 'times-circle']" /> No incloure símbols als noms d'usuari: guionets, punts o barres baixes, entre altres.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <h2 id="targes">
      Targes
    </h2>
    <div class="row">
      <div class="col-md-8">
        <p>Les targes són un dels materials més útils per a compartir en xarxes. Permeten destacar una frase, una notícia, una foto, anunciar un debat, fer una comparativa...</p>
        <p>Per a fer la majoria de targes existeix el generador, una ferramenta que permet generar aquest contingut sense complicacions.</p>
        <p>Respecte al ús de les targes convé fer algunes indicacions:</p>
        <ul>
          <li>Useu les targes amb moderació: en excés perden el seu efecte. No totes les publicacions han d'anar acompanyades amb tarja.</li>
          <li>
            Aneu amb compte també amb les targes amb text excessiu - van en contra del propòsit de les targes, que és resumir, destacar allò important i fer més digerible la informació. Els textos han d'anar en el cos de
            text de la publicació, mai en la imatge.
          </li>
          <li>
            No modifiqueu les targes del generador ni afegiu elements en programes d'edició després de fer-les. Si el generador no cobreix allò que necessiteu, consulteu amb <a href="mailto:info@jovespv.org">info@jovespv.org</a>.
          </li>
        </ul>
      </div>
      <div class="col-md-4 d-flex align-items-end mt-4 mt-xl-0">
        <p>
          <c-button href="https://targes.jovespv.org" variant="outline-primary" size="lg" target="_blank">
            <fa :icon="['far', 'send-backward']" /> Generador de targes
          </c-button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'page',

  head () {
    return {
      title: `Xarxes socials - Manual d'Identidad Visual Corportavia - Joves PV - Compromís`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
