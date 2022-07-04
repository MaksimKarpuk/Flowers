<template>
  <NuxtLink v-if="to" :to="to" :class="$style.link"> <slot /> </NuxtLink>
  <a
    v-else-if="isSmooth"
    v-smooth-scroll="{ offset: -64 }"
    :href="href"
    :class="$style.link"
    ><slot
  /></a>
  <a v-else :href="href" :target="`_${target}`" :class="$style.link">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    isSmooth: {
      type: Boolean,
      default: true,
    },
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