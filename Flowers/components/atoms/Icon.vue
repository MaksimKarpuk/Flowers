<template>
  <component :is="icon"> </component>
</template>

<script>
import letterK from '~/assets/icons/titles/letterK.svg?inline'
import letterH from '~/assets/icons/titles/letterH.svg?inline'
import letterO from '~/assets/icons/titles/letterO.svg?inline'
import letterP from '~/assets/icons/titles/letterP.svg?inline'
import letterA from '~/assets/icons/titles/letterA.svg?inline'
export default {
  components: {
    letterK,
    letterH,
    letterO,
    letterP,
    letterA,
  },
  props: {
    icon: {
      type: String,
      default: '',
    },
  },
}
</script>

