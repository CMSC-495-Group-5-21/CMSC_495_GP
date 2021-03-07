<!--
A admin template for managing users by making them admins

            *** Change Log ***

            commit 8d82309e25d5a530e6b6e85e2224003ec309d605
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Mar 7 09:57:09 2021 -0500

    Added comments to all of the files that were missing them

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/ManageUsers.vue | 18 
 1 file changed, 14 insertions(+), 4 deletions(-)

commit e988e4e17acd23580639982e3ae9f8e10f4b1779
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Mar 7 08:09:11 2021 -0500

    Updated formatting on all of the pages to make them fit the standard style guides

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/ManageUsers.vue | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)

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

 group5/src/components/ManageUsers.vue | 89
 1 file changed, 55 insertions(+), 34 deletions(-)

commit 47b1cb2f596de0a2172ceaaf6756f7cf834d5ce3
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Thu Mar 4 21:59:17 2021 -0500

    Added all sub admin pages
    Implemented basic functionality
    Everything seems to work ok
    Need to add the delete user/reservation still
    Need to add a user management portion still

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/ManageUsers.vue | 96
 1 file changed, 96 insertions(+)

-->
<template>
<div>
    <h1> Welcome, {{firstName}}!</h1>
    <h2>Rosebudd Hotel</h2>
    <!--
    The form for displaying all of the users
    calls makeAdmin upon submission
    -->
    <form class="justify-content-center" id="newroom" @submit.prevent="this.makeAdmin">
        <!-- View all users, pulled dynamically -->
        <table id="users" class="table mt-5">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">User ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Middle Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Admin</th>
                    <th scope="col">Make Admin</th>
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
                    <td><input type="radio" name="newAdmin" id="newAdmin" v-model="newAdmin" :value="user.uuid" /></td>
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
// Script to expose things to vue and helpful methods for submssions

// USe axios to manage requests, for simplicity
import axios from 'axios';
axios.defaults.withCredentials = true;
import router from '../router';
export default { // Expose everything to vue
    data() {
        let uuid = '';
        let firstName = '';
        let middleName = '';
        let lastName = '';
        let users = [];
        let admin = false;
        let newAdmin = "";
        return {
            uuid,
            firstName,
            middleName,
            lastName,
            users,
            admin,
            newAdmin
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
        makeAdmin: function() { // Called upon form submission
            let data = new FormData();
            let uuid = this.newAdmin;
            data.append("uuid", uuid);
            axios.post("http://localhost:4000/makeAdmin", data)
                .then(response => this.response = response.data)
                .then(router.push('adminhome'))
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
