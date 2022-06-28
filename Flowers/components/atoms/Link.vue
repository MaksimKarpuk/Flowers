<template>
  <NuxtLink v-if="to" :to="to" :class="$style.link"> <slot /> </NuxtLink>
  <a v-else-if="href" :href="href" :target="`_${target}`"> <slot /> </a>
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
    target: {
      type: String,
      default: 'self',
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