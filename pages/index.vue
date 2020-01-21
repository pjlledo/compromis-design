<template>
  <div class="container home">
    <h2>
      Recursos<br>de marca
    </h2>

    <logo-card />
    <banners-card />
    <div class="row">
      <div class="col-lg-6">
        <typography-card />
      </div>
      <div class="col-lg-6">
        <colors-card />
      </div>
    </div>
  </div>
</template>

<script>
import LogoCard from '@/components/home/LogoCard.vue'
import TypographyCard from '@/components/home/TypographyCard.vue'
import ColorsCard from '@/components/home/ColorsCard.vue'
import BannersCard from '@/components/home/BannersCard'

export default {
  components: {
    LogoCard,
    TypographyCard,
    ColorsCard,
    BannersCard
  }
}
</script>

<style lang="scss" scoped>

</style>
