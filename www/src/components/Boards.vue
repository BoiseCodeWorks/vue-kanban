<template>
  <div> 
    <button @click="createBoard">Add Board</button>
    <ul>
      <li v-for="board in boards"><router-link :to="'/boards/'+board._id">{{board.name}}</router-link> <span @click="removeBoard(board)">x</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'boards',
  mounted(){
    this.$store.dispatch('getBoards')
  },
  computed:{
    boards(){
      return this.$store.state.boards
    }
  },
  methods:{
    createBoard(){
      this.$store.dispatch('createBoard', {
        name: 'Testing board creation',
        description: 'blarg'
      })
    },
    removeBoard(board){
      this.$store.dispatch('removeBoard', board)
    }
  }
}
</script>

<style scoped>

</style>
