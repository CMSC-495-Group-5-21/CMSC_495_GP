<!--
Template used as a simple thank you page
Not really used by much though it could be included elsewhere if desired
-->
<template>
<div>
    <h2>Thank You for your Submission!</h2>
    <!-- Go to Home Page -->
    <div class="container-fluid">
        <button class="btn btn btn-standard">
            <router-link to="/">
                Home
            </router-link>
        </button>
    </div>
</div>
</template>


<script>
// Simply expose the component to vue
export default {

}
</script>



<style>
input {
    margin: auto;


}
</style>
