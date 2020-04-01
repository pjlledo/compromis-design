<template>
  <div class="menu">
    <ul>
      <li>
        <nuxt-link to="/logo" class="template-item">
          <careta logo-style="mono" class="icon-careta" /> <span>Logo</span>
        </nuxt-link>
        <b-nav
          v-if="$route.name === 'logo'"
          v-b-scrollspy="80"
        >
          <b-nav-item v-scroll-to="'#marca'" href="#marca">
            Marca
          </b-nav-item>
          <b-nav-item v-scroll-to="'#proporcions'" href="#proporcions">
            Proporcions
          </b-nav-item>
          <b-nav-item v-scroll-to="'#respecte'" href="#respecte">
            Àrea de respecte
          </b-nav-item>
          <b-nav-item v-scroll-to="'#monocromatiques'" href="#monocromatiques">
            Versions monocromàtiques
          </b-nav-item>
          <b-nav-item v-scroll-to="'#inadequats'" href="#inadequats">
            Usos inadequats
          </b-nav-item>
          <b-nav-item v-scroll-to="'#adaptacions'" href="#adaptacions">
            Adaptacions de la marca
          </b-nav-item>
        </b-nav>
      </li>
      <li>
        <nuxt-link to="/tipografia" class="template-item">
          <fa :icon="['far', 'font-case']" fixed-width /> <span>Tipografia</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/colors" class="template-item">
          <fa :icon="['far', 'palette']" fixed-width /> <span>Colors</span>
        </nuxt-link>
        <b-nav
          v-if="$route.name === 'colors'"
          v-b-scrollspy="80"
        >
          <b-nav-item v-scroll-to="'#us-color'" href="#us-color">
            Ús del color
          </b-nav-item>
          <b-nav-item v-scroll-to="'#mostres-color'" href="#mostres-color">
            Mostres de color
          </b-nav-item>
        </b-nav>
      </li>
      <li>
        <nuxt-link to="/xarxes-socials" class="template-item">
          <fa :icon="['far', 'share-alt']" fixed-width /> <span>Xarxes socials</span>
        </nuxt-link>
        <b-nav
          v-if="$route.name === 'xarxes-socials'"
          v-b-scrollspy="80"
        >
          <b-nav-item v-scroll-to="'#foto-perfil'" href="#foto-perfil">
            Foto de perfil
          </b-nav-item>
          <b-nav-item v-scroll-to="'#capcalera'" href="#capcalera">
            Capçalera
          </b-nav-item>
          <b-nav-item v-scroll-to="'#nom-usuari'" href="#nom-usuari">
            Nom d'usuari
          </b-nav-item>
          <b-nav-item v-scroll-to="'#targes'" href="#targes">
            Targes
          </b-nav-item>
          <b-nav-item v-scroll-to="'#manual-xarxes'" href="#manual-xarxes">
            Manual de xarxes
          </b-nav-item>
        </b-nav>
      </li>
      <li>
        <nuxt-link to="/material-impres" class="template-item template-item--xs">
          <fa :icon="['far', 'print']" fixed-width /> <span>Material imprés</span>
        </nuxt-link>
        <b-nav
          v-if="$route.name === 'material-impres'"
          v-b-scrollspy="80"
        >
          <b-nav-item v-scroll-to="'#carta'" href="#carta">
            Carta
          </b-nav-item>
          <b-nav-item v-scroll-to="'#sobre'" href="#sobre">
            Sobre
          </b-nav-item>
          <b-nav-item v-scroll-to="'#targetes-visita'" href="#targetes-visita">
            Targetes de visita
          </b-nav-item>
          <b-nav-item v-scroll-to="'#carpeta'" href="#carpeta">
            Carpeta
          </b-nav-item>
          <b-nav-item v-scroll-to="'#roll-up'" href="#roll-up">
            Roll-up
          </b-nav-item>
          <b-nav-item v-scroll-to="'#faristols'" href="#faristols">
            Faristols
          </b-nav-item>
          <b-nav-item v-scroll-to="'#rotulacio-seu'" href="#rotulacio-seu">
            Rotulació Seu
          </b-nav-item>
          <b-nav-item v-scroll-to="'#nota-premsa'" href="#nota-premsa">
            Nota de premsa
          </b-nav-item>
          <b-nav-item v-scroll-to="'#segells'" href="#segells">
            Segells
          </b-nav-item>
        </b-nav>
      </li>
      <li>
        <nuxt-link to="/fotografia" class="template-item template-item--xs">
          <fa :icon="['far', 'camera']" fixed-width /> <span>Fotografia</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/video" class="template-item template-item--xs">
          <fa :icon="['far', 'film']" fixed-width /> <span>Vídeo</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/campanyes" class="template-item template-item--xs">
          <fa :icon="['far', 'megaphone']" fixed-width /> <span>Campanyes</span>
        </nuxt-link>
      </li>
    </ul>
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

  .menu {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    a {
      display: flex;
      color: $gray-800;
      padding: .5rem 0;
      font-size: 1.25rem;
      font-weight: bold;
      transition: .3s cubic-bezier(.56,0,.4,1.2);
      align-items: center;

      span {
        transition: border .3s cubic-bezier(.56,0,.4,1.2);
        border-bottom: 2px transparent solid;
      }

      .svg-inline--fa, .icon-careta {
        transition: transform .3s cubic-bezier(.56,0,.4,1.2);
        margin-right: .75rem;
      }

      &.nuxt-link-active {
        position: relative;
        color: $primary;

        &:hover span {
          border-color: $primary;
        }

        .svg-inline--fa, .icon-careta {
         transform: rotate(-10deg);
        }
      }

      &:hover {
        text-decoration: none;

        span {
          border-color: $gray-800;
        }

        .svg-inline--fa, .icon-careta {
         transform: rotate(-10deg);
        }
      }
    }

    .nav {
      padding-left: 2.25rem;
      margin-bottom: 1.5rem;
      flex-direction: column;
      line-height: 1.75;

      a {
        font-size: 1rem;
        padding: 0;
        font-weight: normal;

        &:hover {
          text-decoration: underline;
        }
      }

      .active {
        a {
          font-weight: bold;
        }
      }
    }
  }

  .icon {
    &-careta {
      width: 1.56rem;
      height: 1.25rem;
    }
  }
</style>
