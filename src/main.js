import { createApp } from 'vue';
import App from './App.vue';

// Bandiere
import "/node_modules/flag-icons/css/flag-icons.min.css";

// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* icons */
import { faStar as fasStar} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons';
library.add(fasStar, farStar);
// Fine Font awesome

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
