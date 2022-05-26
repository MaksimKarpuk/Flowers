<template>
  <div :class="$style.main">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/organisms/Header'
import Footer from '~/components/organisms/Footer'
export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="scss" module>
.main {
  max-width: 90rem;
  margin: 0 auto;
}
</style>
