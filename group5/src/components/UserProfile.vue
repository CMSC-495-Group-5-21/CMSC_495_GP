<template>
  <div>
    <h2>Welcome</h2>
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
