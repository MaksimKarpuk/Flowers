<template>
  <div :class="$style.actual">
    <div :class="$style.container">
      <Title :title="title" :icon="icon" isLeft :class="$style.title" />
      <Button :class="$style.button1"> Посмотреть 3D-тур </Button>
      <Cards :class="$style.cards" />
      <Button :class="$style.button2"> Показать все </Button>
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
      title: 'Актуальная информация',
      icon: 'letterA',
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
  margin: -0.5rem 0 0 0;
  background: $header;
  .container {
    @include container;
    padding-top: 5rem;
    .title {
      margin: 0 0 4rem 0;

    }
    .button1 {
      padding: 1.5rem 2.75rem;
      margin: 0 0 4rem 0;
      @include custom(375px) {
        & {
          @include H100;
        }
      }
    }
    .cards {
      display: flex;
      flex: 0 0 33.333%;
      flex-wrap: wrap;
      gap: 4rem;
      margin: 0 0 5.5rem 0;
      @include custom(1240px) {
        & {
          gap: 3rem;
        }
      }
      @include custom(1110px) {
        & {
          gap: 1.5rem;
        }
      }
      @include bigTablet {
        & {
          gap: 1.5rem;
        }
      }
      @include custom(864px) {
        & {
          gap: 1rem;
        }
      }
      @include custom(752px) {
        & {
          gap: 1rem;
        }
      }
      @include custom(435px) {
        & {
          gap: 0.7rem;
        }
      }
      @include custom(365px) {
        & {
          gap: 0.5rem;
        }
      }
    }
    .button2 {
      position: relative;
      left: 50%;
      transform: translate(-50%, 0);
      margin: 0 0 10.5rem 0;
       @include custom(360px) {
        & {
          @include H100;
        }
      }
    }
  }
}
</style>
