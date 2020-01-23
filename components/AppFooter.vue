<template>
  <div :class="{'container': !inPage, 'in-page': inPage}">
    <footer>
      <p>Si tens qualsevol dubte o suggeriment, pots contactar-nos en <a href="mailto:disseny@compromis.net">disseny@compromis.net</a></p>
      <p><strong>Manual d'Estil de Compromís</strong>. Darrera actualització: 21 de gener de 2020.</p>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    inPage: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import '../sass/variables';
.container {
  max-width: 1200px;
}

footer {
  background: rgba($body-bg, .75);
  backdrop-filter: blur(4px);
  padding: 2rem;
  border-radius: $border-radius;
  color: $gray-600;
  margin-bottom: 2rem;
  margin-top: 10rem;

  p {
    margin-bottom: .5rem;
  }

  p:last-child {
    margin-bottom: 0;
  }
}

.in-page {
  max-width: 100%;

  footer {
    position: relative;
    background: $white;
    margin-top: 4rem;
    padding-left: 4rem;
    padding-right: 4rem;

    p {
      font-size: 1rem;
    }

    &::before {
      content: '';
      position: absolute;
      width: 4rem;
      height: 2px;
      background: $gray-400;
      top: .5rem;
    }
  }
}

@include media-breakpoint-down(lg) {
  .in-page {
    footer {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
}

@include media-breakpoint-down(md) {
  .in-page {
    footer {
      padding-left: 0;
      padding-right: 0;
    }
  }
}
</style>
