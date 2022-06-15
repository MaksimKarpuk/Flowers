<template>
  <div :class="$style.info">
    <div :class="$style.container">
      <Title :title="title" :icon="icon" isLeft :class="$style.title" />
      <div :class="$style.content">
        <div :class="$style.contacts">
          <div :class="$style.phone">
            <div :class="$style.image">
              <img v-lazy="'/img/info/phone.webp'" alt=" " />
            </div>
            <Link href="tel:+375 (29) 805-34-79" :class="$style.link"
              >+375 (29) 805-34-79</Link
            >
          </div>
          <div :class="$style.post">
            <div :class="$style.image">
              <img v-lazy="'/img/info/post.webp'" alt=" " />
            </div>
            <Link href="mailto:pfl_@tut.by" :class="$style.link"
              >pfl_@tut.by</Link
            >
          </div>
          <div :class="$style.time">
            <div :class="$style.image">
              <img v-lazy="'/img/info/time.webp'" alt=" " />
            </div>
            <div :class="$style.timeText">
              Пн-пт: 8:00 – 21:00 <br />
              Сб: 8:00 – 21:00 <br />
              Вс.: 8:00 – 21:00
            </div>
          </div>
          <div :class="$style.adres">
            <div :class="$style.image">
              <img v-lazy="'/img/info/adres.webp'" alt=" " />
            </div>
            <Link
              href="https://www.google.com/maps/place/%D0%BF%D1%80%D0%BE%D1%81%D0%BF.+%D0%9C%D0%B0%D1%88%D0%B5%D1%80%D0%BE%D0%B2%D0%B0+67,+%D0%91%D1%80%D0%B5%D1%81%D1%82/@52.088945,23.711327,17z/data=!3m1!4b1!4m5!3m4!1s0x47210c08eae70d75:0x56be0c654bab015!8m2!3d52.088945!4d23.711327"
              target="_blank"
              :class="$style.adresText"
              >г. Брест, проспект Машерова, 67</Link
            >
          </div>
          <div :class="$style.text">
            <div :class="$style.link">
              Заказы на доставку принимаются круглосуточно
            </div>
          </div>
        </div>
        <div>
          <MapAtom />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '~/components/molecules/Title'
import MapAtom from '~/components/atoms/MapAtom'
import Link from '~/components/atoms/Link'
export default {
  data() {
    return {
      title: 'Контакты',
      icon: 'letterK',
    }
  },
  components: {
    Title,
    MapAtom,
    Link,
  },
  Link,
}
</script>

<style lang="scss" module>
.info {
  padding: 0 0 10rem 0;
  margin: -0.1rem 0 0 0;
  background: $header;
  .container {
    @include container;
    padding-top: 10rem;
    @include tablet {
      padding-top: 7rem;
    }
    .title {
      margin: 0 0 5rem 0;
    }
    .content {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      @include custom(791px) {
        display: block;
      }
      .contacts {
        @include custom(791px) {
          margin: 0 0 2rem 0;
        }
        .phone {
          display: flex;
          gap: 1rem;
          margin: 0 0 1.5rem 0;
          align-items: center;
          .link {
            color: $N100;
            @include H100;
            @include tablet {
              @include H90;
            }
          }
        }
        .post {
          display: flex;
          gap: 1rem;
          margin: 0 0 1.5rem 0;
          align-items: center;

          .link {
            color: $N100;
            @include H100;
            @include tablet {
              @include H90;
            }
          }
        }
        .time {
          display: flex;
          gap: 1rem;
          margin: 0 0 1rem 0;
          .timeText {
            color: $N100;
            @include H100;
            @include tablet {
              @include H90;
            }
          }
        }
        .adres {
          display: flex;
          gap: 1rem;
          margin: 0 0 9.875rem 0;
          align-items: center;
          @include custom(1168px) {
            margin: 0 0 8.1rem 0;
          }
          @include custom(1054px) {
            margin: 0 0 6rem 0;
          }
          @include custom(944px) {
            margin: 0 0 3.8rem 0;
          }
          @include custom(882px) {
            margin: 0 0 4rem 0;
          }
          @include custom(855px) {
            margin: 0 0 3rem 0;
          }
          @include custom(823px) {
            margin: 0 0 2rem 0;
          }
          @include tablet {
            margin: 0 0 2.8rem 0;
          }
          @include custom(730px) {
            margin: 0 0 1.5rem 0;
          }
          .adresText {
            color: $N100;
            @include H100;
            @include tablet {
              @include H90;
            }
          }
        }
        .text {
          .link {
            color: $N100;
            @include H100;
            @include tablet {
              @include H90;
            }
          }
        }
      }
    }
  }
  .image {
    width: 2.1rem;
    height: 2.1rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>