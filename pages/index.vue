<template>
  <div class="container home">
    <!-- eslint-disable vue/singleline-html-element-content-newline -->
    <h2>
      Recursos<br>de marca
    </h2>

    <p class="intro">
      A Compromís creiem en la política de baix cap a dalt. Per això, fem accesible
      la nostra <nuxt-link to="/logo">guia d'estil</nuxt-link>, amb tot el material gràfic,
      instruccions per a la seua correcta aplicació i ferramentes per facilitar la
      creació de material.
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

    <div class="cardless-text">
      <p>No trobes el que busques? Busca al repositori de <a href="https://onedrive.live.com/?id=49217E5E07CD52BD%21185814&cid=49217E5E07CD52BD" target="_blank" rel="noopener noreferrer">material antic</a>.</p>
    </div>
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
