<template>
  <div :class="$style.map">
    <div :class="$style.container">
      <Title :title="title" :icon="icon" isLeft :class="$style.title" />
    </div>
  </div>
</template>

<script>
import Title from '~/components/molecules/Title'
export default {
  data() {
    return {
      title: 'Контакты',
      icon: 'letterK',
    }
  },
  components: {
    Title,
  },
}
</script>

<style lang="scss" module>
.map {
  padding: 0 0 10rem 0;
  background: $header;
  .container {
    @include container;
    padding-top: 12.5rem;
    .title {
      margin: 0 0 4rem 0;
    }
  }
}
</style>