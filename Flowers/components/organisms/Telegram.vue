<template>
  <div :class="$style.telegram">
    <div :class="$style.container">
      <div :class="$style.title">
        Узнавайте первым о наших новостях, скидках и акциях!
      </div>
      <div :class="$style.subtitle">Подписаться на рассылку</div>
      <div :class="$style.form">
        <EmailForm :class="$style.input" />
      </div>
    </div>
    <div :class="$style.image">
      <Form :class="$style.segment" />
    </div>
  </div>
</template>

<script>
import EmailForm from '~/components/organisms/EmailForm'
import Form from '~/assets/icons/Form.svg?inline'
export default {
  components: {
    EmailForm,
    Form,
  },
}
</script>

<style lang="scss" module>
.telegram {
  background: $cards;
  display: flex;
  overflow: hidden;
  @include custom(830px) {
    display: block;
  }
  .image {
    max-width: 33.75rem;
    display: flex;
    align-items: flex-end;
    @include custom(1130px) {
      max-width: 25rem;
      margin: 0 0 -3.4rem 0;
    }
    @include bigTablet {
      max-width: 20rem;
      margin: 0 0 -5.4rem 0;
    }
    @include custom(920px) {
      max-width: 15rem;
      margin: 0 0 -7.3rem 0;
    }
    @include custom(830px) {
      max-width: 100%;
      justify-content: flex-end;
      .segment {
        max-width: 20rem;
        margin: 0 0 2rem 0;
        @include mobile {
          max-width: 16rem;
          margin: 0 0 0.4rem 0;
        }
      }
    }
  }
  .container {
    @include container;
    .title {
      margin: 10rem 0 3.5rem 0;
      @include H400;
      color: $header;
      max-width: 35.4rem;
      @include custom(920px) {
        margin: 7rem 0 3.5rem 0;
      }
      @include mobile {
        @include H900;
        margin: 4rem 0 2.5rem 0;
      }
    }
    .subtitle {
      margin: 0 0 5rem 0;
      color: $header;
      @include H200;
      @include custom(920px) {
        margin: 0 0 2.5rem 0;
      }
      @include mobile {
        @include H100;
        margin: 0 0 2rem 0;
      }
    }
    .form {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      margin: 0 0 10rem 0;

      .input {
        align-self: flex-end;
      }

      @include custom(1130px) {
        margin: 0 0 7rem 0;
      }
      @include bigTablet {
        margin: 0 0 5rem 0;
      }
      @include custom(830px) {
        margin: 0;
      }
    }
  }
}
</style>