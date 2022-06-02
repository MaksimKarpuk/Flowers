<template>
  <div :class="$style.instagramm">
    <div :class="$style.container">
      <div :class="$style.text">
        <div :class="$style.title">
          Будьте в курсе наших новинок, скидок и акций
        </div>
        <div :class="$style.subtitle">Подписывайтесь на нас в Инстаграм</div>
      </div>
      <div :class="$style.insta">
        <div :class="$style.logo">
          <div :class="$style.headLogo">
            <img v-lazy="'/img/insta/logo.webp'" alt=" " />
          </div>
          <div :class="$style.textLogo">
            <a href="https://www.instagram.com/" target="_blank">
              planetofflowers
            </a>
          </div>
        </div>
        <div :class="$style.photos">
          <InstaCard v-for="card in cards" :key="card.id" :url="card.url" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InstaCard from '~/components/atoms/InstaCard'
import content from '~/assets/content.json'
export default {
  data() {
    return {
      cards: content.catalogInsta,
    }
  },
  components: {
    InstaCard,
  },
}
</script>

<style lang="scss" module>
.instagramm {
  background: $header;
  padding: 0 0 4rem 0;
  margin: -0.5rem 0 0 0;
  .container {
    display: grid;
    grid-template-columns: 40% 60%;
    @include tablet {
      display: block;
    }
    @include container;
    .text {
      color: $N100;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      justify-content: center;
      @include mobile {
        gap: 0.5rem;
      }
      .title {
        @include H400;
        max-width: 25.5rem;
        @include custom(840px) {
          @include H80;
        }
        @include tablet {
          max-width: 80rem;
          @include H400;
        }
        @include mobile {
          @include H900;
        }
      }
      .subtitle {
        @include H80;
        font-weight: 300;
        max-width: 18rem;
        @include custom(840px) {
          @include H200;
        }
        @include tablet {
          max-width: 80rem;
          margin: 0 0 3rem 0;
        }
        @include mobile {
          margin: 0 0 1.5rem 0;
          @include H100;
        }
      }
    }
    .insta {
      .photos {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
        padding: 0 0 0 1.5rem;
        @include tablet {
          padding: 0;
        }
        @include mobile {
          gap: 0.5rem;
        }
      }
      .logo {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin: 0 0 3.5rem 0;
        @include tablet {
          margin: 0 0 2rem 0;
        }
        @include mobile {
          margin: 0 0 1.5rem 0;
        }
        .headLogo {
          width: 3.75rem;
          height: 3.75rem;
          @include mobile {
            width: 2rem;
            height: 2rem;
          }
          img {
            border-radius: 50%;
            width: 100%;
            height: 100%;
          }
        }
        .textLogo {
          a {
            color: $N100;
            @include H100;
            @include mobile {
              @include H90;
            }
          }
        }
      }
    }
  }
}
</style>