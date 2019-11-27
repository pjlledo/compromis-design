<template>
  <div class="color">
    <button v-clipboard:copy="hex" v-clipboard:success="onCopy" @mouseleave="onLeave" :class="`color-swatch color-swatch-${name}`" href="#">
      <span :class="{'color-swatch-text': true, 'color-swatch-text-dark': dark }">{{ text }}</span>
    </button>
    <h4>{{ title }}</h4>
    <p>{{ useCase }}</p>
    <div class="color-info">
      <p>
        <span>RGB</span> {{ rgb }}
      </p>
      <p>
        <span>HEX</span> {{ hex }}
      </p>
      <p>
        <span>CMYK</span> {{ cmyk }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorSwatch',

  props: {
    name: {
      type: String,
      default: 'orange'
    },
    title: {
      type: String,
      default: ''
    },
    rgb: {
      type: String,
      default: ''
    },
    hex: {
      type: String,
      default: ''
    },
    cmyk: {
      type: String,
      default: ''
    },
    useCase: {
      type: String,
      default: ''
    },
    dark: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      text: 'Copiar HEX'
    }
  },

  methods: {
    onCopy () {
      this.text = 'Copiat!'
    },
    onLeave () {
      setTimeout(() => { this.text = 'Copiar HEX' }, 300)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../sass/variables';

.color {
  display: flex;
  flex-direction: column;

  h4 {
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 1.15rem;
  }

  &-info {
    border: 1px solid $gray-400;
    color: $gray-600;
    padding: .75rem 1rem;
    border-radius: $border-radius;

    p {
      margin-bottom: 0;
      font-size: 1rem;
    }

    span {
      font-weight: bold;
      display: inline-block;
      line-height: 1;
      width: 60px;
    }
  }

  &-swatch {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 1.5rem;
    color: $white;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: -1px;
    width: 15rem;
    height: 15rem;
    border-width: 0px;
    border-radius: 1rem;
    box-shadow: $default-shadow;
    transition: .2s ease-in-out;

    &-text {
      opacity: 0;
      transition: .2s ease-in-out;
    }

    &:hover {
      box-shadow: $raised-shadow;
      transform: rotate($rotation) scale(1.05);
      text-decoration: none;

      .color-swatch-text {
        opacity: 1;
        color: $white;

        &-dark {
          color: $gray-darkest;
        }
      }
    }

    &:active {
      transform: rotate(0) scale(.95);
      opacity: .75;
    }

    &-orange {
      background: $primary;
    }

    &-white {
      background: $white;
      border: .75px solid $gray-200;
    }

    &-gradient {
      background: $gradient;
    }

    &-gray-dark {
      background: $gray-darkest;
    }

    &-gray-med {
      background: $gray-600;
    }

    &-gray-light {
      background: $gray-100;
    }

    &--xs {
      height: 4.5rem;

      &:hover {
        transform:  translateY(-.5rem) rotate(0) scale(1);
      }

      &:active {
        transform:  translateY(.25rem) rotate(0) scale(1);
      }
    }
  }
}
</style>
