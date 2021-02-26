<template>
  <div>
    <h1> Reserve a Room</h1>
    <form id="example">
      <!-- name text -->
      <div class="name">
        <p>Name</p>
        <input type="text" v-model="message" placeholder="Your name">
      </div>
      <!-- Number of Occupants -->
      <div>
        <p for="quantity">Number of Occupants (Max 6)</p>
        <input type="number" id="quantity" name="quantity" min="1" max="6">
      </div>
      <!-- date text -->
      <div class="date">
        <p>Date</p>
        <input type="date" v-model="date">
      </div>
      <!-- Room select -->
      <div class="room">
        <p>Select a Room</p>
        <select v-model="multiSelect" multiple>
          <option>King Suite 1</option>
          <option>King Sutie 2</option>
          <option>Queen Suite 1</option>
          <option>Standard 1</option>
          <option>Standard 2</option>
          <option>Standard 3</option>
        </select>
      </div>
      <!-- Special Request -->
      <div>
        <p>Special Request</p>
        <input type="text" v-model="message" placeholder="Enter in Request">
      </div>
      <br />
      <div class="container-fluid">
        <button class="btn btn btn-danger">
          <router-link to="thankyou">
            Submit
          </router-link>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
  export default({
  el: '#example',
  data: {
    msg      : 'name',
    multiSelect: ['King Suite 1', 'King Suite 2', 'Queen Suite 1', 'Standard 1',
    'Standard 2', 'Standard 3']
  }
})
</script>

<style>
.name{

  }

.date{

  }

.container-fluid{
  color: black;

  }

</style>
