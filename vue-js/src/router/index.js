import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AdminLogin from '@/components/AdminLogin'
import AdminHome from '@/components/AdminHome'
import Manage from '@/components/Manage'
import Reservation from '@/components/Reservation'
import ThankYou from '@/components/ThankYou'
import ContactUs from '@/components/ContactUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/reservation',
      name: 'Reservation',
      component: Reservation
    },
    {
      path: '/adminlogin',
      name: 'AdminLogin',
      component: AdminLogin
    },
    {
      path: '/adminhome',
      name: 'AdminHome',
      component: AdminHome
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage
    },
    {
      path: '/thankyou',
      name: 'ThankYou',
      component: ThankYou
    },
    {
      path: '/contactus',
      name: 'ContactUs',
      component: ContactUs
    },
  ]
})
