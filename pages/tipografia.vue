<template>
  <div>
    <h1>Tipografia</h1>
    <p class="intro">
      En aquesta secció presentem la tipografia que cal emprar en el material de Compromís, Akkurat. És important no usar ninguna tipografia que no siga aquesta
      (excepte en casos on ho indiquem), i usar els dos pesos (regular i negreta) com s'explica a continuació.
    </p>
    <div class="row">
      <div class="col-md-8">
        <div style="font-size: 10rem; font-weight: bold">
          Aa
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <h5>
          Akkurat Bold
        </h5>
        <p>
          Utilitzada per a textos a tamany gran, títols, titulars, encapçalaments i per a destacar alguna cosa.
          No s'ha d'utilitzar mai en textos llargs.
        </p>
      </div>
      <div class="col-md-4 d-flex align-items-end">
        <div class="assets btn-group">
          <a href="#" class="btn btn-lg btn-outline-primary btn-file"><span><fa :icon="['far', 'file']" /> .otf</span></a>
          <a href="#" class="btn btn-lg btn-outline-primary btn-file"><span><fa :icon="['far', 'file']" /> .ttf</span></a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <div style="font-size: 10rem;">
          Aa
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <p>
          Akkurat Regular
        </p>
        <p>
          Utilitzada per a cos de text, documents, i textos en general. S'ha d'evitar usar-la en tamanys de lletra grans.
        </p>
      </div>
      <div class="col-md-4 d-flex align-items-end">
        <div class="assets btn-group">
          <a href="#" class="btn btn-lg btn-outline-primary btn-file"><span><fa :icon="['far', 'file']" /> .otf</span></a>
          <a href="#" class="btn btn-lg btn-outline-primary btn-file"><span><fa :icon="['far', 'file']" /> .ttf</span></a>
        </div>
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
