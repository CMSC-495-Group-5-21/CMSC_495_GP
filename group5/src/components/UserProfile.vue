<template>
  <div>
    <h2>Rosebudd Hotel</h2>
    <!-- View Rooms reserved -->
    <form class="form-inline justify-content-center">
      <div class="form-group">
        <fieldset disabled>
          <div class="form-group">
            <label for="currentReservationFromDB">Current Reservation</label>
            <input
              type="text"
              class="form-control mb-2 mr-sm-2"
              id="currentReservationFromDB"
              placeholder=""
            />
          </div>
          <br />
          <div class="form-group">
            <label for="pastReservationFromDB">Past Reservation(s)</label>
            <input
              type="text"
              id="pastReservationFromDB"
              class="form-control"
              placeholder=""
            />
          </div>
        </fieldset>
      </div>
    </form>
     <br />
    <div class="container-fluid">
      <button class="btn btn btn-standard">
        <router-link to="reservation"> New Reservation </router-link>
      </button>
      <button class="btn btn btn-standard">
        <router-link to="/"> Home </router-link>
      </button>
    </div>
  </div>
</template>


<script>
export default {}
</script>



<style>
input {
  margin: auto;
}
</style>
