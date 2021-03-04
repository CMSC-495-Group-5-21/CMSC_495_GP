<template>
  <div>
    <h2>Welcome Admin</h2>
    <!-- View Rooms reserved -->
    <div class="container-fluid">
      <button class="btn btn btn-standard">
        <router-link to="manage">
          Manage Rooms
        </router-link>
      </button>
    </div>
    <div class="container-fluid">
      <button class="btn btn btn-primary">
        <router-link to="reservation">
          New Reservation
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
