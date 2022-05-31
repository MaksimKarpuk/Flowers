<template>
  <div>
    <div :class="$style.image">
      <img v-lazy="url" alt=" " />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" module>
.image {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>