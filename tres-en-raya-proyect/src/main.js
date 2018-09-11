import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import swal from 'sweetalert';


Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App)
})
