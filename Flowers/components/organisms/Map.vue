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
            <a href="tel:+375 (29) 805-34-79" :class="$style.link"
              >+375 (29) 805-34-79</a
            >
          </div>
          <div :class="$style.post">
            <div :class="$style.image">
              <img v-lazy="'/img/info/post.webp'" alt=" " />
            </div>
            <a a href="mailto:pfl_@tut.by" :class="$style.link">pfl_@tut.by</a>
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
            <div :class="$style.adresText">г. Брест, проспект Машерова, 67</div>
          </div>
          <div :class="$style.text">
            <div :class="$style.link">
              Заказы на доставку принимаются круглосуточно
            </div>
          </div>
        </div>
        <div :class="$style.map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2451.493572443943!2d23.70913831522571!3d52.08894827583727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47210c08eae70d75%3A0x56be0c654bab015!2z0L_RgNC-0YHQvy4g0JzQsNGI0LXRgNC-0LLQsCA2Nywg0JHRgNC10YHRgg!5e0!3m2!1sru!2sby!4v1654191354244!5m2!1sru!2sby"
            max-width="639"
            height="438"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '~/components/molecules/Title'
export default {
  data() {
    return {
      title: 'Контакты',
      icon: 'letterK',
    }
  },
  components: {
    Title,
  },
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
      @include custom(730px) {
        display: block;
      }
      .contacts {
        @include custom(730px) {
          margin: 0 0 2rem 0;
        }
        .phone {
          display: flex;
          gap: 1rem;
          margin: 0 0 1.5rem 0;
          .image {
            width: 2.1rem;
            height: 2.1rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
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
          .image {
            width: 2.1rem;
            height: 2.1rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
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
          .image {
            width: 2.1rem;
            height: 2.1rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
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
          @include custom(1152px) {
            margin: 0 0 8.1rem 0;
          }
          @include custom(882px) {
            margin: 0 0 7rem 0;
          }
          @include tablet {
            margin: 0 0 2.8rem 0;
          }
          @include custom(730px) {
            margin: 0 0 1.5rem 0;
          }
          .image {
            width: 2.1rem;
            height: 2.1rem;
            img {
              width: 100%;
              height: 100%;
            }
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
    .map {
      width: 39.9rem;
      height: 27.3rem;
      @include tablet {
        width: 27rem;
        height: 21.7rem;
      }
      @include custom(730px) {
        height: 27.3rem;
        margin: 0 auto;
      }
      @include mobile {
        width: 24rem;
        height: 24rem;
      }
      @include custom(420px) {
        width: 20rem;
        height: 20rem;
      }
      @include custom(360px) {
        width: 18rem;
        height: 18rem;
      }
      iframe {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>