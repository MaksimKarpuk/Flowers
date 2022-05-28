<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <div :class="$style.subtitle">Закажи у нас букет или создай свой</div>
      <div :class="$style.title">
        Наши букеты не <br />
        завянут на второй день
      </div>
      <div :class="$style.button">
        <Button :class="$style.button1" isOrange>Заказать букет</Button>
        <Button :class="$style.button2">Создать букет</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button'
export default {
  components: {
    Button,
  },
}
</script>

<style lang="scss" module>
.container {
  background-image: url('/img/banner/1.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .content {
    @include container;
    padding-top: 22rem;
    padding-bottom: 11rem;
    @include tablet {
      padding-top: 28.7rem;
      padding-bottom: 10rem;
    }
    @include mobile {
      padding-top: 12.75rem;
      padding-bottom: 2rem;
    }
    .subtitle {
      @include H300;
      color: $N200;
      margin: 0 0 1.5rem 0;
      @include bigTablet {
        & {
          @include H300;
        }
      }
      @include tablet {
        & {
          @include H200;
          margin: 0 0 1rem 0;
        }
      }
      @include mobile {
        & {
          @include H90;
          margin: 0 0 0.5rem 0;
        }
      }
    }
    .title {
      @include H800;
      color: $N200;
      margin: 0 0 4rem 0;
      @include bigTablet {
        & {
          @include H600;
        }
      }
      @include tablet {
        & {
          @include H500;
          margin: 0 0 2.5rem 0;
        }
      }
      @include custom(525px) {
        & {
          @include H400;
        }
      }
      @include mobile {
        & {
          @include H80;
          margin: 0 0 1.5rem 0;
        }
      }
    }
    .button {
      display: flex;
      gap: 1.5rem;
      @include mobile {
        & .button1 {
          @include H100;
          padding: 0.75rem 2.75rem;
        }
        & .button2 {
          @include H100;
          padding: 1rem 3rem;
        }
      }
      @include custom(815px) {
        & {
          display: block;
          text-align: center;
        }
        & .button1 {
          margin: 0 0 1.2rem 0;
        }
      }
    }
  }
}
</style>