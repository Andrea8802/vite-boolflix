import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, faStar)

createApp(App).component('fa', FontAwesomeIcon).mount('#app')
