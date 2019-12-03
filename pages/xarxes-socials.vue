<template>
  <div>
    <h1>Xarxes socials</h1>
    <div class="row">
      <div class="col-md-8">
        <h2>Foto de perfil</h2>
        <p>La foto de perfil que emprem a les xarxes socials està composada d'una foto representativa del municipi o institució i la careta de Compromís.</p>
        <p>Empreu l'eina oficial per generar la foto de perfil del vostre col·lectiu.</p>
        <figure class="text-center">
          <img src="../assets/xarxes/icona.png" alt="Icona per a xarxes" style="max-width: 200px; border-radius: 50%;">
        </figure>
      </div>
      <div class="col-md-4 d-flex align-items-end">
        <p>
          <c-button href="https://targes.compromis.net/#/social" variant="outline-primary" size="lg" target="_blank">
            Crea una foto de perfil
          </c-button>
        </p>
      </div>
    </div>

    <h2>Capçalera</h2>
    <div class="row">
      <div class="col-md-8">
        <p>Com a capçalera, és recomanable emprar una foto representativa del municipi, com una panoràmica o una foto d'un monument representatiu.</p>

        <p>Eviteu afegir més elements, com el logo de compromís o altres xarxes socials, sobre la foto si no és estrictament necessari</p>

        <figure class="edge">
          <img src="../assets/xarxes/header.jpg" alt="">
        </figure>
      </div>
    </div>

    <h2>Targes</h2>
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
            No modifiqueu les targes del generador ni afegiu elements en programes d'edició després de fer-les. Si el generador no cobreix allò que necessiteu, consulteu amb disseny@compromis.net.
          </li>
        </ul>
      </div>
      <div class="col-md-4 d-flex align-items-end">
        <p>
          <c-button href="https://targes.compromis.net" variant="outline-primary" size="lg" target="_blank">
            Generador de targes
          </c-button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'page'
}
</script>

<style lang="scss" scoped>

</style>
