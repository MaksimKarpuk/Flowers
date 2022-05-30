<template>
  <div :class="$style.actual">
    <div :class="$style.container">
      <Title :title="title" :icon="icon" isLeft :class="$style.title" />
      <Button :class="$style.button1"> Посмотреть 3D-тур </Button>
      <div :class="$style.cards">
        <ActualCard
          v-for="card in cards"
          :key="card.id"
          :url="card.url"
          :name="card.name"
          :price="card.price"
        />
      </div>
      <Button :class="$style.button2"> Показать все </Button>
    </div>
  </div>
</template>

<script>
import Title from '~/components/molecules/Title'
import Button from '~/components/atoms/Button'
import ActualCard from '~/components/molecules/ActualCard'
import content from '~/assets/content.json'
export default {
  data() {
    return {
      title: 'Актуальная информация',
      icon: 'letterA',
      cards: content.catalogCards,
    }
  },
  components: {
    Title,
    Button,
    ActualCard,
  },
}
</script>
<style lang="scss" module>
.actual {
  margin: -0.5rem 0 0 0;
  padding: 0 0 10rem 0;
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
        @include H100;
      }
    }
    .cards {
      color: $N100;
      @include H300;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
      margin: 0 0 4rem 0;
      @include tablet {
        grid-template-columns: 1fr 1fr;
      }
      @include custom(500px) {
        grid-template-columns: 1fr;
        gap: 4rem;
      }
    }
    .button2 {
      position: relative;
      left: 50%;
      transform: translate(-50%, 0);
      @include custom(360px) {
        @include H100;
      }
    }
  }
}
</style>
