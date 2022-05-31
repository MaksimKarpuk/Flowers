<template>
  <NuxtLink v-if="to" :to="to" :class="$style.link"> <slot /> </NuxtLink>
  <a v-else-if="href" :href="href"> <slot/> </a>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" module>
.link {
  cursor: pointer;
  color: $N100;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: $links;
  }
}
</style>