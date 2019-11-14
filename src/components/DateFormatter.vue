<template>
  <span>
    {{formatedDate}}
  </span>
</template>

<script>

const TO_LOCAL_OPTIONS = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
};

export default {
    name: 'DateFormatter',
    props: {
        dateTime: {
            type: Number,
            required: true
        }
    },
    computed: {
        formatedDate() {
            return new Date(this.dateTime).toLocaleDateString('en-CA', TO_LOCAL_OPTIONS);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
