<template>
  <div id="app">
    <input type="text" :placeholder="placeholder" v-model="newTodo"/>
    <button @click="createTodo()">create</button>
    todoList
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      placeholder:'añadir tarea',
      newTodo:'',
      todos:['hola'],
    }
  },
  methods:{
      createTodo: function(){
        if (this.newTodo.length > 0) {
          this.todos.push(this.newTodo);
          this.newTodo = '';
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
