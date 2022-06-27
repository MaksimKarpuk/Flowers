<template>
  <div :class="$style.feedBack">
    <div :class="$style.container">
      <Title :title="title" :icon="icon" isCenter :class="$style.title" />
      <div :class="$style.content">
        <div :class="$style.left">
          <ArrowLeft :class="$style.arrowLeft" />
        </div>
        <FeedBackCard v-for="card in cards" :key="card.id" :url="card.url" />
        <div :class="$style.right">
          <ArrowRight :class="$style.arrowRight" />
        </div>
      </div>
      <div :class="$style.scroll"></div>
    </div>
  </div>
</template>

<script>
import Title from '~/components/molecules/Title'
import FeedBackCard from '~/components/molecules/FeedBackCard'
import ArrowLeft from '~/assets/icons/ArrowLeft.svg?inline'
import ArrowRight from '~/assets/icons/ArrowRight.svg?inline'
import content from '~/assets/content.json'
export default {
  data() {
    return {
      title: 'Отзывы',
      icon: 'letterO',
      cards: content.feedBackPhoto,
    }
  },
  components: {
    Title,
    ArrowLeft,
    ArrowRight,
    FeedBackCard,
  },
}
</script>

<style lang="scss" module>
.feedBack {
  background: $header;
  .container {
    @include container;
    padding: 10.5rem 0 6rem 0;
    .title {
      margin: 0 0 4rem 0;
    }
    .content {
      margin: 3.5rem 0 5rem 0;
      display: flex;
      gap: 3.5rem;
      .left {
        max-width: 3.6rem;
        width: 100%;
        max-height: 3.6rem;
        height: 100%;
        align-self: center;
        .arrowLeft {
          width: 100%;
          cursor: pointer;
        }
      }
      .right {
        max-width: 3.6rem;
        width: 100%;
        max-height: 3.6rem;
        height: 100%;
        align-self: center;
        .arrowRight {
          width: 100%;
          cursor: pointer;
        }
      }
    }
    .scroll {
      max-width: 8rem;
      width: 100%;
      height: 0.5rem;
      border: 0.0625rem solid $N100;
      margin: 0 auto;
      background: $cards;
      border-radius: 5rem;
    }
  }
}
</style>