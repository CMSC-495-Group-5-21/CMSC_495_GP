<!--
The homepage, which is very inappropriately named HelloWorld
Given enough time, this should be refactored but this is too much effort for
right now
-->
<template>
<div class="hello">
    <!-- If a message is passed to the user -->
    <h1>{{ msg }}</h1>
    <!-- Some basic information -->
    <div class="textbox">
        <p>We have rooms with doors.</p>
        <p>One towel per room, regardless of number of occupants.</p>
        <p>Should a roof leak, move the bed to a dry area.</p>
    </div>
    <br>
    <!-- Navigation buttons -->
    <ul>
        <li>
            <div class="container-fluid">
                <button class="btn btn btn-danger">
                    <router-link to="login"> Login </router-link>
                </button>
            </div>
        </li>
        <li>
            <div class="container-fluid">
                <button class="btn btn btn-success">
                    <router-link to="profilecreation"> Register </router-link>
                </button>
            </div>
        </li>
        <li>
            <div class="container-fluid">
                <button class="btn btn btn-warning">
                    <router-link to="contactus"> Contact Us </router-link>
                </button>
            </div>
        </li>
        <li>
            <div class="container-fluid">
                <button class="btn btn btn-warning">
                    <router-link to="about"> About Us </router-link>
                </button>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
// Script that exposes the component to VueJS for routing and reactivity
export default {
    name: 'Welcome',
    data() {
        return {
            msg: 'Welcome to Rosebudd Hotel'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: bold;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: black;
}
</style>
