<template>
  <div>
    <Banner />
    <Actual />
    <Insta/>
    <Map/>
  </div>
</template>

<script>
import Banner from '~/components/organisms/Banner';
import Actual from '~/components/organisms/Actual';
import Insta from '~/components/organisms/Insta';
import Map from '~/components/organisms/Map';
export default {
  components: {
    Banner,
    Actual,
    Insta,
    Map,
  },
}
</script>

<style lang="scss" module>
</style>
