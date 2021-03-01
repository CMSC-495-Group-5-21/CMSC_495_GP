import { createWebHistory, createRouter } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Login from '../components/Login.vue'
import AdminHome from '../components/AdminHome.vue'
import Manage from '../components/Manage.vue'
import Reservation from '../components/Reservation.vue'
import ThankYou from '../components/ThankYou.vue'
import ContactUs from '../components/ContactUs.vue'
import ProfileCreation from '../components/ProfileCreation.vue'
import UserProfile from '../components/UserProfile.vue'

const history = createWebHistory();
const routes = [
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
];

const router = createRouter({ history, routes })

export default router;
