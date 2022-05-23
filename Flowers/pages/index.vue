<template>
  <img :class="$style.image" v-lazy="'/img/header.png'" alt="" />
</template>

<script>
// import Button from '~/components/atoms/Button'
// import Link from '~/components/atoms/Link'
export default {
  // components: {
  //   Button,
  //   Link,
  // },
}
</script>

<style lang="scss" module>
.image {
  width: 40rem;
}
</style>
