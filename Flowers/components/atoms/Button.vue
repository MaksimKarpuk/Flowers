<template>
  <button
    :class="[
      $style.button,
      { [$style.small]: isSmall, [$style.aside]: isAside, [$style.orange]: isOrange },
    ]"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    isOrange: {
      type: Boolean,
      default: false,
    },
    isSmall: {
      type: Boolean,
      default: false,
    },
    isAside: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" module>
.button {
  padding: 1.5rem 4.5rem;
  border: 0.0625rem solid $N100;
  border-radius: 3rem;
  background: none;
  @include H200;
  color: $N100;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: $button;
  }
  &.small {
    padding: 0.5rem 1rem;
    @include H100;
    color: $N100;
  }
  &.aside {
    padding: 0.75rem 2rem;
    @include H200;
    color: $N100;
  }
  &.orange {
    background: $button;
    border: 0.0625rem solid transparent;
    &:hover {
      background: none;
      border: 0.0625rem solid $N100;
    }
  }
}
</style>