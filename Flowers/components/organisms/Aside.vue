<template>
  <aside :class="[$style.aside, { [$style.active]: isOpen }]">
    <Arrow :class="$style.arrow" />
    <nav :class="$style.links">
      <Link v-for="link in links" :key="link.id" :to="link.to">
        {{ link.text }}
      </Link>
    </nav>
    <Button :class="$style.button" isAside> Связаться </Button>
  </aside>
</template>

<script>
import content from '~/assets/content.json'
import Link from '~/components/atoms/Link'
import Button from '~/components/atoms/Button'
import Arrow from '~/components/atoms/Arrow'
export default {
  computed: {
    isOpen() {
      return this.$store.state.aside.isOpen
    },
  },
  components: {
    Link,
    Button,
    Arrow,
  },
  data() {
    return { links: content.pagesLinks }
  },
}
</script>

<style lang="scss" module>
.aside {
  width: 0rem;
  height: 100vh;
  background: $header;
  .active {
    width: 21rem;
    transition: all 1s ease-out;
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