<template>
  <div :class="$style.content" v-if="id === 1">
    <div :class="$style.border">
      <img v-lazy="url" alt=" " :class="$style.image" />
    </div>
    <div :class="$style.info">
      <div :class="$style.title">{{ fullName }}</div>
      <div :class="$style.text">{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 1,
    },
    url: {
      type: String,
      default: '',
    },
    fullName: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" module>
.content {
  display: flex;
  gap: 7rem;
  .border {
    border: 0.0625rem solid $N100;
    width: 24.3rem;
    height: 28.3rem;
    display: flex;
    .image {
      max-width: 24.75rem;
      height: 24.75rem;
      margin: 1.5rem 0 0 2rem;
    }
  }
  .info {
    color: $N100;
    align-self: center;
    max-width: 25rem;
    .title {
      @include H200;
      margin: 0 0 1rem 0;
    }
    .text {
      @include H100; 
    }
  }
}
</style>