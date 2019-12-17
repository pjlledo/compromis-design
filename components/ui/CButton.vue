<template>
  <b-button v-bind="$attrs" @click="$emit('click')">
    <span><slot /></span>
  </b-button>
</template>

<script>
export default {
  name: 'CButton'
}
</script>

<style lang="scss" scoped>

</style>
