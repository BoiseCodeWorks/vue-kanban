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
    this.$root.$data.store.actions.getBoards()
  },
  computed:{
    boards(){
      return this.$root.$data.store.state.boards
    }
  },
  methods:{
    createBoard(){
      this.$root.$data.store.actions.createBoard({
        name: 'Testing board creation',
        description: 'blarg'
      })
    },
    removeBoard(board){
      this.$root.$data.store.actions.removeBoard(board)
    }
  }
}
</script>

<style scoped>

</style>
