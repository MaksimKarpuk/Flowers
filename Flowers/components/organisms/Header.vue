<template>
  <header :class="$style.header">
    <div :class="$style.container">
      <Logo />
      <nav :class="$style.links">
        <Link v-for="link in links" :key="link.id" :to="link.to">
          {{ link.text }}
        </Link>
      </nav>
      <Button isSmall> Связаться </Button>
      <Burger/>
    </div>
  </header>
  <!-- <section>
    <div>
      <img src="" alt="">
    </div>
    <div>
      content
    </div>
  </section> -->
</template>

<script>
import content from '~/assets/content.json'
import Button from '~/components/atoms/Button'
import Link from '~/components/atoms/Link'
import Logo from '~/components/atoms/Logo'
import Burger from '~/components/atoms/Burger'
export default {
  components: {
    Button,
    Link,
    Logo,
    Burger
  },
  data() {
    return { links: content.pagesLinks }
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
    }
  }
}
@include custom(1150px) {
  .header {
    .container {
      .links {
        gap: 2rem;
      }
    }
  }
}
</style>



