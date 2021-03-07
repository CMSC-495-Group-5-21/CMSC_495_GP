<!--
Create a admin page for viewing and deleting reservations

            *** Change Log ***

            commit 8d82309e25d5a530e6b6e85e2224003ec309d605
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Mar 7 09:57:09 2021 -0500

    Added comments to all of the files that were missing them

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/ManageReservations.vue | 20 
 1 file changed, 16 insertions(+), 4 deletions(-)

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

 group5/src/components/ManageReservations.vue | 89
 1 file changed, 56 insertions(+), 33 deletions(-)

commit 47b1cb2f596de0a2172ceaaf6756f7cf834d5ce3
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Thu Mar 4 21:59:17 2021 -0500

    Added all sub admin pages
    Implemented basic functionality
    Everything seems to work ok
    Need to add the delete user/reservation still
    Need to add a user management portion still

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/ManageReservations.vue | 96
 1 file changed, 96 insertions(+)

-->
<template>
<div>
    <h1> Welcome, {{firstName}}!</h1>
    <h2>Rosebudd Hotel</h2>
    <!--
    Form for showing all of the reservations and deleting any of them
    Will call deleteReservation of form submit
    -->
    <form class="justify-content-center" id="newroom" @submit.prevent="this.deleteReservation">
        <!--
        Create a table of all of the reservations, pulled dynamically
        -->
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
// Script for exposing component to vue and for form methods

// Use axios for requests, for simplicity
import axios from 'axios';
axios.defaults.withCredentials = true;
import router from '../router';
export default { // Expose everything
    data() {
        let uuid = '';
        let firstName = '';
        let middleName = '';
        let lastName = '';
        let reservations = [];
        let admin = false;
        let deletedUUID = "";
        return {
            uuid,
            firstName,
            middleName,
            lastName,
            reservations,
            admin,
            deletedUUID,
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
        deleteReservation: function() { // Called upon form submision
            let data = new FormData();
            let uuid = this.deletedUUID;
            data.append("uuid", uuid);
            axios.post("http://localhost:4000/cancelReservation", data)
                .then(response => this.response = response.data)
                .then(router.push('adminhome'))
                .then(router.go(1))
                .catch(error => {
                    alert(error);
                });

        }

    },
    mounted() { // Called on page load
        let uuid = this.getCookie("uuid");
        this.uuid = uuid;
        let firstName = this.getCookie("firstName");
        this.firstName = firstName;
        let admin = this.getCookie("admin");
        this.admin = admin;
        axios.get('http://localhost:4000/getAllReservations')
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
