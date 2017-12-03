<template>
  <div> 
    Active Board: {{board}}
  </div>
</template>

<script>
export default {
  name: 'board',
  mounted(){
    this.$store.dispatch('getBoard',this.$route.params.id)
  },
  computed:{
    board(){
      return this.$store.state.activeBoard
    }
  }
}
</script>

<style scoped>

</style>
