// import Vue from 'vue'

// let state = {
//   boards: [],
//   activeBoard: {},
//   error: {}
// }

// let handleError = (res) => {
//   state.error = res
// }

// let clearError = (res) => {
//   state.error = {}
// }

// export default {
//   state,
//   actions: {
//     getBoards() {
//       clearError()
//       api('boards').then(res => {
//         state.boards = res.data.data
//       }).catch(handleError)
//     },
//     getBoard(id) {
//       clearError()
//       api('boards/' + id).then(res => {
//         state.activeBoard = res.data.data
//       }).catch(handleError)
//     },
//     removeBoard(board) {
//       api.delete('boards/' + board._id).then(() => {
//         state.boards.splice(state.boards.indexOf(board), 1)
//       })
//     },
//     createBoard(board) {
//       clearError()
//       api.post('boards', board).then(res => {
//         state.boards.push(res.data.data)
//       }).catch(handleError)
//     }
//   }
// }