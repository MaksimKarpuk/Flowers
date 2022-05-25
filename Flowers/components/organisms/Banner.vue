<template>
  <div :class="$style.container">
    <div :class="$style.image">
      <img v-lazy="'/img/banner/header.webp'" alt=" " />
    </div>
    <div :class="$style.content">
      <span :class="$style.subtitle">Закажи у нас букет или создай свой</span>
      <span :class="$style.title">Наши букеты не завянут на второй день</span>
      <Button>Заказать букет</Button>
      <Button>Создать букет</Button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" module>
.container {
  @include container;
  position: relative;
  z-index: 0;
  .image {
    position: absolute;
    z-index: 1;
    img {
      max-width: 100%;
      height: 100%;
    }
  }
  .content{
    .subtitle{
      @include H300;
      color: $N200;
    }
    .title{
      @include H800;
      color: $N200;
    }
  }
}
</style>