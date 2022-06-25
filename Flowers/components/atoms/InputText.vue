<template>
  <div :class="$style.input">
    <form action=" " @submit.prevent="$store.commit('telegram/addEmail')">
      <input :type="type" :placeholder="placeholder" v-model="text" />
    </form>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
export default {
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
  // methods: {
  //   ...mapMutations(['addEmail']),
  //   submit() {
  //     this.text === ''
  //       ? document.body.className = "error"
  //       : this.addEmail(this.text)
  //     this.text = ''
  //   },
  // },
}
</script>

<style lang="scss" module>
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
</style>