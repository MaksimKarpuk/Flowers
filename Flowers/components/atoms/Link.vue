<template>
  <NuxtLink v-if="to" :class="$style.link"> <slot /> </NuxtLink>
  <a v-smooth-scroll="{ offset: -64 }" v-else-if="isSmooth" :href="to"
    ><slot
  /></a>
  <a v-else :href="href" :target="`_${target}`"> <slot /> </a>
</template>

<script>
export default {
  props: {
    isSmooth: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: "",
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