<template>
  <aside
    :class="[$style.aside, { [$style.active]: isOpen }]"
    @click="$store.commit('aside/toggleAside'), scroll()"
  >
    <div :class="$style.right" @click.stop>
      <div @click="$store.commit('aside/toggleAside'), scroll()" :class="$style.header">
        <div><Logo /></div>
        <Arrow :class="$style.arrow" />
      </div>
      <nav
        :class="$style.links"
        @click="$store.commit('aside/toggleAside'), scroll()"
      >
        <Link v-for="link in links" :key="link.id" isSmooth :href="link.href">
          {{ link.text }}
        </Link>
      </nav>
      <div @click="$store.commit('aside/toggleAside'), scroll()">
        <Button :class="$style.button" isAside> Связаться </Button>
      </div>
    </div>
  </aside>
</template>

<script>
import content from '~/assets/content.json'
import Link from '~/components/atoms/Link'
import Button from '~/components/atoms/Button'
import Arrow from '~/assets/icons/Arrow.svg?inline'
import Logo from '~/components/atoms/Logo'
export default {
  components: {
    Link,
    Button,
    Arrow,
    Logo,
  },
  data() {
    return { links: content.pagesLinks }
  },
  methods: {
    scroll() {
      document.body.classList.toggle('scroll')
    },
  },
  computed: {
    isOpen() {
      return this.$store.state.aside.isOpen
    },
  },
}
</script>

<style lang="scss" module>
.aside {
  width: 0;
  height: 100vh;
  transition: all 0.3s ease-in-out;
  background: $aside;
  backdrop-filter: blur(0.5rem);
  position: fixed;
  top: 0;
  right: 0;
  &.active {
    width: 100%;
  }
  .right {
    background: $header;
    max-width: 21rem;
    width: 100%;
    height: 100%;
    white-space: nowrap;
    position: absolute;
    top: 0;
    right: 0;
    .header{
      display: flex;
      gap: 4rem;
      margin: 2rem 1rem 5rem 2.7rem;
      
    }
  }
  .links {
    display: flex;
    gap: 2.5rem;
    flex-direction: column;
    justify-content: center;
    @include H200;
    margin: 0 0 3rem 2.5rem;
  }
  .button {
    margin: 0 0 0 2.5rem;
  }
}
</style>