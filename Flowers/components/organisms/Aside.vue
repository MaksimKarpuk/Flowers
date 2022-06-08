<template>
  <aside
    :class="[$style.aside, { [$style.active]: isOpen }]"
    @click="$store.commit('aside/openAside')"
  >
    <div :class="$style.right" @click.stop>
      <div @click="$store.commit('aside/openAside'),scroll">
        <Arrow :class="$style.arrow" />
      </div>
      <nav :class="$style.links" @click="$store.commit('aside/openAside')">
        <Link v-for="link in links" :key="link.id" :to="link.to">
          {{ link.text }}
        </Link>
      </nav>
      <div @click="$store.commit('aside/openAside')">
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
export default {
  components: {
    Link,
    Button,
    Arrow,
  },
  data() {
    return { links: content.pagesLinks }
  },
  methods: {
    scroll() {
      document.body.classList.toggle('.scroll')
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
  width: 0rem;
  height: 100vh;
  transition: all 0.3s ease-in-out;

  background: rgba(255, 255, 255, 0.5);
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
  }
  .arrow {
    margin: 1.5rem 0 4rem 16rem;
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