<template>
  <div class="container home">
    <h2>
      Recursos<br>de marca
    </h2>

    <p class="intro">
      Benvingut al portal de disseny de Compromís. Ací trobaràs
      la nostra <nuxt-link to="/logo">
        guia d'estil
      </nuxt-link> per a saber
      com utilitzar la marca del partit en distints àmbits.
    </p>

    <logo-card :municipalities="municipalities" />
    <banners-card />

    <div class="row">
      <div class="col-lg-6">
        <typography-card />
      </div>
      <div class="col-lg-6">
        <colors-card />
      </div>
    </div>

    <other-card />
  </div>
</template>

<script>
import LogoCard from '@/components/home/LogoCard.vue'
import TypographyCard from '@/components/home/TypographyCard.vue'
import ColorsCard from '@/components/home/ColorsCard.vue'
import OtherCard from '@/components/home/OtherCard.vue'
import BannersCard from '@/components/home/BannersCard'

export default {
  components: {
    LogoCard,
    TypographyCard,
    ColorsCard,
    OtherCard,
    BannersCard
  },

  async asyncData ({ $axios }) {
    const municipalities = await $axios.$get('https://compromis.net/espai/targes/municipalities')
    return { municipalities }
  }
}
</script>

<style lang="scss" scoped>
@import "../sass/variables";
.intro {
  margin-top: 2rem;
}
</style>
