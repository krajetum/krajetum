import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitch } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitch)
library.add(faBars)

Vue.component('font-awesome-icon', FontAwesomeIcon)
