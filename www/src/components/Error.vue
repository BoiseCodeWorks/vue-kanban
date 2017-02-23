<template>
  <div> 
    Error: {{error}}
  </div>
</template>

<script>
export default {
  name: 'error',
  computed:{
    error(){
      return this.$root.$data.store.state.error
    }
  }
}
</script>

<style scoped>

</style>
