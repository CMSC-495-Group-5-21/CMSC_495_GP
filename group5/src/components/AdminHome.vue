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
  export default {

  }
</script>



<style>
  input{
    margin: auto;


  }

</style>
