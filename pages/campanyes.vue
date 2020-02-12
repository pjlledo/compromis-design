<template>
  <div>
    <h1>Campanyes</h1>
    <p class="intro">
      A aquesta secció podeu descarregar tot el material relacionat amb les diferents campanyes puntuals.
    </p>
    <p>
      <c-button variant="outline-primary" size="lg" href="https://onedrive.live.com/?id=49217E5E07CD52BD%211527&cid=49217E5E07CD52BD" target="_blank" rel="noopener noreferrer">
        <fa :icon="['far', 'megaphone']" /> Repositori de campanyes
      </c-button>
      <small class="text-muted ml-2"><fa :icon="['far', 'lock-alt']" /></small>
    </p>
  </div>
</template>

<script>

export default {
  layout: 'page',

  head () {
    return {
      title: `Campanyes - Manual d'estil - Compromís`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
