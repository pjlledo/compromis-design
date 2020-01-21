<template>
  <div>
    <h3>Adaptacions</h3>
    <div class="row">
      <div class="col-md-4">
        <nuxt-link to="/xarxes-socials" class="home-card">
          <h4><fa :icon="['far', 'share-alt']" fixed-width /> Xarxes socials</h4>
        </nuxt-link>
      </div>
      <div class="col-md-4">
        <nuxt-link to="/material-impres" class="home-card">
          <h4><fa :icon="['far', 'print']" fixed-width /> Material imprès</h4>
        </nuxt-link>
      </div>
      <div class="col-md-4">
        <nuxt-link to="/fotografia" class="home-card">
          <h4><fa :icon="['far', 'camera']" fixed-width /> Fotografia</h4>
        </nuxt-link>
      </div>
      <div class="col-md-4">
        <nuxt-link to="/video" class="home-card">
          <h4><fa :icon="['far', 'film']" fixed-width /> Vídeo</h4>
        </nuxt-link>
      </div>
      <div class="col-md-4">
        <nuxt-link to="/campanyes" class="home-card">
          <h4><fa :icon="['far', 'megaphone']" fixed-width /> Campanyes</h4>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
