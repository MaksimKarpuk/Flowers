<template>
  <div :class="$style.content">
    <div :class="$style.border">
      <img v-lazy="url" alt=" " :class="$style.image" />
    </div>
    <div :class="$style.info">
      <div :class="$style.title">Наталья Пинчук, Брест</div>
      <div :class="$style.text">
        Один из лучших цветочных салонов. Всегда свежие цветы, интересные живые
        растения в кадках и горшках, большой выбор сувенирной продукции и
        сопутствующих товаров. Красивый интерьер, профессиональные флористы,
        хорошее обслуживание.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" module>
.content {
  display: flex;
  gap: 8rem;
  .border {
    border: 0.0625rem solid $N100;
    width: 24.3rem;
    height: 28.3rem;
    display: flex;
    .image {
      max-width: 24.75rem;
      height: 24.75rem;
      margin: 1.5rem 0 0 2rem;
    }
  }
  .info{
    color: $N100;
    align-self: center;
    .title{
        @include H200;
        margin: 0 0 1rem 0;
    }
    .text{
        @include H100;
    }
  }
}
</style>