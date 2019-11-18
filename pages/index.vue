<template>
  <div class="template-selector">
    <div class="template-selector-templates">
      <h2 class="template-selector-header">
        Manual d’estil
      </h2>
      <ul>
        <li>
          <nuxt-link to="/" class="template-item">
            <span class="template-item-icon template-item-icon--logo">
              <careta />
            </span>
            <span class="template-item-name">Logo</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class="template-item">
            <span class="template-item-icon template-item-icon--typography">
              <strong>A</strong>a
            </span>
            <span class="template-item-name">Tipografia</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class="template-item">
            <span class="template-item-icon template-item-icon--colors">
              <span class="color orange-1" />
              <span class="color orange-2" />
              <span class="color orange-3" />
              <span class="color gray-1" />
              <span class="color gray-2" />
              <span class="color gray-3" />
            </span>
            <span class="template-item-name">Colors</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class="template-item">
            <span class="template-item-icon template-item-icon--social">
              <fa :icon="['fab', 'facebook-square']" />
              <fa :icon="['fab', 'twitter']" />
              <fa :icon="['fab', 'instagram']" />
              <fa :icon="['fab', 'youtube']" />
              <fa :icon="['fab', 'whatsapp']" />
              <fa :icon="['fab', 'telegram']" />
            </span>
            <span class="template-item-name">Xarxes socials</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class="template-item template-item--xs">
            <span class="template-item-name">Aplicacions</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class="template-item template-item--xs">
            <span class="template-item-name">Fotografia</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class="template-item template-item--xs">
            <span class="template-item-name">Vídeo</span>
          </nuxt-link>
        </li>
      </ul>
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
  @import '../sass/variables';

  .template-selector {
    display: grid;
    grid-template-rows: 1fr auto;
    padding-top: $navbar-height + 2rem;
    position: relative;
    height: 100vh;
    max-width: 70rem;
    margin: 0 auto;

    &-templates {
      h2 {
        color: rgba($gray-900, .25);
        padding: 1rem;
        font-size: 4rem;
        font-weight: bold;
        letter-spacing: -1px;
        line-height: 1;
      }
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
      list-style: none;
      padding: 0;
    }

    .template-item {
      display: block;
      position: relative;
      background: $white;
      margin: 1rem;
      color: $gray-900;
      font-size: 1.5rem;
      font-weight: bold;
      letter-spacing: -1px;
      width: 15rem;
      height: 15rem;
      border-radius: 1rem;
      box-shadow: $default-shadow;
      transition: .2s ease-in-out;

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
        color: $gray-500;
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

            &.orange-1 {
              background: $gradient-start;
            }

            &.orange-2 {
              background: $orange;
            }

            &.orange-3 {
              background: $gradient-end;
            }

            &.gray-1 {
              background: $gray-900;
            }

            &.gray-2 {
              background: $gray-500;
            }

            &.gray-3 {
              background: $gray-200;
            }
          }
        }

        &--social {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;

          svg {
            height: 2.25em;
            width: 2.75rem;
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

  @include media-breakpoint-down(sm) {
    .template-selector {
      h2 {
        font-size: 2.25rem;
        margin-top: 4rem;
        width: 18rem;
      }

      ul {
        justify-content: center;
      }

      .template-item {
        width: 10rem;
        height: 10rem;
        margin: .5rem;
        border-radius: .5rem;

        &-name {
          font-size: 1rem;
          padding: .75rem;
        }
      }
    }
  }
</style>
