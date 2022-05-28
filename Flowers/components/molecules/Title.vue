<template>
  <div :class="$style.container">
    <div v-if="!isLeft" :class="$style.leftLine" ></div>
    <div :class="$style.title">
      {{ title }}
      <Icon :icon="title[0]" :class="$style.icon" />
    </div>
    <div v-if="!isRight" :class="$style.rightLine" ></div>
  </div>
</template>

<script>
import Icon from '~/components/atoms/Icon'
export default {
components: {
    Icon
},
  props: {
    title: String,
    isLeft: Boolean,
    isRight: Boolean,
    isCenter: Boolean,
  },
}
</script>

<style lang="scss" module>
.container{
  .leftLine .rightLine{
      height: 0.0625rem;
      width: 100%;
      color: $N100;
  }
  .title{
      @include H600;
      color: $N100;
      position: relative;
      .icon{
          position: absolute;
          left: 0;
          bottom: 0;
      }
  }


}
</style>