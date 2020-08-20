Vue.component('todo-item', {
  props: ['todo'],
  template: "<li>{{ todo.text }}</li>",
});
Vue.component('table_item',{
  props: ['table'],
  template: "<li>{{ table.name }}</li>"
});
// import json from 'data.json'
data = {
  "data": [
    
      {
        "account_id": "11",
        "name": "name11",
        "id": 1
      },
      {
        "account_id": "12",
        "name": "name12",
        "id": 2
      },
      {
        "account_id": "13",
        "name": "name13",
        "id": 3
      },
      {
        "account_id": "14",
        "name": "name14",
        "id": 4
      }
    ],
  
};
data2 = {
  "data": [
      {
        "id" : 1,
        "name" : "dwfdsfds"
      },
      {
        "id" : 2,
        "name" : "dwfdsfds"
      },
      {
        "id" : 3,
        "name" : "dwfdsfds"
      },
    
  ]
}
console.log(data);
console.log(data2);
new Vue({
  el: '#app',
  // data: function() {
  //   return {
  //     data: data.data
  //   }
  // },
  computed: {
    firstAccountNames() {
      return this.data
    },
    groceryList() {
      return this.data2
    }
  },
  data: {
  //   groceryList: [
  //     { id: 0, text: 'Vegetables' },
  //     { id: 1, text: 'Cheese' },
  //     { id: 2, text: 'Whatever else humans are supposed to eat' }
  //   ],
    activetab: 1 
  },
});