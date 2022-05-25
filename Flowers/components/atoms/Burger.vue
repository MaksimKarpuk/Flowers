<template>
  <burger :class="$style.burger" />
</template>

<script>
import burger from '~/assets/icons/Menu.svg?inline'
export default {
  components: {
    burger,
  },
}
</script>

<style lang="scss" module>
.burger {
    display: none;
}
@include bigTablet {
  .burger {
    display: block;
  }
}
@include mobile {
  .burger {
   width: 3rem;
   height: 3rem;
  }
}
@include custom(360px) {
  .burger {
   width: 2.5rem;
   height: 2.5rem;
  }
}
</style>