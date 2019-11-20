<template>
  <div>
    <h1>Logo</h1>
    <p class="intro">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <h2>Subsecció</h2>
    <div class="row">
      <div class="col-md-8">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
      </div>
      <div class="col-md-4">
        <a href="#" class="btn btn-lg btn-primary btn-block"><fa :icon="['far', 'arrow-circle-down']" /> Logo <span class="format">SVG</span></a>
        <a href="#" class="btn btn-lg btn-outline-primary btn-block"><span><fa :icon="['far', 'arrow-circle-down']" /> Logo <span class="format">SVG</span></span></a>
        <a href="#" class="btn btn-lg btn-light btn-block"><fa :icon="['far', 'arrow-circle-down']" /> Logo <span class="format">SVG</span></a>
        <a href="#" class="btn btn-lg btn-outline-light btn-block"><fa :icon="['far', 'arrow-circle-down']" /> Logo <span class="format">SVG</span></a>
        <a href="#" class="btn btn-lg btn-dark btn-block"><fa :icon="['far', 'arrow-circle-down']" /> Logo <span class="format">SVG</span></a>
        <a href="#" class="btn btn-lg btn-outline-dark btn-block"><fa :icon="['far', 'arrow-circle-down']" /> Logo <span class="format">SVG</span></a>
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
