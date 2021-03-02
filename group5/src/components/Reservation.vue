<template>
  <div>
    <h1>Reserve a Room at Rosebudd Hotel</h1>
    <form id="example">
      <!-- login -->
      <div class="name">
        <button class="btn btn btn-danger">
          <router-link to="login"> Login </router-link>
        </button>
      </div>
      <!-- date text -->
      <div class="date">
        <p>Date</p>
        <input type="date" v-model="date" />
      </div>
      <!-- Room select -->
      <div class="room">
        <p>Select a Room</p>
        <select v-model="multiSelect" multiple>
          <option>Room 1</option>
          <option>Room 2</option>
          <option>Room 3</option>
          <option>Room 4</option>
        </select>
      </div>
      <!-- Special Requests -->
      <br />
      <label for="specialRequests" class="requests"
        >Special Requests (May be ignored)
      </label>
      <input type="request" id="guestrequest" class="form-control" />
      <br />
      <br />
      <div class="container-fluid">
        <button class="btn btn btn-danger">
          <router-link to="thankyou"> Submit </router-link>
        </button>
        <button class="btn btn btn-standard">
          <router-link to="/"> Home </router-link>
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    const msg = "name";
    const multiSelect = [
      "King Suite 1",
      "King Suite 2",
      "Queen Suite 1",
      "Standard 1",
      "Standard 2",
      "Standard 3",
    ];
    return {};
  },
};
</script>

<style>
.name {
}

.date {
}

.container-fluid {
  color: black;
}
</style>
