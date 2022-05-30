<template>
  <NuxtLink to="/" :class="$style.link"> <slot /> </NuxtLink>
</template>

<script>
export default {}
</script>

<style lang="scss" module>
.link {
  cursor: pointer;
  color: $N100;
  &:hover {
    color: $links;
  }
  @include bigTablet {
    display: none;
  }
}
</style>