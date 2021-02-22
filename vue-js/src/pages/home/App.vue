<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <button class="btn btn-primary" @click="reservation">
          Reservation
        </button>
      </li>
      <li>
        <div class="container-fluid">
          <button class="btn btn-secondary" v-='btnClick'>Manage Rooms</button>
        </div>
      </li>
      <li>
        <div class="container-fluid">
          <button type="button" class="btn btn-danger">Admin Login</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Welcome',
    data() {
      return {
        msg: 'Welcome to Hotel ....'
      }
    },
    methods: {
      reservation() {
        location.assign('../reservation.html')
      }
    }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
