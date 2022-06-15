<template>
  <div :class="$style.input">
      <input type="text" placeholder="Введите свой e-mail">
  </div>
</template>

<script>
export default {
 
}
</script>

<style lang="scss" module>
input {
    border-bottom: 0.0625rem solid $black;
    background: $cards;
    width: 28rem;
    @include H100;
    &::placeholder{
      color: $header;
       @include H100;
    }
}

</style>