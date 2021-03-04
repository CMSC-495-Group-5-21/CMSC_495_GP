<template>
  <div>
    <h2>Rosebudd Hotel</h2>
    <!-- View Rooms reserved -->
    <form class="form-inline justify-content-center">
      <div class="form-group">
        <fieldset disabled>
          <div class="form-group">
            <label for="currentReservationFromDB">Current Reservation(s)</label>
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


<script lang="ts">
import axios from 'axios';
axios.defaults.withCredentials = true;
import router from '../router';
const uuid = document.cookie
.split(";")
.find(row => row.startsWith("uuid="))
.split('=')[1];
export default {
    data() {

    },
    methods: {

    },
    mounted() {

    }
}
</script>



<style>
input {
  margin: auto;
}
</style>
