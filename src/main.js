import { createApp } from 'vue';
import App from './App.vue';
import './style.scss';


//************* */
// Importa Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// componenti js bootsrap
import 'bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';


// aggiungo icone alla libreria
library.add(fas);

const app = createApp(App);

// Registro il componente FontAwesomeIcon globalmente
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
