<template>
  <div>
    <Card v-for="card in cards" :key="card.id">
      {{ card.url }}
      {{ card.name }}
      {{ card.price }}
    </Card>
  </div>
</template>

<script>
import content from '~/assets/content.json'
export default {
  data() {
    return { cards: content.catalogCards }
  },
}
</script>

