import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGlobe, faBriefcase, faLandmark, faTree, faGavel,
  faBan, faGlobeAmericas, faGem, faMale, faPiggyBank, faNewspaper, faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';
import SharedIcon from './components/SharedIcon.vue';

library.add(faGlobe, faBriefcase, faLandmark, faTree, faGavel,
  faBan, faGlobeAmericas, faGem, faMale, faPiggyBank, faNewspaper, faChevronLeft);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('SharedIcon', SharedIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
