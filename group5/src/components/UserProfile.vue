<!--
More or less a landing page for users once they login
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
