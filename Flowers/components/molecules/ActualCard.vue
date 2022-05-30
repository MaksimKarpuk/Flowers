<template>
  <div>
    <div :class="$style.image">
      <img v-lazy="url" alt=" " />
    </div>
    <div :class="$style.text">
      <div :class="$style.name">{{ name }}</div>
      <div>{{ price }}</div>
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
    name: {
      type: String,
      default: '',
    },
    price: {
      type: String,
      default: '',
    },
  },
}
</script>
 <style lang="scss" module>
.image {
  margin: 0 0 0.5rem 0;
  img {
    width: 100%;
    height: 100%;
  }
}
.text {
  .name {
    margin: 0 0 0.5rem 0;
  }
  @include custom(1024px) {
    @include H200;
  }
}
</style>
