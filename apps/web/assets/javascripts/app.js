import Vue from 'vue';
import axios from 'axios';
import Form from './core/Form';

window.axios = axios;
window.Form = Form;

new Vue({
  el: '#app',

  data: {
    form: new Form({
      name: '',
      description: ''
    }),

    projects: []
  },

  methods: {
    onSubmit() {
      this.form.post('/projects')
        .then(response => {
          this.projects.push(response.project)
        });
    }
  },

  created () {
    // it needs xhr header, otherwise Hanami controller doesn't recognize if the request is xhr.
    axios.get('/projects', { headers: {'X-Requested-With': 'XMLHttpRequest'} })
      .then(response => {
        this.projects = response.data.projects;
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }
});
