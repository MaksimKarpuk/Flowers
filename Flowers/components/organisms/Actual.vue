<template>
  <div :class="$style.actual">
    <div :class="$style.container">
      <Title :title="title" :icon="icon" />
      <Button> Посмотреть 3D-тур </Button>
      <Cards />
      <Button> Показать все </Button>
    </div>
  </div>
</template>

<script>
import Title from '~/components/molecules/Title'
import Button from '~/components/atoms/Button'
import Cards from '~/components/molecules/Cards'
export default {
  data() {
    return { 
      title: "Актуальная информация",
      icon: "leterA"
     }
  },
  components: {
    Title,
    Button,
    Cards,
  },
}
</script>
<style lang="scss" module>
.actual {
  background: $header;
  .container {
    @include container;
  }
}
</style>
