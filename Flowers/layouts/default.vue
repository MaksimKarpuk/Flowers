<template>
  <div :class="$style.main">
    <Header />
    <Banner/>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/organisms/Header'
import Footer from '~/components/organisms/Footer'
import Banner from '~/components/organisms/Banner'
export default {
  components: {
    Header,
    Footer,
    Banner,
  },
}
</script>

<style lang="scss" module>
.main {
  max-width: 90rem;
  margin: 0 auto;
}
</style>
