<template>
  <div id="app">
    <createTodo :onCreateTodo="createTodo" />
    <todoList :todos="todos" :onRemoveTodo="removeTodo"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{

      todos:['hola'],
    }
  },
  methods:{
      createTodo: function(text){
        if (text.length > 0) {
          this.todos.push(text);

        } else {
          // alert('no hay texto')
        }

      },
      removeTodo:function(i) {
        this.todos.splice(i, 1);
      }
    }
  }
</script>

<style>


</style>
