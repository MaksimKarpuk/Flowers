<template>
  <div>
    <Card v-for="card in cards" :key="card.id" :class="$style.cards">
      <img v-lazy="card.url" alt=" " :class="$style.image" />
      <div :class="$style.text">
        <div>{{ card.name }}</div>
        <div>{{ card.price }}</div>
      </div>
    </Card>
  </div>
</template>

<script>
import content from '~/assets/content.json'
export default {
  data() {
    return { cards: content.catalogCards }
  },
}
</script>
 <style lang="scss" module>
.cards {
  color: $N100;
  @include H300;
  margin: 0 auto;
  .image {
    width: 22rem;
    height: 28rem;
    margin: 0 0 0.5rem 0;
    @include custom(1240px) {
      & {
        width: 20rem;
        height: 26rem;
      }
    }
    @include custom(1110px) {
      & {
        width: 18rem;
        height: 24rem;
      }
    }
    @include bigTablet {
      & {
        width: 16rem;
        height: 22rem;
      }
    }
    @include custom(864px) {
      & {
        width: 14rem;
        height: 20rem;
      }
    }
    @include custom(752px) {
      & {
        width: 20rem;
        height: 24rem;
      }
    }
    @include custom(705px) {
      & {
        width: 18rem;
        height: 22rem;
      }
    }
    @include custom(640px) {
      & {
        width: 16rem;
        height: 20rem;
      }
    }
    @include custom(575px) {
      & {
        width: 14rem;
        height: 18rem;
      }
    }
    @include custom(515px) {
      & {
        width: 12rem;
        height: 16rem;
      }
    }
    @include custom(435px) {
      & {
        width: 10rem;
        height: 14rem;
      }
    }
    @include custom(365px) {
      & {
        width: 8.5rem;
        height: 10.2rem;
      }
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    @include custom(1110px) {
      & {
        @include H200;
      }
    }
    @include custom(515px) {
      & {
        @include H100;
        gap: 0.1rem;
      }
    }
    @include custom(365px) {
      & {
         @include H90;
         gap: 0rem;
      }
    }
  }
}
</style>
