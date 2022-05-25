<template>
  <button :class="[$style.button, {[$style.small]:isSmall}]"><slot /></button>
</template>

<script>
export default {
  props: {
    isOrange: Boolean,
    isSmall: Boolean,
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
  &:hover {
    background: $button;
  }
  &.small {
    padding: 0.5rem 1rem;
    @include H100;
    color: $N100;
  }
}
@include bigTablet {
  .button {
    display: none;
  }
}
</style>