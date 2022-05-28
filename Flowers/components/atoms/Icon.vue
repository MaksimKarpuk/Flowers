<template>
  <component :is="icon"> </component>
</template>

<script>
import leterK from '~/assets/icons/titles/leterK.svg?inline'
import leterH from '~/assets/icons/titles/leterH.svg?inline'
import leterO from '~/assets/icons/titles/leterO.svg?inline'
import leterP from '~/assets/icons/titles/leterP.svg?inline'
import leterA from '~/assets/icons/titles/leterA.svg?inline'
export default {
  components: {
    leterK,
    leterH,
    leterO,
    leterP,
    leterA,
  },
  props: {
    icon: {
        type:String,
        default: ""
    },
  },
  mounted() {
    console.log(this.icon)
  },
}
</script>

