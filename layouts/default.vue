<template>
  <div>
    <app-nav nav-label="Manual d'estil" logo-label="Disseny" />
    <nuxt />
    <app-background />
  </div>
</template>

<script>
import AppNav from '@/components/AppNav'
import AppBackground from '@/components/AppBackground'

export default {
  components: {
    AppNav,
    AppBackground
  }
}
</script>

<style lang="scss" scoped>

</style>
