<template>
  <div>
    <app-nav nav-label="Manual d'estil" logo-label="Disseny" />
    <nuxt />
    <app-footer />
    <app-background />
  </div>
</template>

<script>
import AppNav from '@/components/AppNav'
import AppBackground from '@/components/AppBackground'
import AppFooter from '@/components/AppFooter'

export default {
  components: {
    AppNav,
    AppBackground,
    AppFooter
  }
}
</script>

<style lang="scss" scoped>

</style>
