import {createApp} from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/md-dark-indigo/theme.css'
import Button from 'primevue/button';
import Card from 'primevue/card';
import Dropdown from 'primevue/dropdown';
import MultiSelect from 'primevue/multiselect';
import OverlayPanel from 'primevue/overlaypanel';
import Checkbox from 'primevue/checkbox';
import Menu from 'primevue/Menu';

createApp(App)
  .use(PrimeVue, {ripple: true})
  .component('Button', Button)
  .component('Card', Card)
  .component('Dropdown', Dropdown)
  .component('MultiSelect', MultiSelect)
  .component('OverlayPanel', OverlayPanel)
  .component('Checkbox', Checkbox)
  .mount('#app')
