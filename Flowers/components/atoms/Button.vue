<template>
  <button :class="$style.button"> <slot/> </button>
</template>

<script>
export default {
    props: {
      isOrange: Boolean,
    }
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
}
.button:hover {
  background: $button;
}
</style>