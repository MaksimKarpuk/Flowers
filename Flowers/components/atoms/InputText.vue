<template>
  <div :class="$style.input">
    <input :type="type" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  props :{
    placeholder : {
      type: String,
      default: '',
    },
    type : {
      type: String,
      default: '',
    },
  }
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
  }
}
</style>