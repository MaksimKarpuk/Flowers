<template>
  <div :class="$style.container">
    <p v-if="!isLeft" :class="$style.leftLine" ></p>
    <span :class="$style.title">
      {{ title }}
      <Icon :icon="icon" :class="$style.icon" />
    </span>
    <p v-if="!isRight" :class="$style.rightLine" ></p>
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
    icon: String,
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