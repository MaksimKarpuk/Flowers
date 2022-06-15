<template>
  <div :class="$style.telegram">
    <div :class="$style.container">
      <div :class="$style.title">
        <h2>
          Узнавайте первым о наших <br />
          новостях, скидках и акциях!
        </h2>
      </div>
      <div :class="$style.subtitle">
        <p>Подписаться на рассылку</p>
      </div>
      <div :class="$style.form">
        <InputText :class="$style.input" />
        <Arrow :class="$style.button" />
      </div>
    </div>
  </div>
</template>

<script>
import InputText from '~/components/atoms/InputText'
import Arrow from '~/assets/icons/TelegramArrow.svg?inline'
export default {
  components: {
    InputText,
    Arrow,
  },
}
</script>

<style lang="scss" module>
.telegram {
  background: $cards;
  padding: 10rem 0;
  .container {
    @include container;
    .title {
      margin: 0 0 3.5rem 0;
      @include H400;
      color: $header;
    }
    .subtitle {
      margin: 0 0 3rem 0;
      color: $header;
      @include H200;
    }
    .form{
      display: flex;
      align-items: center;
      gap: 1.5rem;
      .input{
        align-self: flex-end;
      }
      .button {
        color: $header;
        cursor: pointer;
      }
    }
  }
}
</style>