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
    width: 2.8rem;
    height: 2.8rem;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>