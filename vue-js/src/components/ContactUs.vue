<template>
  <div>
    <h1> Please enter your information</h1>
    <form id="contactus">
      <!-- name text -->
      <div class="name">
        <p>Name</p>
        <input type="text" v-model="msg">
      </div>
      <!-- Message text -->
      <div class="textbox">
        <p>Message</p>
        <input type="text" v-model="email">
      </div>
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
    msg      : 'message'
  }
})
</script>

<style>
.textbox{

  }

.name{

  }

</style>
