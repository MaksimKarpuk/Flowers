<template>
  <div :class="$style.main">
    <Header />
    <Aside :class="$style.aside"/>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/organisms/Header'
import Footer from '~/components/organisms/Footer'
import Aside from '~/components/organisms/Aside'
export default {
  components: {
    Header,
    Footer,
    Aside,
  },
}
</script>

<style lang="scss" module>
.main {
  max-width: 90rem;
  margin: 0 auto;
  position: relative;
  .aside {
    position: absolute;
    z-index: 5;
    top: 0;
    right: 0;
  }
}
</style>
