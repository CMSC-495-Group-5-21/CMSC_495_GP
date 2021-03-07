<!--
Login page for users and admins to login
-->
<template>
<div>
    <div>
        <!--
        Login form.
        Calls processForm when the submit button is pressed
        -->
        <form class="justify-content-center" id="login" @submit.prevent="this.processForm">
            <h1>Rosebudd Hotel Login</h1>
            <label for="username" class="grey-text">Username </label>
            <input type="text" id="username" name="username" class="form-control" placeholder="username" v-model="username" />
            <br />
            <br />
            <label for="password" class="grey-text">
                Password
            </label>
            <input type="password" id="password" name="password" class="form-control" placeholder="password" v-model="password" />
            <br />
            <br />
            <div class="container-fluid">
                <button type="submit" class="btn btn btn-warning"> Sign In
                </button>
                <button class="btn btn btn-success">
                    <router-link to="profilecreation"> Register </router-link>
                </button>
                <button class="btn btn btn-standard">
                    <router-link to="/"> Home </router-link>
                </button>
            </div>
        </form>
    </div>
</div>
</template>


<script lang="ts">
// TS script for the submission and exposing to Vue

// Use axios for all of the requests, for simplicity
import axios from 'axios';
axios.defaults.withCredentials = true;
import router from '../router'
export default { // Expose the components to vue
    data() {
        var username = '';
        var password = '';
        return {
            username,
            password
        };
    },
    methods: {
        processForm: function() { // Called on form submission
            let data = new FormData();
            data.append('username', this.username);
            data.append('password', this.password);
            axios.post('http://localhost:4000/login', data)
                .then(response => this.response = response.data)
                .then(() => {
                    if (this.response === "Success") {
                        router.push('UserProfile');
                        router.go(1);
                    } else {
                        alert(this.response);
                    }

                })
                .catch(error => {
                    alert(error);
                });
        }
    }
}
</script>



<style>
input {
    margin: auto;
}
</style>
