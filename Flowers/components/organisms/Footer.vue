<template>
  <div :class="$style.footer">
    <div :class="$style.container">
      <div :class="$style.logo">
        <Logo />
      </div>
      <div :class="$style.links">
        <nav :class="$style.nav">
          <div :class="$style.buyers">
            <div :class="$style.title">Покупателям</div>
            <div :class="$style.options">
              <Link
                v-for="link in linksBuyers"
                :key="link.id"
                isSmooth
                :href="link.href"
              >
                {{ link.text }}
              </Link>
            </div>
          </div>
          <div :class="$style.servis">
            <div :class="$style.title">О сервисе</div>
            <div :class="$style.options">
              <Link
                v-for="link in linksServis"
                :key="link.id"
                isSmooth
                :href="link.href"
              >
                {{ link.text }}
              </Link>
            </div>
          </div>
        </nav>
        <div :class="$style.socials">
          <Link
            v-for="social in socialNet"
            :key="social.id"
            :href="social.href"
            :class="$style.social"
          >
            <img v-lazy="social.url" alt=" " :class="$style.image" />
          </Link>
        </div>
      </div>
    </div>
    <div :class="$style.text">
      ЧТПУП"Версилия" пос. Мухавец ул. Юбилейная 9-1, УНП290472741, номер
      ЕГР290472741 от 25.06.2006 г. зарегистрирован Брестским областным
      исполнительным комитетом, номер регистрации в торговом реестре 331029 от
      17.05.2016 г., регитстрация в Бел ГИЭ 2014-01-13, номер ресурса 91935
    </div>
  </div>
</template>

<script>
import Logo from '~/components/atoms/Logo'
import Link from '~/components/atoms/Link'
import content from '~/assets/content.json'
export default {
  components: {
    Logo,
    Link,
  },
  data() {
    return {
      linksBuyers: content.footerBuyers,
      linksServis: content.footerServis,
      socialNet: content.socialNet,
    }
  },
}
</script>

<style lang="scss" module>
.footer {
  background: $header;
  border-top: 0.0625rem solid $N100;
  .container {
    @include container;
    display: flex;
    justify-content: space-between;
    padding: 6rem 0 5rem 0;
    border-bottom: 0.0625rem solid $N100;
    gap: 7rem;
    .links {
      display: flex;
      gap: 7rem;
      .nav {
        display: flex;
        gap: 7rem;
        .options {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          @include H200;
        }
        .title {
          @include H400;
          color: $N100;
          margin: 0 0 2rem 0;
        }
      }
      .socials {
        display: flex;
        gap: 1.5rem;
        height: 2.8rem;
        .social {
          .image {
            width: 2.8rem;
            height: 2.8rem;
          }
        }
      }
    }
  }
  .text {
    @include H90;
    @include container;
    color: $N100;
    text-align: center;
    padding: 3rem 0 6rem 0;
  }
}
</style>