<template>
<div class="triple-column container">
  <negative-thought :isFirstEntry="true" />
  <negative-thought :isFirstEntry="false" />
</div>
</template>

<script>
import NegativeThought from '@/components/NegativeThought';
export default {
  name: 'TripleColumn',
  components: {
    NegativeThought
  },
  props: {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  h3 {
    margin-bottom: 0;
  }
}
</style>
