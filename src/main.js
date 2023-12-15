import { createApp } from 'vue';
import App from './App.vue';

import "@fontsource/roboto";
import "./assets/style/style.scss";
// Bandiere
import "/node_modules/flag-icons/css/flag-icons.min.css";

// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* icons */
import { faStar as fasStar} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
library.add(fasStar, farStar, faMagnifyingGlass);
// Fine Font awesome

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
