<template>
  <div>
    <h1>Xarxes socials</h1>
    <div class="row">
      <div class="col-md-8">
        <h2 id="foto-perfil">
          Foto de perfil
        </h2>
        <p>La foto de perfil que emprem a les xarxes socials està composada d'una foto representativa del municipi o institució i la careta de Compromís.</p>
        <p>Empreu l'eina oficial per generar la foto de perfil del vostre col·lectiu.</p>
        <figure class="text-center">
          <img src="../assets/xarxes/icona.png" alt="Icona per a xarxes" style="max-width: 200px; border-radius: 50%;">
        </figure>
      </div>
      <div class="col-md-4 d-flex align-items-end mt-4 mt-xl-0">
        <c-button href="https://targes.compromis.net/#/social" variant="outline-primary" size="lg" target="_blank">
          <fa :icon="['far', 'user-circle']" /> Crea una foto de perfil
        </c-button>
      </div>
    </div>

    <h2 id="capcalera">
      Capçalera
    </h2>
    <div class="row">
      <div class="col-md-8">
        <p>Com a capçalera, és recomanable emprar una foto representativa del municipi, com una panoràmica o una foto d'un monument representatiu.</p>

        <p>Eviteu afegir més elements, com el logo de compromís o altres xarxes socials, sobre la foto si no és estrictament necessari</p>

        <figure class="edge">
          <img src="../assets/xarxes/header.jpg" alt="">
        </figure>
      </div>
    </div>

    <h2 id="nom-usuari">
      Nom d'usuari
    </h2>
    <div class="row">
      <div class="col-md-8">
        <p>Si creem una nova pàgina o perfil d'un col·lectiu local de Compromís, és important triar un nom d'usuari que seguisca el mateix patró que la resta de col·lectius locals.</p>
        <ul>
          <li>
            <strong>En xarxes amb un límit de caràcters estrictre (com a Twitter), recomanem:</strong>
            <ul>
              <li>Si cap, "Compromís + Nom del municipi". Per exemple: @CompromisGandia, @CompromisElx, @CompromisAlzira.</li>
              <li>En la resta de casos, es recomana abreviar el nom del municipi, respectant sempre la paraula Compromís. Per exemple: @CompromisVLC (València), @CompromisCS (Castelló), @CompromisALC (Alacant).</li>
              <li>La mateixa regla s'aplica als noms llargs, però introduint espais i accents. Per exemple: "Compromís Llíria". Si no cap, intentem trobar una forma d'abreviar el nom. Per exemple: "Compromís Callosa" si "Compromís Callosa d'en Sarrià" no hi cap.</li>
            </ul>
          </li>
          <li class="mt-2">
            <strong>En xarxes sense límit de caràcters (com Facebook o Instagram), recomanem:</strong>
            <ul>
              <li>Per a noms d'usuari o adreces sense espais ni caràcters especials: "Compromis + Nom del municipi". Per exemple: CompromisVilamarxant, CompromisTorrent.</li>
              <li>Per a noms de pàgina: "Compromís + Nom del municipi". Per exemple: Compromís Benicàssim.</li>
            </ul>
          </li>
          <li class="mt-2">
            <strong>Usos incorrectes</strong>
            <ul class="incorrect-list">
              <li><fa :icon="['far', 'times-circle']" /> No inclogueu la paraula "per" o "x" ni als noms d'usuari ni als noms llargs.</li>
              <li><fa :icon="['far', 'times-circle']" /> No escriviu la paraula Compromís en majúscules: <em>*COMPROMÍS</em>.</li>
              <li><fa :icon="['far', 'times-circle']" /> No inclogueu simbols als noms d'usuari: guionets, punts o barres baixes, entre altres.</li>
              <li><fa :icon="['far', 'times-circle']" /> Les abreviacions s'han d'escriure en majúscula: <em>*@Compromisalc</em>.</li>
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
            Aneu en compte també amb les targes amb text excessiu - van en contra del propòsit de les targes, que és resumir, destacar allò important i fer més digerible la informació. Els textos han d'anar en el cos de
            text de la publicació, mai en la imatge.
          </li>
          <li>
            No modifiqueu les targes del generador ni afegiu elements en programes d'edició després de fer-les. Si el generador no cobreix allò que necessiteu, consulteu amb <a href="mailto:disseny@compromis.net">disseny@compromis.net</a>.
          </li>
        </ul>
      </div>
      <div class="col-md-4 d-flex align-items-end mt-4 mt-xl-0">
        <p>
          <c-button href="https://targes.compromis.net" variant="outline-primary" size="lg" target="_blank">
            <fa :icon="['far', 'send-backward']" /> Generador de targes
          </c-button>
        </p>
      </div>
    </div>

    <h2 id="manual-xarxes">
      Manual de xarxes
    </h2>
    <div class="row">
      <div class="col-md-8">
        <p class="mb-0">
          Per a consells i recomacions a l'hora de gestionar les xarxes socials del vostre col·lectiu (quan publicar, quin tipus de publicacions fer, bones pràctiques, etc.), consulteu el <strong>Manual d'Ús de Xarxes Socials de Compromís</strong>.
        </p>
      </div>
      <div class="col-md-4 d-flex align-items-end mt-4 mt-xl-0">
        <p>
          <c-button href="https://targes.compromis.net" variant="outline-primary" size="lg" target="_blank">
            <fa :icon="['far', 'book']" /> Manual de Xarxes
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
      title: `Xarxes socials - Manual d'estil - Compromís`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
