<template>
  <div>
    <Banner />
    <Actual />
    <Insta/>
    <Telegram/>
    <Map/>
  </div>
</template>

<script>
import Banner from '~/components/organisms/Banner';
import Actual from '~/components/organisms/Actual';
import Insta from '~/components/organisms/Insta';
import Telegram from '~/components/organisms/Telegram';
import Map from '~/components/organisms/Map';
export default {
  components: {
    Banner,
    Actual,
    Insta,
    Telegram,
    Map,
  },
}
</script>

<style lang="scss" module>
</style>
