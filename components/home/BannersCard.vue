<template>
  <div>
    <h3>
      Targes
    </h3>
    <div class="template-selector">
      <div class="template-selector-templates">
        <ul>
          <li>
            <a href="https://targes.compromis.net/#/headline" class="template-item">
              <span class="template-item-icon template-item-icon--logo">
                <careta />
              </span>
              <span class="template-item-name">Titular</span>
            </a>
          </li>
          <li>
            <a href="https://targes.compromis.net/#/quote" class="template-item">
              <span class="template-item-icon template-item-icon--typography">
                <strong>A</strong>a
              </span>
              <span class="template-item-name">Cita</span>
            </a>
          </li>
          <li>
            <a href="https://targes.compromis.net/#/text" class="template-item">
              <span class="template-item-name">Text Lliure</span>
            </a>
          </li>
          <li>
            <a href="https://targes.compromis.net/#/event" class="template-item">
              <span class="template-item-name">Acte</span>
            </a>
          </li>
        </ul>
        <a href="https://targes.compromis.net" class="apple-link">Totes les Targes</a>
      </div>
    </div>
  </div>
</template>

<script>
import Careta from '@/components/logos/Careta'

export default {
  components: {
    Careta
  }
}
</script>

<style lang="scss" scoped>
  @import '../../sass/variables';

  .apple-link {
    position: relative;
    font-size: 1.2rem;
    font-weight: bold;
    color: gray-900;

    &:hover {
      color: $primary;
      text-decoration: none;
      border-bottom: 2px solid $primary;
    }

    &::after {
      content: ' >';
    }
  }

  .template-selector {
    display: grid;
    position: relative;
    margin: 0 auto;

    &-templates {
      h2 {
        color: rgba($gray-900, .25);
        padding: 1rem;
        font-size: 4rem;
        font-weight: bold;
        letter-spacing: -1px;
        line-height: 1;
        margin-top: 5rem;
      }
    }

    ul {
      display: grid;
      grid-template-columns: repeat(4, minmax(10rem, 1fr));
      grid-gap: 2rem;
      margin: 0 auto;
      list-style: none;
      padding: 0;
    }

    .template-item {
      width: 100%;
      display: block;
      position: relative;
      background: $white;
      color: $gray-900;
      font-size: 1.5rem;
      font-weight: bold;
      letter-spacing: -1px;
      height: 100%;
      border-radius: 1rem;
      box-shadow: $default-shadow;
      transition: .2s ease-in-out;

      &::after {
        content:'';
        display: block;
        padding-bottom: 100%;
      }

      &:hover {
        box-shadow: $raised-shadow;
        transform: rotate($rotation) scale(1.05);

        .template-item-name {
          background: linear-gradient(45deg, $gradient-start, $gradient-end);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      &:active {
        transform: rotate(0) scale(.95);
        opacity: .75;
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

      &-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -4rem;
        margin-left: -5rem;
        color: $gray-400;
        width: 10rem;
        height: 6rem;

        &--logo {
          svg {
            height: 5rem;
            width: 5rem;
          }
        }

        &--typography {
          font-weight: normal;
          font-size: 6rem;

          strong {
            color: $gray-800;
          }
        }

        &--colors {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;

          .color {
            background: $orange;
            display: block;
            height: 3rem;
            width: 3rem;
            border-radius: 50%;
            flex-shrink: 0;
            margin-bottom: .5rem;
          }
        }
      }

      &-name {
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 1rem;
      }

      &-label {
        background: $blue;
        padding: .25rem .5rem;
        border-radius: .25rem;
        color: $white;
        font-size: 1rem;
        position: absolute;
        right: 1rem;
        top: -.85rem;
        transition: .25s ease-in-out;
      }

      &:hover {
        .template-item-label {
          background: $orange;
        }
      }
    }
  }

  @include media-breakpoint-down(md) {
    .template-selector {
      ul {
        grid-gap: 1rem;
      }
    }
  }

  @include media-breakpoint-down(sm) {
    .template-selector {
      h2 {
        font-size: 2.25rem;
        margin-top: 4rem;

      }

      ul {
        grid-template-columns: 1fr 1fr;
      }

      .template-item {
        border-radius: .5rem;

        &-name {
          font-size: 1rem;
          padding: .75rem;
        }

        &-icon {
          transform: scale(.75);
        }

        &--xs {
          height: 5rem;
        }
      }
    }
  }
</style>
