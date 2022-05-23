<template>
  <a :class="$style.link">Link</a>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" module>
.link {
  @include H100();
  cursor: pointer;
}

</style>