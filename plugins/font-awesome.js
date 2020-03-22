import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitch } from '@fortawesome/free-brands-svg-icons'
import { faBars, faCheck, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitch)
library.add(faBars)
library.add(faCheck)
library.add(faCalendarAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)
