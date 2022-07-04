<template>
  <div :class="$style.input">
    <form action=" " @submit.prevent="submit" :class="$style.form">
      <input
        type="text"
        :placeholder="placeholder"
        v-model="value"
        :class="[{ [$style.error]: isError }]"
      />
      <Arrow :class="$style.button" @click="submit" />
    </form>
  </div>
</template>

<script>
import Arrow from '~/assets/icons/TelegramArrow.svg?inline'
export default {
  data() {
    return {
      placeholder: 'Введите ваш Email',
      isError: false,
      value: '',
    }
  },
  components: {
    Arrow,
  },
  methods: {
    async submit() {
      if (this.value) {
        try {
          await this.$axios.$post('/api/telegram', {value: this.value})
        } catch (error) {
          console.log('error')
        }
        this.value = ''
      } else {
        this.isError = true
        this.placeholder = 'Вы не ввели ваш Email адрес'
      }
    },
  },
}
</script>

<style lang="scss" module>
.input {
  .form {
    display: flex;
    gap: 1rem;
    input {
      border-bottom: 0.0625rem solid $black;
      background: $cards;
      width: 28rem;
      @include H100;
      &::placeholder {
        color: $header;
        @include H100;
        @include mobile {
          @include H90;
        }
      }
      @include custom(600px) {
        width: 26rem;
      }
      @include custom(550px) {
        width: 22rem;
      }
      @include mobile {
        width: 18rem;
      }
      @include custom(400px) {
        width: 13rem;
      }
    }
    .button {
      color: $header;
      cursor: pointer;
    }
    .error {
      border-bottom: 0.0625rem solid $red;
      &::placeholder {
        color: $red;
      }
    }
  }
}
</style>