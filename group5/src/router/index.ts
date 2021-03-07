/*
 *  This is the router used by vue to correctly navigate through all of the
 *  possible pages.
 */

// Import all of the things needed including the components
import { createWebHistory, createRouter } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Login from '../components/Login.vue'
import AdminHome from '../components/AdminHome.vue'
import Reservation from '../components/Reservation.vue'
import ThankYou from '../components/ThankYou.vue'
import ContactUs from '../components/ContactUs.vue'
import ProfileCreation from '../components/ProfileCreation.vue'
import UserProfile from '../components/UserProfile.vue'
import ManageUsers from '../components/ManageUsers.vue'
import ManageReservations from '../components/ManageReservations.vue'
import AddRoom from '../components/AddRoom.vue'
import AddRoomType from '../components/AddRoomType.vue'
import updateUser from '../components/updateUser.vue'
import About from '../components/About.vue'

const history = createWebHistory(); // Create a web history allowing navigation
const routes = [    // All of the routes used by vue and what components they go to
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
        path: '/managereservations',
        name: 'ManageReservations',
        component: ManageReservations,
    },
    {
        path: '/addroom',
        name: 'AddRoom',
        component: AddRoom
    }
    ,
    {
        path: '/addroomtype',
        name: 'AddRoomType',
        component: AddRoomType
    },
    {
        path: '/manageusers',
        name: 'ManageUsers',
        component: ManageUsers
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
    {
        path: '/updateUser',
        name: 'UpdateUser',
        component: updateUser
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
];

const router = createRouter({ history, routes })

export default router;
