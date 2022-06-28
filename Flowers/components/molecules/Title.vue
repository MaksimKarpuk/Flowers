<template>
  <div :class="$style.container">
    <p v-if="!isLeft" :class="$style.leftLine"></p>
    <div :class="$style.title">
      {{ title }}
      <div :class="$style.icon">
        <Icon :icon="icon" />
      </div>
    </div>
    <p v-if="!isRight" :class="$style.rightLine"></p>
  </div>
</template>

<script>
import Icon from '~/components/atoms/Icon'
export default {
  components: {
    Icon,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    isLeft: {
      type: Boolean,
      default: false,
    },
    isRight: {
      type: Boolean,
      default: false,
    },
    isCenter: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" module>
.container {
  display: flex;
  align-items: center;
  gap: 1rem;
  @include custom(700px) {
    display: block;
  }
  .rightLine {
    height: 0.0625rem;
    width: 100%;
    background-color: $N100;
  }
  .title {
    @include H600;
    color: $N100;
    position: relative;
    white-space: nowrap;
    @include bigTablet {
      @include H400;
    }
    @include custom(700px) {
      margin: 0 0 0.5rem 0;
    }
    @include custom(530px) {
      @include H80;
    }
    @include custom(425px) {
      @include H900;
    }
    @include custom(380px) {
      @include H100;
      font-weight: 700;
    }
    .icon {
      position: absolute;
      left: -0.2rem;
      bottom: -0.5rem;
      @include bigTablet {
        left: -0.5rem;
        bottom: -0.7rem;
      }
      @include custom(425px) {
        left: -0.7rem;
        bottom: -0.7rem;
      }
    }
  }
}
</style>