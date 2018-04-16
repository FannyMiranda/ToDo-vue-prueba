<template>
  <div class="createTodo">
    <input type="text" :placeholder="placeholder" v-model="newTodo"/>
    <button @click="onClick">create</button>
  </div>
</template>
<script>
export default{
  name: 'createTodo',
  props:['onCreateTodo'],
  data (){
    return{
      placeholder:'añadir tarea',
      newTodo:''
    }
  },
  methods:{
    onClick(){
      this.onCreateTodo(this.newTodo);
      this.newTodo = '';
    }
  }
}
</script>

<!--add "scoped" atribute to limit css this component only -->

<style scoped>

</style>
