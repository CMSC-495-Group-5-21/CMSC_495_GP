<template>
<div>
    <h1> Welcome, {{firstName}}!</h1>
    <h2>Rosebudd Hotel</h2>
    <!-- View Rooms reserved -->
    <table id="users" class="table mt-5">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">User ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Middle Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Admin</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(user, i) in this.users" :key="i">
                <th scope="row">{{++i}}</th>
                <td>{{user.uuid}}</td>
                <td>{{user.firstName}}</td>
                <td>{{user.middleName}}</td>
                <td>{{user.lastName}}</td>
                <td>{{user.admin}}</td>
            </tr>
        </tbody>
    </table>
    <br />
    <div class="container-fluid">
        <button class="btn btn btn-standard">
            <router-link to="/"> Home </router-link>
        </button>
        <button v-if="admin" class="btn btn btn-standard">
            <router-link to="adminhome"> Admin Menu </router-link>
        </button>
    </div>
</div>
</template>


<script lang="ts">
import axios from 'axios';
axios.defaults.withCredentials = true;
import router from '../router';
export default {
    data() {
        let uuid = '';
        let firstName = '';
        let middleName = '';
        let lastName = '';
        let users = [];
        let admin = false;
        return {
            uuid,
            firstName,
            middleName,
            lastName,
            users,
            admin
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
        }

    },
    mounted() {
        let uuid = this.getCookie("uuid");
        this.uuid = uuid;
        let firstName = this.getCookie("firstName");
        this.firstName = firstName;
        let admin = this.getCookie("admin");
        this.admin = admin;
        axios.get('http://localhost:4000/getAllUsers')
            .then(response => response.data)
            .then(data => this.users = data)
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
