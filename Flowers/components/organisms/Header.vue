<template>
  <header :class="$style.header">
    <div :class="$style.logo"></div>
    <nav :class="$style.links">
      <Link v-for="link in links" :key="link.id" :to="link.to"> {{link.text}} <Link/>
    </nav>
    <Button :class="$style.button" />
  </header>
</template>

<script>
import Button from '~components/atome/Button'
import Link from '~components/atome/Link'
import content from '~assets/content.json'
export default {
  components: {
    Button,
    Link,
  },
  data() {
    return { links: content.pagesLinks, }
  },
}
</script>

<style lang="scss" module>
.header {
  height: 7.25rem;
  background: $header;
  .button {
    padding: 0.44rem 1.06rem;
  }
}
</style>



