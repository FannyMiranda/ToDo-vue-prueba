<template>
  <div id="app">
   <h1>TAREAS</h1>
    <createTodo :onCreateTodo="createTodo" />
    <button class="" @click="deleteAll()">Eliminar todos</button>
    <todoList :todos="todos" :onRemoveTodo="removeTodo"/>
   
  </div>
  
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {

                todos: [],
            }
        },
        methods: {
            createTodo: function(text) {
                if (text.length > 0) {
                    this.todos.push( {text:text, completed: false} );

                } else {
                    alert('no hay texto')
                }

            },
            removeTodo: function(i) {
                this.todos.splice(i, 1);
            },
            deleteAll: function() {
                this.todos = [];
            },
            markAsCompleted: function(index, completed) {
                this.todos[index].completed = completed;
            }
            
        }
    }

</script>

<style>


</style>
