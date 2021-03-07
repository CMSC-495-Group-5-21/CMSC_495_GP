<template>
<div>
    <h1>Please enter your information</h1>
    <form id="contactus" method="POST">
        <!-- name text -->
        <label for="contactUsName" class="grey-text"> Name </label>
        <input type="text" id="name" name="name" class="form-control" placeholder="ex Rolan Shmidtt" v-model="name" />
        <br />
        <br />
        <!-- Message text -->
        <label for="contactUsMessage" class="contactUs"> Message : </label>
        <textarea id="contactUsMessage" name="contactUsMessage" class="form-control" placeholder="Please enter message" v-model="specialRequests" rows="1" columns="50" />
        <br />
        <br />
        <!-- Submit Button -->
        <div class="container-fluid">
            <button class="btn btn btn-danger">
                <router-link to="thankyou"> Submit </router-link>
            </button>
        </div>
    </form>
</div>
</template>

<script lang='ts'>
export default {
    setup() {
        const msg = "name";
    },
};
</script>

<style>
.textbox {}

.name {}
</style>
