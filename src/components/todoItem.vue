<template>
    <div >
        {{todoObject.text }}
        <input type="checkbox" class="toggle" @change="markAsCompleted(index, todoObject.completed)" >
        <button class="borrar" @click="onRemoveTodoIndex(index)">borrar</button>
        
    </div>
</template>

<script>
export default {
    name:'todoItem',
    props:['todoObject','onRemoveTodoIndex', 'index', 'markAsCompleted'],
    
}
    
</script>

<style scoped>
button {
  color: red;
}
    

</style>