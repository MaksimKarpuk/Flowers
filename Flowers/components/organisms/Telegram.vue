<template>
  <div :class="$style.telegram">
    <div :class="$style.container">
      <div :class="$style.title">
        Узнавайте первым о наших новостях, скидках и акциях!
      </div>
      <div :class="$style.subtitle">Подписаться на рассылку</div>
      <div :class="$style.form">
        <InputText :class="$style.input" :placeholder="placeholder" :type="type" />
        <Arrow :class="$style.button" />
      </div>
    </div>
    <div :class="$style.image">
      <Form :class="$style.segment" />
    </div>
  </div>
</template>

<script>
import InputText from '~/components/atoms/InputText'
import Arrow from '~/assets/icons/TelegramArrow.svg?inline'
import Form from '~/assets/icons/Form.svg?inline'
export default {
  components: {
    InputText,
    Arrow,
    Form,
  },
  data() {
    return {
      placeholder: 'Введите свой e-mail',
      type: "text",
    }
  },
}
</script>

<style lang="scss" module>
.telegram {
  background: $cards;
  display: flex;
  .image {
    max-width: 33.75rem;
    // max-height: 26.375rem;
    .segment {
      margin: 0 0 -5rem 0;
      width: 100%;
      height: 100%;
      
    }
  }
  .container {
    @include container;
    .title {
      margin: 10rem 0 3.5rem 0;
      @include H400;
      color: $header;
      max-width: 35.4rem;
    }
    .subtitle {
      margin: 0 0 3rem 0;
      color: $header;
      @include H200;
    }
    .form {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      margin: 0 0 10rem 0;
      .input {
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