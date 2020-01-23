<template>
  <div>
    <h1>Vídeo</h1>
    <p class="intro">
      En aquesta secció podeu descarregar una varietat de recursos per a la composició de vídeos de Compromís,
      com la outro amb el logo o exemples de títols.
    </p>
    <c-button variant="outline-primary" size="lg">
      <fa :icon="['far', 'photo-video']" /> Recursos per a vídeo
    </c-button>

    <div class="row">
      <div class="col-md-8">
        <h2 id="exemples">
          Exemples
        </h2>
        <p>Per a fer-vos una idea de com podeu montar vídeos (esquema, estètica, etc.), consulteu la secció de Vídeos del Facebook de Compromís.</p>

        <c-button variant="outline-primary" href="https://www.facebook.com/pg/coaliciocompromis/videos" target="_blank">
          <fa :icon="['far', 'play']" /> Vídeos de Compromís
        </c-button>

        <h3>Vídeos d'intervencions o entrevistes</h3>
        <p>
          Hem de prioritzar vídeos curts quan compartim intervencions, és a dir, destaquem la part rellevant de la intervenció o entrevista
          en compte de compartir la peça sencera. Important subtítolar a ser possible, tant per la gent amb dificultat auditiva com per a fer
          més accessible la consumició del vídeo (pensem en una persona que va en transport públic sense cascos i no podria veure el vídeo d'altra manera).
        </p>

        <div class="embed-responsive embed-responsive-1by1">
          <iframe
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fcoaliciocompromis%2Fvideos%2F962127090854894%2F&show_text=0&width=476"
            width="476"
            height="476"
            style="border:none;overflow:hidden"
            class="embed-responsive-item"
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allowFullScreen="true"
          />
        </div>

        <h3>Vídeos explicatius</h3>
        <p>
          Són vídeos curts (entre 30s i 2m) explicant un tema concret. No estan narrats, tot el contingut va escrit sobre el vídeo en diapositives.
          No obstant, poden incloure intervencions curtes de càrrecs públics. Ací també és important subtítolar tot element auditiu necessari per entendre el vídeo.
        </p>

        <div class="embed-responsive embed-responsive-1by1">
          <iframe
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fcoaliciocompromis%2Fvideos%2F1214794822063603%2F&show_text=0&width=476"
            width="476"
            height="476"
            style="border:none;overflow:hidden;"
            class="embed-responsive-item"
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allowFullScreen="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'page',

  head () {
    return {
      title: `Vídeo - Manual d'estil - Compromís`
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  .embed-responsive {
    max-width: 400px;
    overflow: hidden;
    border-radius: $border-radius;
  }
</style>
