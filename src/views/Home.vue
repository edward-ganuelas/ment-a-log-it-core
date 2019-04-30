<template>
  <div class="home">
    <triple-column />
  </div>
</template>

<script>
// @ is an alias to /src
import TripleColumn from '@/components/TripleColumn.vue'

export default {
  name: 'home',
  components: {
    TripleColumn
  }
}
</script>
