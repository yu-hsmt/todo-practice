export default {
    state: {
        todos: [],
    },
    mutations: {
        addTodo: (state, newTodo) => {
            state.todos.push(newTodo.value)
        },
    },
    actions: {
        addTodo: ({commit}, todos) => {
            commit('addTodo', todos);
        },
    },
    getters: {
        todos: state => state.todos,
    },
}