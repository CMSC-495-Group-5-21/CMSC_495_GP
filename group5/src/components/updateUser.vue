<template>
<div>
    <div>
        <h1>Rosebudd Hotel Profile Creation</h1>
        <!-- Create Profile for New Users -->
        <form class="justify-content-center" id="upateUser" @submit.prevent="this.processForm">
            <label for="username" class="grey-text">Username </label>
            <input type="text" id="username" name="username" class="form-control" placeholder="username" v-model="username" />
            <br />
            <br />
            <label for="password" class="grey-text">Password </label>
            <input type="password" id="password" name="password" class="form-control" placeholder="password" v-model="password" />
            <br />
            <br />
            <label for="confirmPassword" class="grey-text">Confirm Password </label>
            <input type="password" id="confirmPassword" name="confirmPassword" class="form-control" placeholder="Re-enter Password" v-model="confirmPassword" />
            <br />
            <br />
            <label for="prefix" class="grey-text">Prefix </label>
            <input type="text" id="prefix" name="prefix" class="form-control" placeholder="Dr" v-model="prefix" />
            <br />
            <br />
            <label for="firstName" class="grey-text">First Name </label>
            <input type="text" id="firstName" name="firstName" class="form-control" placeholder="John" v-model="firstName" />
            <br />
            <br />
            <label for="middleName" class="grey-text">Middle Name </label>
            <input type="text" id="middleName" name="middleName" class="form-control" placeholder="Jacob" v-model="middleName" />
            <br />
            <br />
            <label for="lastName" class="grey-text">Last Name </label>
            <input type="text" id="lastName" name="lastName" class="form-control" placeholder="Schmidtt" v-model="lastName" />
            <br />
            <br />
            <label for="suffix" class="grey-text">Suffix </label>
            <input type="text" id="suffix" name="suffix" class="form-control" placeholder="II" v-model="suffix" />
            <br />
            <br />
            <!-- Submit | Home Buttons -->
            <ul>
                <li>
                    <div class="container-fluid">
                        <button class="btn btn btn-warning" type="submit">
                            <router-link to="userprofile"> Submit </router-link>
                        </button>
                    </div>
                </li>
                <li>
                    <div class="container-fluid">
                        <button class="btn btn btn-warning">
                            <router-link to="/"> Home </router-link>
                        </button>
                    </div>
                </li>
            </ul>
        </form>
    </div>
</div>
</template>


<script lang="ts">
import axios from "axios";
import router from "../router";
export default {
    data() {
        var username = "";
        var password = "";
        var confirmPassword = "";
        var prefix = "";
        var firstName = "";
        var middleName = "";
        var lastName = "";
        var suffix = "";
        let uuid = "";
        return {
            username,
            password,
            confirmPassword,
            prefix,
            firstName,
            middleName,
            lastName,
            suffix,
            uuid
        };
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
        processForm: function() {
            let data = new FormData();
            data.append("uuid", this.uuid);
            data.append("username", this.username);
            data.append("password", this.password);
            data.append("prefix", this.prefix);
            data.append("firstName", this.firstName);
            data.append("middleName", this.middleName);
            data.append("lastName", this.lastName);
            data.append("suffix", this.suffix);
            axios
                .post("http://localhost:4000/updateUser", data)
                .then((response) => (this.response = response.data))
                .then(router.push("userprofile"))
                .catch((error) => {
                    alert(error);
                });
        },
    },
    mounted() {
        let uuid = this.getCookie("uuid");
        this.uuid = uuid;
    }
};
</script>



<style>
input {
    margin: auto;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}
</style>
