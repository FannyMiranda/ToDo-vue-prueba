// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import createTodo from './components/createTodo'
import todoList from './components/todoList'
import todoItem from './components/todoItem'
Vue.component('createTodo', createTodo);
Vue.component('todoList', todoList);
Vue.component('todoItem', todoItem);

Vue.component('todo-item', {
    // El componente todo-item ahora acepta
    // "prop", el cual es similar a un atributo personalizado
    // La rpopiedad se llama _todo_.
    props: ['todo'],

})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>'
})
