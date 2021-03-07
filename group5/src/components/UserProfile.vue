<!--
More or less a landing page for users once they login

            *** Change Log ***

            commit 8d82309e25d5a530e6b6e85e2224003ec309d605
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Mar 7 09:57:09 2021 -0500

    Added comments to all of the files that were missing them

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/UserProfile.vue | 18 
 1 file changed, 14 insertions(+), 4 deletions(-)

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

 group5/src/components/UserProfile.vue | 97
 1 file changed, 61 insertions(+), 36 deletions(-)

commit 47b1cb2f596de0a2172ceaaf6756f7cf834d5ce3
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Thu Mar 4 21:59:17 2021 -0500

    Added all sub admin pages
    Implemented basic functionality
    Everything seems to work ok
    Need to add the delete user/reservation still
    Need to add a user management portion still

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/UserProfile.vue | 9
 1 file changed, 8 insertions(+), 1 deletion(-)

commit 93c0cd445a3c4715f12925948bc5abdb315f7e4c
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Thu Mar 4 13:26:15 2021 -0500

    Added reservations to the profile page

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/UserProfile.vue | 102
 1 file changed, 61 insertions(+), 41 deletions(-)

commit 41b8da4e7c6658324af21c70318ab22650c27212
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Thu Mar 4 05:11:15 2021 -0500

    Added login functionality as well as basic cookie support

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/UserProfile.vue | 23
 1 file changed, 20 insertions(+), 3 deletions(-)

commit b56c5ae6537f4f52a1805685c6ad806db9dbdc8a
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Thu Mar 4 04:08:36 2021 -0500

    Revert "Merge branch 'refs/heads/justin' into naomi"

    This reverts commit 938b8e3161484ae70b9341df8fe8c4c6fa473a9f, reversing
    changes made to ff46f2adbcadad69be8e3e235ca046ef60e9be98.

 group5/src/components/UserProfile.vue | 12
 1 file changed, 11 insertions(+), 1 deletion(-)

commit 938b8e3161484ae70b9341df8fe8c4c6fa473a9f
Merge: ff46f2a aef7ec2
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Thu Mar 4 04:06:24 2021 -0500

    Merge branch 'refs/heads/justin' into naomi

    # Conflicts:
    #       group5/.vs/slnx.sqlite
    #       group5/.vs/vue-js/v16/Browse.VC.db
    #       group5/src/components/Login.vue
    #       group5/src/components/ProfileCreation.vue
    #       group5/src/components/UserProfile.vue
    #       vue-js/.vs/ProjectSettings.json
    #       vue-js/.vs/VSWorkspaceState.json
    #       vue-js/package-lock.json
    #       vue-js/src/components/HelloWorld.vue
    #       vue-js/src/components/Reservation.vue
    #       vue-js/src/router/index.js

commit 8a36910f3b27be82f33a0487f442d478c8f67124
Author: vanderpunk <69319211+vanderpunk@users.noreply.github.com>
Date:   Mon Mar 1 21:04:49 2021 -0500

    Changed lobby image, modified components

 group5/src/components/UserProfile.vue | 12
 1 file changed, 11 insertions(+), 1 deletion(-)

commit 4b395755a8880d386a9f68aff891cf66dc273749
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Feb 28 21:54:53 2021 -0500

    Merging the changes

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/UserProfile.vue | 43
 1 file changed, 43 insertions(+)

-->
<template>
<div>
    <h1> Welcome, {{firstName}}!</h1>
    <h2>Rosebudd Hotel</h2>
    <!--
    Form used to allow users to cancel a reservation
    Calls deleteReservation upon submit
    -->
    <form class="justify-content-center" id="newroom" @submit.prevent="this.deleteReservation">
        <!-- View all reserved rooms in a dynamic table -->
        <table id="reservations" class="table mt-5">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Reservation ID</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">End Date</th>
                    <th scope="col">Assigned Room</th>
                    <th scope="col">Special Requests</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(reservation, i) in this.reservations" :key="i">
                    <th scope="row">{{++i}}</th>
                    <td>{{reservation.uuid}}</td>
                    <td>{{new Date(reservation.startDate).toLocaleDateString()}}</td>
                    <td>{{new Date(reservation.endDate).toLocaleDateString()}}</td>
                    <td>{{reservation.assignedRoom}}</td>
                    <td>{{reservation.specialRequests}}</td>
                    <td><input type="radio" name="resUUID" id="resUUID" v-model="deletedUUID" :value="reservation.uuid" /></td>
                </tr>
            </tbody>
        </table>
        <br />
        <div class="container-fluid">
            <button class="btn btn btn-warning" type="submit">
                Submit
            </button>
            <button class="btn btn btn-standard">
                <router-link to="reservation"> New Reservation </router-link>
            </button>
            <button class="btn btn btn-standard">
                <router-link to="updateUser"> Update Profile </router-link>
            </button>
            <button class="btn btn btn-standard">
                <router-link to="/"> Home </router-link>
            </button>
            <button v-if="admin" class="btn btn btn-standard">
                <router-link to="adminhome"> Admin Menu </router-link>
            </button>
        </div>
    </form>
</div>
</template>


<script lang="ts">
// Script used to expose things to vue and also populate necessary data

// Use axios for simplicity
import axios from 'axios';
axios.defaults.withCredentials = true;
import router from '../router';
export default { // Expose all of the things to vue
    data() {
        let uuid = '';
        let firstName = '';
        let reservations = [];
        let admin = false;
        let deletedUUID = "";
        return {
            uuid,
            firstName,
            reservations,
            admin,
            deletedUUID
        }
    },
    methods: {
        // returns the cookie with the given name,
        // or undefined if not found
        getCookie: function(name) {
            let matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        },
        deleteReservation: function() { //Called when submit is pressed
            let data = new FormData();
            let uuid = this.deletedUUID;
            data.append("uuid", uuid);
            axios.post("http://localhost:4000/cancelReservation", data)
                .then(response => this.response = response.data)
                .then(router.push('userprofile'))
                .then(router.go(1))
                .catch(error => {
                    alert(error);
                });

        }

    },
    mounted() { // Called upon page load
        let uuid = this.getCookie("uuid");
        this.uuid = uuid;
        let firstName = this.getCookie("firstName");
        this.firstName = firstName;
        let admin = this.getCookie("admin");
        this.admin = admin;
        let data = new FormData();
        data.append("createdBy", uuid);
        axios.post('http://localhost:4000/userReservations', data)
            .then(response => response.data)
            .then(data => this.reservations = data)
            .catch(error => {
                alert(error);
            });
    }
}
</script>



<style>
input {
    margin: auto;
}
</style>
