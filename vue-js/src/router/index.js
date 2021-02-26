import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import AdminHome from '@/components/AdminHome'
import Manage from '@/components/Manage'
import Reservation from '@/components/Reservation'
import ThankYou from '@/components/ThankYou'
import ContactUs from '@/components/ContactUs'
import ProfileCreation from '@/components/ProfileCreation'
import UserProfile from '@/components/UserProfile'

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
      path: '/login',
      name: 'Login',
      component: Login
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
    {
      path: '/profilecreation',
      name: 'ProfileCreation',
      component: ProfileCreation
    },
    {
      path: '/userprofile',
      name: 'UserProfile',
      component: UserProfile
    },
  ]
})
