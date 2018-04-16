<template>
  <div class="">
      <!-- <li v-for="(item, i) in todos" @click="onRemoveTodo(i)">
        {{i}}
        {{item}}
      </li> -->
      <todoItem v-for="(todoText,i) in todos"
      :key="i"
      :text="todoText"
      :index="i"
      :onRemoveTodo="onRemoveTodo" />
  </div>
</template>
 <script>
 export default {
   name: 'todoList',
   props:['todos', 'onRemoveTodo'],
   data () {
     return{
     }
   }
 }
 </script>

 <!-- add "scoped" atribute to limit css to this component only -->

 <style scoped>

 </style>
