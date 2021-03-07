/*
 *  This is the router used by vue to correctly navigate through all of the
 *  possible pages.

            *** Change Log ***

            commit 8d82309e25d5a530e6b6e85e2224003ec309d605
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Mar 7 09:57:09 2021 -0500

    Added comments to all of the files that were missing them

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/router/index.ts | 10 ++++++++--
 1 file changed, 8 insertions(+), 2 deletions(-)

commit a8d971a5fe9c41ff50516fb19709e57eef8c62b6
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Mar 7 07:56:38 2021 -0500

    Added the final functionality

    Added About Us

    Added Update Profile

    Added New Links

    Added Radio Buttons to Cancel Reservations

    Added Radio Buttons to Make Users Admins

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/router/index.ts | 12 ++++++++++++
 1 file changed, 12 insertions(+)

commit 47b1cb2f596de0a2172ceaaf6756f7cf834d5ce3
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Thu Mar 4 21:59:17 2021 -0500

    Added all sub admin pages
    Implemented basic functionality
    Everything seems to work ok
    Need to add the delete user/reservation still
    Need to add a user management portion still

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/router/index.ts | 31 +++++++++++++++++++++++++------
 1 file changed, 25 insertions(+), 6 deletions(-)

commit 4b395755a8880d386a9f68aff891cf66dc273749
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Feb 28 21:54:53 2021 -0500

    Merging the changes

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/router/index.ts | 86 ++++++++++++++++++++++++++--------------------
 1 file changed, 49 insertions(+), 37 deletions(-)

commit ebd7dbc8bc7051ae4d1348e6a37352432c61ac4f
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Mon Feb 22 14:26:15 2021 -0500

    Completed conversion to VueJS3, Vite, TypeScript.

    Functionally identical to the previous WebPack and VueJS2 built but is much faster, smarter and can actually be used with modern libraries.

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/router/index.ts | 51 ++++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 51 insertions(+)

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
