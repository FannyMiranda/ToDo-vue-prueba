<template>
  <div class="">
    <ul>
      <li v-for="(item, i) in todos" @clik="removeTodo(i)">
        {{i}}
        {{item}}
      </li>
    </ul>
  </div>
</template>
 <script>
 export default {
   name: 'todoList',
   data () {
     return{
     }
   }
 }
 </script>

 <!-- add "scoped" atribute to limit css to this component only -->

 <style scoped>

 </style>
