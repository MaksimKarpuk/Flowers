<template>
  <div>
    <Banner />
    <Actual />
    <Insta/>
  </div>
</template>

<script>
import Banner from '~/components/organisms/Banner';
import Actual from '~/components/organisms/Actual';
import Insta from '~/components/organisms/Insta';
export default {
  components: {
    Banner,
    Actual,
    Insta,
  },
}
</script>

<style lang="scss" module>
</style>
