<!--
Homepage for the administrative users
Contains links to all of the admin functionality
-->
<template>
<div>
    <h2>Welcome Admin</h2>
    <!-- View Rooms reserved -->
    <div class="container-fluid">
        <button class="btn btn btn-standard">
            <router-link to="addroom">
                Add Room
            </router-link>
        </button>
        <button class="btn btn btn-standard">
            <router-link to="addroomtype">
                Add Room Type
            </router-link>
        </button>
        <button class="btn btn btn-standard">
            <router-link to="manageusers">
                Manage Users
            </router-link>
        </button>
        <button class="btn btn btn-standard">
            <router-link to="managereservations">
                Manage Reservations
            </router-link>
        </button>
        <button class="btn btn btn-standard">
            <router-link to="/">
                Home
            </router-link>
        </button>
    </div>
</div>
</template>


<script>
// Used to simply expose this page to vue and the vueRouter
export default {

}
</script>



<style>
input {
    margin: auto;


}
</style>
