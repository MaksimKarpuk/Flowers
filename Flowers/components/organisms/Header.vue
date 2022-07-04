<template>
  <header :class="$style.header">
    <div :class="$style.container">
      <Logo />
      <nav :class="$style.links">
        <Link v-for="link in links" :key="link.id"  isSmooth :href="link.href">
          {{ link.text }}
        </Link>
      </nav>
      <Button :class="$style.button" isSmall> Связаться </Button>
      <Burger
        :class="$style.burger"
        @click="$store.commit('aside/toggleAside'),scroll()"
      />
    </div>
  </header>
</template>

<script>
import content from '~/assets/content.json'
import Button from '~/components/atoms/Button'
import Link from '~/components/atoms/Link'
import Logo from '~/components/atoms/Logo'
import Burger from '~/assets/icons/menu.svg?inline'
export default {
  components: {
    Button,
    Link,
    Logo,
    Burger,
  },
  data() {
    return { links: content.pagesLinks }
  },
   methods: {
    scroll() {
      document.body.classList.toggle('scroll')
    },
  },
}
</script>

<style lang="scss" module>
.header {
  background: $header;
  .container {
    @include container;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7.25rem;
    .links {
      display: flex;
      gap: 3.5rem;
      @include custom(1250px) {
        gap: 3rem;
      }
      @include custom(1220px) {
        gap: 2.5rem;
      }
      @include custom(1190px) {
        gap: 2rem;
      }
    }
    .burger {
      display: none;
      @include mobile {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
    @include custom(1024px) {
      .links,
      .button {
        display: none;
      }
      .burger {
        display: block;
      }
    }
  }
}
</style>



