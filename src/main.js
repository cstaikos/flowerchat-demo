var Vue = require('vue');
var app = require('./app.vue');
var flower = require('./flower.vue');

window.addEventListener('load', function(){
  new Vue({
    el: '#app',
    components: {
      app: app
    }
  })
})
