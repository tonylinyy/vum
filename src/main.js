import Vue from 'vue'
import Router from 'vue-router'
import FastClick from 'fastclick'

import Vum from './vum.js'

// demos
import Index from './demos/Index'
import Page from './demos/Page'
import Buttons from './demos/Buttons'
import Column from './demos/Column'
import Grid from './demos/Grid'
import Modal from './demos/Modal'
import List from './demos/List'
import Contacts from './demos/Contacts'
import Form from './demos/Form'
import Icons from './demos/Icons'
import Tab from './demos/Tab'
import Scroll from './demos/Scroll'
import Popup from './demos/Popup'
import PopWindow from './demos/PopWindow'
import Preloader from './demos/Preloader'
import Actions from './demos/Actions'
import Toast from './demos/Toast'
import Searchbar from './demos/Searchbar'
import Calendar from './demos/Calendar'
import Result from './demos/Result'
import Slide from './demos/Slide'
import SidePanel from './demos/SidePanel'
import Menu from './demos/Menu'
import Stars from './demos/Stars'
import CircleProgress from './demos/CircleProgress'

Vue.config.debug = true

Vue.use(Router)
Vue.use(Vum)

const routes = [
  {path: '/', name: 'index', component: Index},
  {path: '/page', component: Page},
  {path: '/buttons', component: Buttons},
  {path: '/column', component: Column},
  {path: '/grid', component: Grid},
  {path: '/modal', component: Modal},
  {path: '/list', component: List},
  {path: '/contacts', component: Contacts},
  {path: '/form', component: Form},
  {path: '/icons', component: Icons},
  {path: '/tab', component: Tab},
  {path: '/scroll', component: Scroll},
  {path: '/popup', component: Popup},
  {path: '/popwindow', component: PopWindow},
  {path: '/preloader', component: Preloader},
  {path: '/toast', component: Toast},
  {path: '/actions', component: Actions},
  {path: '/searchbar', component: Searchbar},
  {path: '/calendar', component: Calendar},
  {path: '/result', component: Result},
  {path: '/slide', component: Slide},
  {path: '/side-panel', component: SidePanel},
  {path: '/menu', component: Menu},
  {path: '/stars', component: Stars},
  {path: '/circle', component: CircleProgress}
]

let router = new Router(routes)

const demo = new Vue({
  el: '#app',
  router: router,
  render: v => v(Index)
})
console.log(demo)

Vum.router(router)

FastClick.attach(document.body)
