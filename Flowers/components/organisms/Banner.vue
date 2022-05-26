<template>
  <div :class="$style.container">
    <div :class="$style.image">
      <img v-lazy="'/img/banner/header.webp'" alt=" " />
    </div>
    <div :class="$style.content">
      <div :class="$style.subtitle">Закажи у нас букет или создай свой</div>
      <div :class="$style.title">
        Наши букеты не <br />
        завянут на второй день
      </div>
      <div :class="$style.button">
        <Button>Заказать букет</Button>
        <Button>Создать букет</Button>
      </div>
    </div>
    <div :class="$style.footer"></div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button'
export default {
  components: {
    Button,
  }
}
</script>

<style lang="scss" module>
.container {
  position: relative;
  .image {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .content {
    position: absolute;
    z-index: 1;
    top: 22rem;
    left: 7.5rem;
    // @include container;
    .subtitle {
      @include H300;
      color: $N200;
      margin: 0 0 1.5rem 0;
    }
    .title {
      @include H800;
      color: $N200;
      margin: 0 0 4rem 0;
    }
    .button {
      display: flex;
      gap: 1.5rem;
    }
  }
  .footer {
    width: 100%;
    height: 14.5rem;
    position: absolute;
    z-index: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(36, 24, 20, 0.06) 0%, $header 100%);
  }
}
</style>